<template>
  <NavBar2 />
  <div class="container">
      <br />
      <div class="titleMark"><span class="pageTitle">Ticket Nº: <span class="nticket">{{ ticket[0].idTicket }}</span></span></div>   
      <div class="col-12 col-md-4">
         <div class="col" v-for="user in users" :key="user.idUser">
           
            <div class="silueta-card" v-if="ticket[0].idUser == user.idUser">
                <div class="flex-items">
                    <img class="imgUser" :src="user.imgUser" width="60" height="60"/>
                </div>
                <div class="flex-items">
                    <p class="informacion">{{ user.name }} {{ user.surname1 }} {{ user.surname2 }}<br/>
                    <span class="email">{{ user.email }}</span><br/>id: {{ user.idUser }}</p>
                </div>
                <div class="flex-items">
                    <div class="flex-estado">
                        <div class="flex-item-estado">
                            <div class="circulo-verde" v-if="user.state"></div>
                                <div class="circulo-rojo" v-else></div>
                        </div>
                        <div class="flex-item-estado">
                            <p class="estado">{{user.rol}}</p>
                        </div>
                    </div> 
                </div>
            </div> <!-- silueta-card  -->
            
         </div> 
      
         
          
      </div>
      <div class="container">
        <div class="row silueta-card">
           <div class="col">
              <p class="phone"><strong>Prioridad:</strong>{{ ticket[0].priority }}</p>
          </div>
          <div class="col">
            <p class="email"><strong>Asignado:</strong>{{ ticket[0].technical }}</p>
            <img :src="users.imgUser" v-if="ticket[0].technical == users.idUser">
          </div>
          <div class="col">
            <p class="nameSurname"><strong>Estado:</strong> {{ ticket[0].state }}</p>
          </div>
          </div>
      <hr />
          <div class="row">
            <div class="col">
                 <span class="info iduser">{{ ticket[0].title }}</span><br/>
                 <span class="info iduser">{{ ticket[0].description }}</span>
              
          </div>
          </div>
          <div class="col col-md-2 item-3">
              <span v-if="store.datosUser.rol == 'Admin'"><button @click="deleteTicket(route.params.idTicket)" class="ico"><img src="../assets/ico/delete.png" width="20" height="20"  /></button></span>
          </div>
      </div><!--fin container 2 -->
</div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { db, getDocs } from "../utils/FirebaseConfig.js";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { useDataStore } from '../store/datosUser.js'
import NavBar2 from '@/components/NavBar2.vue'
import router from '@/router';

const store = useDataStore();// Accede al store de la apliacion 
//const router = useRouter() //Utiliza el router.push("/")
const route = useRoute() //recibe los parámetros del router

let refUsuarioEnFirebase = ref()
let ids = reactive([]);
let tickets = reactive([]);
let users = reactive([]);
let ticket = reactive([
    {
        idTicket: route.params.idTicket,
        title: route.params.title,
        description: route.params.description,
        category: route.params.category,
        priority: route.params.priority,
        state: route.params.state,
        date: route.params.date,
        idUser: route.params.idUser,
        technical: route.params.technical,
    }]);
    // let user2 = reactive([
    // {
    //     idUser: route.params.idUser,
    //     imgUser: route.params.imgUser,
    //     name: route.params.name,
    //     surname1: route.params.surname1,
    //     surname2: route.params.surname2,
    //     rol: route.params.rol,
    //     email: route.params.email,
    //     phone: route.params.phone,
    //     assignment: route.params.assignment,

    // }]);
onMounted(() => {
    getListaTickets();
    getListaUsers();
    console.log(route.params.imgUser)

});

async function getListaUsers() {
  const querySnapshotUsers = await getDocs(collection(db, "users"));
   querySnapshotUsers.forEach((doc) => {
     users.push(doc.data());
//     // let activesUsers = users.filter(user => user.state == true)
//     // let disconnectUsers = users.filter(user => user.state == false)
//     // contadores[0].usersNum = users.length;
//     // contadores[0].usersActive = activesUsers.length;
//     // contadores[0].usersDisconnect = disconnectUsers.length;
  });
  //console.log(users);
  
  //console.log(users)
}
async function getListaTickets() {

     const querySnapshotTickets = await getDocs(collection(db, "tickets"));
     querySnapshotTickets.forEach((doc) => {
     tickets.push(doc.data());
    //tickets.push(store.ticketList);
    //console.log(tickets)
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
    console.log(refUsuarioEnFirebase.value)
    await deleteDoc(doc(db, "tickets", refUsuarioEnFirebase.value));
    router.push("/ticketsView")
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
  text-align: left;
  background-color: rgb(0, 0, 0);
  
}

.pageTitle {
  color: #ffffff;
  margin-left: 10px;
  font-size: 38px;
  font-weight: 700;
}
.nticket {
    font-size: 25px;
    font-weight: 700; 
}


/* TARJETA DE USUARIO */
.silueta-card {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
    border: 1px solid;
    border-radius: 10px;
    box-shadow: 0px 5px 5px 2px #757575;
}


.flex-items:nth-child(1) {

    justify-content: center;
    align-items: center;
    /* background-color: aqua;  */
   
}

.flex-items:nth-child(2) {
    width: 210px;
    justify-content: start;
    align-items:start;
    /* background-color: rgb(28, 196, 196); */
}
.flex-estado {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: normal;
  align-items: normal;
  align-content: normal;
  width: 60px;
}

.flex-item-estado:nth-child(1) {
  display: block;
}

.informacion {
    margin-top: 10px;
    line-height: 20px;
    text-align: left;
    font-size: 17px;
    font-weight: 700;
}

.email{
    font-size: 16px;
    font-weight: 400;
}
.estado {
    font-size: 14px;
    margin-top: 10px;
    margin-left: -15px;
    /* background-color: rgb(180, 9, 186);  */
} 
.flex-items:nth-child(3) {
    justify-content: center;
    align-items: center;
    /* background-color: rgb(255, 0, 217); */
}
.imgUser{

}
img {
    border-radius: 50%;
    border: 2px solid rgb(2, 30, 132);
    margin: 0px 10px 0px 5px;
}

.circulo-verde {
    width: 20px;
    height: 20px;
    margin: auto;
    margin-top: 10px;
    border-radius: 50%;
    background: rgb(67, 228, 22);
}
.circulo-rojo {
    width: 20px;
    height: 20px;
    margin: auto;
    margin-top: 10px;
    border-radius: 50%;
    background: rgb(228, 22, 22);
}

</style>