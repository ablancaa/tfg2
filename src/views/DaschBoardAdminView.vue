<template>
    <NavBar2/>
    <div class="container">
    <br/>
        <div class="titleMark"><span class="pageTitle">Dashboard Admin</span></div>

    <div class="row">
        <div class="contenFlex">
            <div class="bloque-estadiscicas"><h1>Estadísticas</h1></div>
            <div class="bloque-tickets">
                <h1><img alt="Imagen tickets" src="../assets/ico/logoTicketBlack.png" width="70"> Mis Tickets {{ contadores[1].ticketsNum }}</h1>
                <h5>En Proceso: {{ contadores[1].ticketsProgress }}</h5>
                <h5>Finalizados: {{ contadores[1].ticketsEnd }}</h5>
            </div>
            <div class="bloque-usuarios">
                <h1><img alt="Vue logo" src="../assets/ico/userBlack.png" width="70">Usuarios {{ contadores[2].clientsNum }}</h1>
                <h5>On-line: {{ contadores[2].clientsActive }}</h5>
                <h5>Off-line: {{ contadores[2].clientsDisconnect }}</h5>
            </div>
            <div class="bloque-tecnicos">
                <h1><img alt="Vue logo" src="../assets/ico/userBlack.png" width="70">Técnicos {{ contadores[0].usersNum }}</h1>
                <h5>On-line: {{ contadores[0].usersActive }}</h5>
                <h5>Off-line: {{ contadores[0].usersDisconnect }}</h5>
            </div>
        </div>
    </div>
    
    </div><!--Fin container -->
    <br/>
    <Footer/>
</template>

<script setup>
//import NavBar from '@/components/NavBar.vue'
import NavBar2 from '@/components/NavBar2.vue'
import Footer from '@/components/Footer.vue'

import { reactive, onMounted } from "vue";
import { db } from "../utils/FirebaseConfig.js"
import { collection, getDocs } from "firebase/firestore";

let users = reactive([]);
let tickets = reactive([]);
let clients = reactive([]);

let contadores = reactive([
  { usersNum: 0,
    usersActive: 0,
    usersDisconnect: 0
  },
  {
    ticketsNum: 0,
    ticketsProgress: 0,
    ticketsEnd: 0 
  },
  {
    clientsNum: 0,
    clientsActive: 0,
    clientsDisconnect: 0 
  },
])



  onMounted(() => {
    getListados();
    
  });

async function getListados() {
  
  const querySnapshotUsers = await getDocs(collection(db, "users"));
  const querySnapshotTickets = await getDocs(collection(db, "tickets"));
  const querySnapshotClients = await getDocs(collection(db, "clients"));
  
  querySnapshotUsers.forEach((doc) => {
    users.push(doc.data());
    let activesUsers = users.filter(user => user.state == true)
    let disconnectUsers = users.filter(user => user.state == false)
    contadores[0].usersNum = users.length;
    contadores[0].usersActive = activesUsers.length;
    contadores[0].usersDisconnect = disconnectUsers.length;
  });
  
  querySnapshotTickets.forEach((doc) => {
    tickets.push(doc.data());
    let ticketProcces = tickets.filter(ticket => ticket.state == "procces")
    let ticketEnd = tickets.filter(ticket => ticket.state == "end")
    contadores[1].ticketsNum = tickets.length
    contadores[1].ticketsProgress = ticketProcces.length
    contadores[1].ticketsEnd = ticketEnd.length
  });
  
  querySnapshotClients.forEach((clientsList) => {
    clients.push(clientsList.data());
    let activesClients = clients.filter(client => client.state == true)
    let disconnectClients = clients.filter(client => client.state == false)
    contadores[2].clientsNum = clients.length
    contadores[2].clientsActive = activesClients.length;
    contadores[2].clientsDisconnect = disconnectClients.length;
  });
  
  //console.log(users)
  //console.log(tickets)
  //console.log(clients)
}

</script>

<script>
    export default {
        name:'Dashboard-Admin'
    }
</script>

<style scoped>
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
.container {
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
}

.contenFlex{
    display: flex;
    flex-direction: column; 
}

.bloque-estadiscicas{
    height: 150px;
    flex-shrink: 0;
    margin-top: 15px;
    height: 180px;
    background-color: aqua;
    border-radius: 10px;
}
.bloque-tickets{
    height:auto;
    margin-top: 10px;
    height: auto;
    background-color: rgb(216, 216, 216);
    border-radius: 10px;
}.bloque-usuarios{
    margin-top: 10px;
    height:auto;
    background-color: rgb(216, 216, 216);
    border-radius: 10px;
}
.bloque-tecnicos{
    margin-top: 10px;
    height: auto;
    background-color: rgb(216, 216, 216);
    border-radius: 10px;
    margin-bottom: -5px;
}
</style>