<template>
<NavBar2 :currenUser="currenUser"/>
<div class="container">
    <br/>
    <div class="cabecera">
        <div class="titleMark"><span class="pageTitle">Dashboard User</span></div>
        <router-link to="/ticketsView" class="page-link"> 
        <div class="bloque-estadiscicas-usuario">
            <div>
                <h1><img alt="Imagen tickets" src="../assets/ico/logoTicketBlack.png" width="70"> Mis Tickets</h1>
                <hr/>
                    <div class="row">
                        <div class="col">
                            <strong>Nº Tickets:</strong> 
                            <span class="num-contador"><span class="circulo-verde">{{ ticketsUsuario.length }}</span></span>
                        </div>
                        <div class="col">
                            <img src="../assets/ico/notificacion.png" width="40" height="40" class="ico"/> 
                            <!-- <span class="num-contador"><span class="circulo-verde">{{ ticketsUsuario.length }}</span></span> -->
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <strong>En proceso:</strong> 
                            <span class="num-contador"><span class="circulo-verde">{{ contadores[1].ticketsProgress }}</span></span>
                        </div>
                        <div class="col">
                            <strong></strong> 
                            <span class="num-contador"><span class="circulo-notificaciones">25</span></span>
                        </div>
                    </div>
                    
                    <!-- <div class="row">
                        <div class="col">
                            <strong>En proceso:</strong> 
                            <span class="num-contador"><span class="circulo-verde">{{ ticketsUsuario.length }}</span></span>
                        </div>
                        <div class="col">25</div>
                    </div> -->
            </div>
        </div></router-link>
    </div><!-- fin Cabecera -->
    <div class="row">
        <div class="col-xs-12 col-md-12 col-lg-12 contenFlex">
            <hr />
            <div class="historico"><span class="pageTitle">Historico</span></div>
            <div class="bloque-tickets">
            <div class="row">
                <div class="col-6" v-for=" ticket in ticketsUsuario" :key="ticket.idUser">
                    <router-link :to="{ name: 'ticketDetail', params:  { idTicket: ticket.idTicket, title: ticket.title }}" class="page-link">  
                    <div class="silueta-ticket">
                        <p class="info"><strong>{{ ticket.idTicket }}</strong><br/>
                        <span class="info iduser">{{ ticket.title }}</span><br/>
                        <span class="info iduser">{{ ticket.state }}</span> <br/>
                        <span class="info iduser">{{ ticket.date}}</span></p>
                    </div>
                    </router-link>
                </div>
            </div>
        
            </div>

        </div>
    </div><!--Fin Row -->
</div><!--Fin Container -->

    <br/>
    <Footer/>
</template>

<script setup>
//import NavBar from '@/components/NavBar.vue'
import NavBar2 from '@/components/NavBar2.vue'
import Footer from '@/components/Footer.vue'
import { useDataStore } from '../store/datosUser.js'
import { db } from "../utils/FirebaseConfig.js"
import { collection, getDocs } from "firebase/firestore";
import { reactive, onMounted } from 'vue'
//import {  useRoute } from 'vue-router'
//const router = useRouter() //Utiliza el router.push("/")
//const route = useRoute() //recibe los parámetros del router

let currenUser = reactive([]);

const store = useDataStore();

let users = reactive([]);
let ticketsUsuario = reactive([]);
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
// let user = reactive([
//     {
//         idUser: route.params.idUser,
//         imgUser: route.params.imgUser,
//         name: route.params.name,
//         surname1: route.params.surname1,
//         surname2: route.params.surname2,
//         rol: route.params.rol,
//         email: route.params.email,
//         phone: route.params.phone,
//         assignment: route.params.assignment,

