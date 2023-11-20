<template>
    <NavBar2/>
    <div class="container">
        <br/>
        <div class="titleMark"><span class="pageTitle">Estadísticas View</span></div>
        <GraficosEstadisticas :contadores="contadores"/>
    </div>
</template>

<script setup>
import NavBar2 from '@/components/NavBar2.vue'
import GraficosEstadisticas from '@/components/GraficosEstadisticas.vue';
import { reactive, onMounted  } from 'vue';

import { db } from "../utils/FirebaseConfig.js"
import { collection, getDocs } from "firebase/firestore";

let users = reactive([]);
let tickets = reactive([]);
let contadores = reactive([
    {
        usersNum: 0,
        usersActive: 0,
        usersDisconnect: 0,
        usersAdmin: 0,
        usersDocente: 0,
        usersServicios: 0
    },
    {
        ticketsNum: 0,
        ticketsProgress: 0,
        ticketsEnd: 0,
        ticketsActive: 0,
        ticketsWait: 0,
    },
    {
        usersTecnico: 0,
        userAssignment: 0,
        userUnAssignment: 0,
    }
])


onMounted(()=>{
    getListados();
})
async function getListados() {
    const querySnapshotUsers = await getDocs(collection(db, "users"));
    const querySnapshotTickets = await getDocs(collection(db, "tickets"));

    querySnapshotUsers.forEach((doc) => {
        users.push(doc.data());
        let activesUsers = users.filter(user => user.state == true)
        let disconnectUsers = users.filter(user => user.state == false)
        let userTecnico = users.filter(user => user.rol == 'Técnico')
        let tecnicoAsignado = users.filter(user => user.assignment == true)
        let tecnicoNoAsignado = users.filter(user => user.assignment == false)
        contadores[0].usersNum = users.length;
        contadores[0].usersActive = activesUsers.length;
        contadores[0].usersDisconnect = disconnectUsers.length;

        contadores[2].usersTecnico = userTecnico.length
        contadores[2].userAssignment = tecnicoAsignado.length;
        contadores[2].userUnAssignment = tecnicoNoAsignado.length
    });

    querySnapshotTickets.forEach((doc) => {
        tickets.push(doc.data());
        let ticketProcces = tickets.filter(ticket => ticket.state == "procces")
        let ticketEnd = tickets.filter(ticket => ticket.state == "end")
        let ticketActive = tickets.filter(ticket => ticket.state == "active")
        let ticketWait = tickets.filter(ticket => ticket.state == "wait")
        contadores[1].ticketsNum = tickets.length
        contadores[1].ticketsProgress = ticketProcces.length
        contadores[1].ticketsEnd = ticketEnd.length
        contadores[1].ticketsActive = ticketActive.length
        contadores[1].ticketsWait = ticketWait.length
        // arrayGraficoResumen.ticketsNum = tickets.length;
    });
}



</script>
<script>
    export default {
        name:'Estadisticas-View'
    }
</script>
<style scoped>
.container {
    width: 100%;
    height: 100%;
   
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