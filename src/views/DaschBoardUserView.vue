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
                        <div class="col-6">Nº Tickets: 25</div>
                        <div class="col">Notificaciones</div>   
                    </div>
                    
                    <div class="row">
                        <div class="col">En Proceso: 10</div>
                        <div class="col">25</div>
                    </div>
            </div>
        </div></router-link>
    </div><!-- fin Cabecera -->
    <div class="row">
        <div class="col-xs-12 col-md-12 col-lg-12 contenFlex">
            
            <div class="bloque-tickets">
                <h1>Histórico</h1>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
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

let currenUser = reactive([]);

const store = useDataStore();

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
    localStorage.tickets = JSON.stringify(contadores[1]);
    localStorage.usuarios = JSON.stringify(contadores[0]);
    
    onMounted(()=>{
        // datosUsuarioLogado(users);
        getListados()
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
        contadores[0].usersAvatar = users.imgUser;
        contadores[2].usersTecnico = userTecnico.length
        contadores[2].userAssignment = tecnicoAsignado.length;
        contadores[2].userUnAssignment = tecnicoNoAsignado.length
        //console.log(users);
       
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
    console.log(lista)
    let mail = emailUsuario();
    store.setUsersList(lista);  
    const result = lista.filter((item) => item.email === mail);
    console.log(result[0])
    currenUser.push(result[0]);
    
    console.log(currenUser[0].idUser)
    
    store.setEmail(currenUser[0].email)
    store.setAvatar(currenUser[0].imgUser) 
    store.setidUser(currenUser[0].idUser)
    store.setName(currenUser[0].name)
    // store.datosUser.name = currenUser.name
    // store.datosUser.surname1 = currenUser[0].surname1
    // store.datosUser.surname2 = currenUser[0].surname2
    // store.datosUser.rol = currenUser[0].rol
    // store.datosUser.phone = currenUser[0].phone
    localStorage.setItem("currenUser", JSON.stringify(currenUser));
}
function emailUsuario() {
    console.log(store.datosUser.email)
    return store.datosUser.email
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
    margin-top: 15px;
    height: 100%;
    background-color: rgb(216, 216, 216);
    border-radius: 10px;
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