//     }]);
    localStorage.tickets = JSON.stringify(contadores[1]);
    localStorage.usuarios = JSON.stringify(contadores[0]);
    
    onMounted(()=>{
        getListados();
        temporizadorDeRetraso();
    })
    function temporizadorDeRetraso() {
    setTimeout(getListaTickets, 1000);
    }
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
        contadores[0].usersAvatar = users.imgUser;
        contadores[2].usersTecnico = userTecnico.length
        contadores[2].userAssignment = tecnicoAsignado.length;
        contadores[2].userUnAssignment = tecnicoNoAsignado.lengt;
       
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
    });
    localStorage.tickets = JSON.stringify(contadores[1]);
    localStorage.usuarios = JSON.stringify(contadores[0]);
    localStorage.setItem("usersList", JSON.stringify(users));
    
    datosUsuarioLogado(users)
    
}
    const datosUsuarioLogado = (lista) => {
    //console.log(lista)
    let mail = emailUsuario();
    store.setUsersList(lista);  
    const result = lista.filter((item) => item.email === mail);
    //console.log(result[0])
    currenUser.push(result[0]);
    
    // console.log(currenUser[0].idUser)
    // console.log(currenUser[0].imgUser)
    // console.log(currenUser[0].email)
    // console.log(currenUser[0].rol)
    // console.log(currenUser[0].name)
    // console.log(currenUser[0].surname1)
    // console.log(currenUser[0].surname2)
    // console.log(currenUser[0].phone)

    store.setidUser(currenUser[0].idUser)
    store.setAvatar(currenUser[0].imgUser) 
    store.setEmail(currenUser[0].email)
    store.setName(currenUser[0].name)
    store.setRol(currenUser[0].rol)
    store.setPhone(currenUser[0].phone)
  
    // console.log(store.datosUser.idUser)
    // console.log(store.datosUser.avatar)
    // console.log(store.datosUser.email)
    // console.log(store.datosUser.name)
    // console.log(store.datosUser.rol)
   
    localStorage.setItem("currenUser", JSON.stringify(currenUser));
}
function emailUsuario() {
    //console.log(store.datosUser.email)
    return store.datosUser.email
}
async function getListaTickets() {

// const querySnapshotTickets = await getDocs(collection(db, "tickets"));
// querySnapshotTickets.forEach((doc) => {
//  tickets.push(doc.data());
//  console.log(tickets)
 
// });
 let ticketsUsu = tickets.filter(ticket => ticket.idUser == store.datosUser.idUser)
 let ticketProcces = tickets.filter(ticket => ticket.state == "procces")

 console.log(ticketProcces)
 //console.log(ticketsUsu);
 for (let i=0; i <  ticketsUsu.length; i++){
    if(ticketsUsu[i].idUser == store.datosUser.idUser){
        if(ticketsUsu[i].state == "procces"){
            console.log(i)
            contadores[1].ticketsProgress = i;
            console.log(contadores[1].ticketsProgress)
            console.log(ticketsUsu[i])
        }
    }
    //console.log(ticketsUsu[i])
    ticketsUsuario.push(ticketsUsu[i])
 }
 
 

}

</script>

<script>
    export default {
        name:'Dashboard-User'
    }
</script>

<style scoped>
.cabecera {
    width: auto;
    display: fixed;
}
.titleMark{
    margin-top: 50px;
    border-radius: 10px;
    height: 55px;
    width: 100%;
    background-color: rgb(0, 0, 0);
    
}
.silueta-ticket {
     margin-top: 10px;
     margin-bottom: 10px;
     border-radius: 10px;
     box-shadow: -5px 6px 4px 0px rgba(0, 0, 0, 0.25);
     border: 1px solid rgba(0, 0, 0, 0.50);
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
.historico{
    margin-top: 0px;
    border-radius: 10px;
    height: 55px;
    width: 100%;
    background-color: rgb(0, 0, 0);
}
.contenFlex{
    display: flex;
    flex-direction: column; 
}

.bloque-estadiscicas-usuario {
    height: 150px;
    flex-shrink: 0;
    margin-top: 15px;
    height: 180px;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    border: 1px solid;
    box-shadow: 0px 10px 13px -7px #000000, 2px 6px 12px -1px rgba(0,0,0,0.42);
}
.bloque-tickets{
    margin-top: 10px;
    height: 100%;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
}
.num-contador {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-weight: 700;
    font-size: 18px;
    color: #FFF;
    margin-left: 5px;
}
.circulo-verde {
    position:absolute;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: rgb(67, 228, 22);
    font-weight: 700;
    color: #FFF;
}
.circulo-notificaciones {
    position:relative;
    padding: 3px;
    border-radius: 50%;
    background: rgb(228, 159, 22);
    font-weight: 700;
    color: #ffffff;
}
.ico {
    margin-bottom: 5px;
}

.flex-container {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: normal;
}

.flex-items:nth-child(1) {
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
}

.flex-items:nth-child(2) {
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
}
</style>