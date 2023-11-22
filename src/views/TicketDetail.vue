
<template>
  <NavBar2 />
  <div class="container">
      <br />
      <div class="titleMark"><span class="pageTitle">Ticket Detail</span></div>
      <br />     
      <div class="col-12 col-md-4 silueta-card">
          <div class="col">
              <!-- <img class="imgUser" :src="route.params.imgUser" width="65" height="65" /> -->
              <p class="iduser"></p>
          </div>
          <div class="">
              <p class="nameSurname"></p>
              <p class="email">{{ ticket[0].idTicket }}</p>
              <p class="nameSurname">{{ ticket[0].title }} <br/></p>
              <p class="phone"></p>
          </div>
          <div class="col col-md-2 item-3">
              <button @click="deleteTicket(route.params.idTicket)" class="ico"><img src="../assets/ico/delete.png" width="20" height="20"  /></button>
          </div>
      </div>

      <div class="container">
      <hr />
      <p class="ticketAsociados">Tickets Asociados:</p>
          <div class="row">
              <div class="col-6" v-for=" ticket in ticketsUsuario" :key="ticket.idUser">
              <div class="silueta-ticket">
                 <p class="info"><strong></strong><br/>
                 <span class="info iduser"></span><br/>
                 <span class="info iduser"></span> </p>
              </div>
          </div>
          </div>
      </div><!--fin container 2 -->
</div>
          
          
 

</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { db, getDocs } from "../utils/FirebaseConfig.js";
import { collection, deleteDoc, doc } from "firebase/firestore";

import NavBar2 from '@/components/NavBar2.vue'

const router = useRouter() //Utiliza el router.push("/")
const route = useRoute() //recibe los parámetros del router

let refUsuarioEnFirebase = ref()
let ids = reactive([]);
let tickets = reactive([]);
let users = reactive([]);
let ticket = reactive([
    {
        idTicket: route.params.idTicket,
        title: route.params.title,

    }]);
onMounted(() => {
    getListaTickets();
    getListaUsers();

});

async function getListaUsers() {
 const querySnapshotUsers = await getDocs(collection(db, "users"));
  querySnapshotUsers.forEach((doc) => {
    users.push(doc.data());
    // let activesUsers = users.filter(user => user.state == true)
    // let disconnectUsers = users.filter(user => user.state == false)
    // contadores[0].usersNum = users.length;
    // contadores[0].usersActive = activesUsers.length;
    // contadores[0].usersDisconnect = disconnectUsers.length;
  });
  //console.log(users);
}
async function getListaTickets() {

    const querySnapshotTickets = await getDocs(collection(db, "tickets"));
    querySnapshotTickets.forEach((doc) => {
     tickets.push(doc.data());
    //  let ticketProcces = tickets.filter(ticket => ticket.state == "procces")
    //  let ticketEnd = tickets.filter(ticket => ticket.state == "end")
    //  contadores[0].ticketsNum = tickets.length
    //  contadores[0].ticketsProcces = ticketProcces.length
    //  contadores[0].ticketsEnd = ticketEnd.length
 });
//console.log("Num Tickets: "+contadores[0].ticketsNum)
//console.log("Tickets Procces: "+contadores[0].ticketsProcces)
//console.log("Tickets End: "+contadores[0].ticketsEnd)
//console.log(tickets);
}

  async function deleteTicket(idTicket) {
    console.log(idTicket)
    const querySnapshotClients = await getDocs(collection(db, "tickets"));
    querySnapshotClients.forEach((doc) => {
        ids.push(doc.id);
        users.push(doc.data());
    });

    for (let i = 0; i < tickets.length; i++) {
        if (idTicket == tickets[i].idTicket) {
            //console.log(ids[i])
            //console.log(users[i].idUser)
            refUsuarioEnFirebase.value = ids[i]
            //console.log(refUsuarioEnFirebase.value)
        }
    }

    await deleteDoc(doc(db, "tickets", refUsuarioEnFirebase.value));
    await router.push("/ticketsView")
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