<template>
    <NavBar2/>
  <div class="container">
    <br/>
        <div class="titleMark"><span class="pageTitle">Tickets View</span></div>
        <div class="searchbar"><SearchBar v-on:search="setSearchTerm"/></div>
        <div class="header-opciones">
          <div class="row">
                <div class="col"><button class="btn">Add Ticket</button></div>
                <div class="col"></div>
                <div class="col"></div>
              </div>
        </div>
          <TicketsList :ticketList="ticketsListFiltered" :userList="users"/>
  </div>
</template>

<script setup>
import NavBar2 from '@/components/NavBar2.vue'
import SearchBar from '@/components/SearchBar.vue'
import TicketsList from '@/components/TicketsList.vue'

import { reactive, onMounted, ref, computed } from "vue";
import { db } from "../utils/FirebaseConfig.js"
import { collection, getDocs } from "firebase/firestore";

let searchTerm = ref("");
let tickets = reactive([]);
let users = reactive([]);
let contadores = reactive ([ 
    {
      ticketsNum: 0,
      ticketsProcces: 0,
      ticketsEnd: 0
    }
]);

onMounted(() => {
    getListaTickets();
    getListaUsers();

});
const ticketsListFiltered = computed(() => {
  if (!searchTerm.value) {
    return tickets;
  } else if (searchTerm.value) {
    return tickets.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        item.idUser.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        item.idTicket.toLowerCase().includes(searchTerm.value.toLowerCase())
      );
    });
  }
  return tickets;
});
function setSearchTerm(search) {
  searchTerm.value = search;
}
async function getListaUsers() {
 const querySnapshotUsers = await getDocs(collection(db, "users"));
  querySnapshotUsers.forEach((doc) => {
    users.push(doc.data());
    let activesUsers = users.filter(user => user.state == true)
    let disconnectUsers = users.filter(user => user.state == false)
    contadores[0].usersNum = users.length;
    contadores[0].usersActive = activesUsers.length;
    contadores[0].usersDisconnect = disconnectUsers.length;
  });
  //console.log(users);
}
async function getListaTickets() {

    const querySnapshotTickets = await getDocs(collection(db, "tickets"));
    querySnapshotTickets.forEach((doc) => {
     tickets.push(doc.data());
     let ticketProcces = tickets.filter(ticket => ticket.state == "procces")
     let ticketEnd = tickets.filter(ticket => ticket.state == "end")
     contadores[0].ticketsNum = tickets.length
     contadores[0].ticketsProcces = ticketProcces.length
     contadores[0].ticketsEnd = ticketEnd.length
 });
console.log("Num Tickets: "+contadores[0].ticketsNum)
console.log("Tickets Procces: "+contadores[0].ticketsProcces)
console.log("Tickets End: "+contadores[0].ticketsEnd)
//console.log(tickets);
}



</script>
<script>
  export default {
      name:'Tickets-View'
  }
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
}
.header-opciones{
    margin-top: 10px;
    border-radius: 10px;
    height: 55px;
    width: 100%;
    background-color: rgb(0, 0, 0);
}
.btn {
    margin-top: 9px;
    margin-left: 10px;
    border-color: white;
    color: #ffffff;
    font-weight: 600;
    width: 110px;
}
.titleMark{
  margin-top: 50px;
  border-radius: 10px;
  height: 55px;
  width: 100%;
  background-color: rgb(0, 0, 0);
  
}

.pageTitle {
  color: #ffffff;
  font-size: 38px;
  font-weight: 700;
}

</style>