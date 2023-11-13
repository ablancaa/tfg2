<template>
    <NavBar2/>
    <div class="container">
        <br/>
        <div class="titleMark"><span class="pageTitle">Users View</span></div>
        <div class="searchbar"><SearchBar/></div>
        <div class="header-opciones">
            <div class="row">
                <div class="col"><button class="btn">Add User</button></div>
                <div class="col"></div>
                <div class="col">
                    <div class="row">
                        <div class="col"><p class="estado-online">On-Line:</p><p class="estado-offline">Off-Line:</p></div>
                        <div class="col"><div class="circulo-verde">{{ contadores[0].usersActive }}</div><div class="circulo-rojo">{{ contadores[0].usersDisconnect }}</div></div>
                    </div>
                </div>
            </div>
        </div>
        <UsersList :usersList="users"/>
    </div>
</template>

<script setup>
import NavBar2 from '@/components/NavBar2.vue'
import SearchBar from '@/components/SearchBar.vue'
import UsersList from '@/components/UsersList.vue'

import { reactive, onMounted } from "vue";
import { db } from "../utils/FirebaseConfig.js"
import { collection, getDocs } from "firebase/firestore";

let users = reactive([]);
let contadores = reactive ([   {
        usersNum: 0,
        usersActive: 0,
        usersDisconnect: 0
    }
]);

onMounted(() => {
    getListaUsuarios();

});

async function getListaUsuarios() {
    const querySnapshotUsers = await getDocs(collection(db, "users"));
    
    querySnapshotUsers.forEach((doc) => {
    users.push(doc.data());
    let activesUsers = users.filter(user => user.state == true)
        let disconnectUsers = users.filter(user => user.state == false)
        contadores[0].usersNum = users.length;
        contadores[0].usersActive = activesUsers.length+1;
        contadores[0].usersDisconnect = disconnectUsers.length;
   
});
console.log(contadores[0].usersNum)
console.log(contadores[0].usersActive)
console.log(contadores[0].usersDisconnect)
console.log(users);
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
        name:'Users-View'
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
.header-opciones{
    margin-top: 10px;
    border-radius: 10px;
    height: 55px;
    width: 100%;
    background-color: rgb(0, 0, 0);
    color: #ffffff;
}
.btn {
    margin-top: 9px;
    margin-left: 0px;
    border-color: white;
    color: #ffffff;
    font-weight: 600;
}
.pageTitle {
    color: #ffffff;
    font-size: 38px;
    font-weight: 700;
}
.circulo-verde {
    width: 20px;
    height: 20px;
    margin: auto;
    margin-left: -15px;
    margin-top: 5px;
    border-radius: 50%;
    background: rgb(67, 228, 22);
    color: black;
}

.circulo-rojo {
    width: 20px;
    height: 20px;
    margin: auto;
    margin-top: 4px;
    margin-left: -15px;
    border-radius: 50%;
    background: rgb(228, 22, 22);
}

.estado-online{
    margin-top: 3px;
    margin-left: 40px;
    width: 80px;
}

.estado-offline{
    margin-top: -13px;
    margin-left: 40px;
    width: 80px;
}

</style>