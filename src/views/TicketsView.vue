<template>
    <NavBar2/>
  <div class="container">
    <br/>
        <div class="titleMark"><span class="pageTitle">Tickets View</span></div>
        <div class="searchbar"><SearchBar/></div>
        <div class="header-opciones">
          <div class="row">
                <div class="col"><button class="btn">Add Ticket</button></div>
                <div class="col"></div>
                <div class="col"></div>
              </div>
        </div>
          <TicketsList :ticketList="tickets" :userList="users"/>
  </div>
</template>

<script setup>
import NavBar2 from '@/components/NavBar2.vue'
import SearchBar from '@/components/SearchBar.vue'
import TicketsList from '@/components/TicketsList.vue'

import { reactive, onMounted } from "vue";
import { db } from "../utils/FirebaseConfig.js"
import { collection, getDocs } from "firebase/firestore";

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

// async function getListados() {

// const querySnapshotUsers = await getDocs(collection(db, "users"));
// const querySnapshotTickets = await getDocs(collection(db, "tickets"));
// const querySnapshotClients = await getDocs(collection(db, "clients"));

// querySnapshotUsers.forEach((doc) => {
//     users.push(doc.data());
//     let activesUsers = users.filter(user => user.state == true)
//     let disconnectUsers = users.filter(user => user.state == false)
//     contadores[0].usersNum = users.length;
//     contadores[0].usersActive = activesUsers.length;
//     contadores[0].usersDisconnect = disconnectUsers.length;
// });

// querySnapshotTickets.forEach((doc) => {
//     tickets.push(doc.data());
//     let ticketProcces = tickets.filter(ticket => ticket.state == "procces")
//     let ticketEnd = tickets.filter(ticket => ticket.state == "end")
//     contadores[1].ticketsNum = tickets.length
//     contadores[1].ticketsProgress = ticketProcces.length
//     contadores[1].ticketsEnd = ticketEnd.length
// });

// querySnapshotClients.forEach((clientsList) => {
//     clients.push(clientsList.data());
//     let activesClients = clients.filter(client => client.state == true)
//     let disconnectClients = clients.filter(client => client.state == false)
//     contadores[2].clientsNum = clients.length
//     contadores[2].clientsActive = activesClients.length;
//     contadores[2].clientsDisconnect = disconnectClients.length;
// });

//console.log(users)
//console.log(tickets)
//console.log(clients) 
//}

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
    margin-left: 0px;
    border-color: white;
    color: #ffffff;
    font-weight: 600;
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