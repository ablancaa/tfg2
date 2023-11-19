
<template>
    <NavBar2 />
    <div class="container">
        <br />
        <div class="titleMark"><span class="pageTitle">User Detail</span></div>
        <br />     
        <div class="col-12 col-md-4 silueta-card">
            <div class="col">
                <img class="imgUser" :src="route.params.imgUser" width="65" height="65" />
                <p class="iduser">{{ user[0].idUser }}</p>
            </div>
            <div class="">
                <p class="nameSurname">{{ user[0].name }} {{ user[0].surname1 }} {{ user[0].surname2 }}</p>
                <p class="email">{{ user[0].email }}</p>
                <p class="nameSurname">{{ user[0].rol }} <br/></p>
                <p class="phone">{{ user[0].phone }}</p>
            </div>
            <div class="col col-md-2 item-3">
                <button @click="deleteUser(route.params.idUser)" class="ico"><img src="../assets/ico/delete.png" width="20" height="20"  /></button>
            </div>
        </div>

        <div class="container">
        <hr />
        <p class="ticketAsociados">Tickets Asociados:</p>
            <div class="row">
                <div class="col-6 silueta-ticket" v-for=" ticket in ticketsUsuario" :key="ticket.idUser">
                   <p class="info"><strong>{{ ticket.idTicket }}</strong><br/>
                   <span class="info iduser">{{ ticket.title }}</span><br/>
                  <span class="info iduser">{{ ticket.state }}</span> </p>
                </div>
            </div>
        </div><!--fin container 2 -->
</div>
            
            
   

</template>

<script setup>
//import { collection, query, where } from "firebase/firestore";
//import { db } from "../utils/FirebaseConfig.js"
import { reactive, ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import { db, getDocs } from "../utils/FirebaseConfig.js"
import { collection, deleteDoc, doc } from "firebase/firestore";

import NavBar2 from '@/components/NavBar2.vue';

const router = useRouter() //Utiliza el router.push("/")
const route = useRoute() //recibe los parámetros del router

let refUsuarioEnFirebase = ref()
let ids = reactive([]);
let users = reactive([]);
let tickets = reactive([]);
let ticketsUsuario = reactive([]);


let user = reactive([
    {
        idUser: route.params.idUser,
        imgUser: route.params.imgUser,
        name: route.params.name,
        surname1: route.params.surname1,
        surname2: route.params.surname2,
        rol: route.params.rol,
        email: route.params.email,
        phone: route.params.phone,
        assignment: route.params.assignment,

    }]
);

onMounted(() => {
    getListaTickets();
});

async function deleteUser(idUser) {
    console.log(idUser)
    const querySnapshotClients = await getDocs(collection(db, "users"));
    querySnapshotClients.forEach((doc) => {
        ids.push(doc.id);
        users.push(doc.data());
    });

    for (let i = 0; i < users.length; i++) {
        if (idUser == users[i].idUser) {
            console.log(ids[i])
            console.log(users[i].idUser)
            refUsuarioEnFirebase.value = ids[i]
            console.log(refUsuarioEnFirebase.value)
        }
    }

    await deleteDoc(doc(db, "users", refUsuarioEnFirebase.value));
    await router.push("/userView")
}

async function getListaTickets() {

const querySnapshotTickets = await getDocs(collection(db, "tickets"));
querySnapshotTickets.forEach((doc) => {
 tickets.push(doc.data());
 console.log(tickets)
 
});
 let ticketsUsu = tickets.filter(ticket => ticket.idUser == route.params.idUser)
 console.log(route.params.idUser)
 console.log(ticketsUsu);
 for (let i=0; i <  ticketsUsu.length; i++){
    console.log(ticketsUsu[i])
    ticketsUsuario.push(ticketsUsu[i])
 }
 
 

}
</script>

<style scoped>
.titleMark {
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
.info {
margin-top: 10px;
text-align: left;
}
.imgUser {
    border-radius: 50%;
    border: 2px solid rgb(0, 0, 0);
    margin: 10px 10px 10px 10px;
}
.nameSurname {
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 10px 0px 0px 0px;
    text-align: left;

}

.email {
    text-align: left;
}
.phone {
    text-align: left;
    margin-top: 15px;
    font-size: 18px;
}
.ico {
    text-align: center;
    border-radius: 0px 10px 10px 0px;
    border: 0px;
    padding: 5px;
    /* margin-left: -10px; */
}
.iduser{
    text-align: center;
    font-size: 10px;
}
.silueta-card {
    display: flex;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.50);
    background: #ffffff;
    box-shadow: 2px 6px 4px 1px rgba(0, 0, 0, 0.25);
}
hr {
    height: 2px;
    background-color: black;
    box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.25)
}
.item-1{
    text-align: left;
    float: left;
    background-color: aqua;
    width: 80px;
}
.item-2{
    float: left;
    text-align: left;
    background-color: rgb(67, 133, 133); 
}
.item-3 {
    display: flex;
    align-content: center;
    justify-content: end;
    border-radius: 0px 10px 10px 0px; 
} 

.ticketAsociados {
    text-align: left;
    color: #000;
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 10px 0px 0px 0px;
    text-align: left;   
}
.silueta-ticket {
     margin-top: 10px;
     margin-bottom: 10px;
     border-radius: 10px;
     box-shadow: -5px 6px 4px 0px rgba(0, 0, 0, 0.25);
     border: 1px solid rgba(0, 0, 0, 0.50);
}

</style>