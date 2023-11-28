<template>
    <NavBar2 :currenUser="currenUser"/>
  <div class="container">
    <br/>
        <div class="titleMark"><span class="pageTitle">Tickets View</span></div>
        <div class="searchbar"><SearchBar v-on:search="setSearchTerm"/></div>
        <div class="header-opciones">
          <div class="row">
                <div class="col"><button class="btn" @click="showForm">Add Ticket</button></div>
                <div class="col"></div>
                <div class="col"></div>
              </div>
        </div>
        <AddTicket v-if="showModal" 
        :userList="users"
        @close="showModal = false" 
        @newTicket="addTicket" />
          <TicketsList :ticketList="ticketsListFiltered" :userList="users"/>
  </div>
</template>

<script setup>
import NavBar2 from '@/components/NavBar2.vue'
import SearchBar from '@/components/SearchBar.vue'
import TicketsList from '@/components/TicketsList.vue'
import AddTicket from "@/components/AddTicket.vue"
import { reactive, onMounted, ref, computed, onUpdated } from "vue";
import { db } from "../utils/FirebaseConfig.js"
import { collection, getDocs, addDoc } from "firebase/firestore";
import { useDataStore } from '../store/datosUser.js'
//import router from '@/router';
//import { useRouter } from 'vue-router'

//const router = useRouter() //Utiliza el router.push("/")

const store = useDataStore();
let searchTerm = ref("");

let currenUser = reactive([{
    email: store.datosUser.email,
    idUser: store.datosUser.idUser,
    avatar: store.datosUser.avatar
}
]);



let tickets = reactive([]);
let users = reactive([]);
let contadores = reactive ([ 
    {
      ticketsNum: 0,
      ticketsProcces: 0,
      ticketsEnd: 0
    }
]);
let showModal = ref(false);

onUpdated(() => {
  //getListaTickets();
})

onMounted(() => {
    getListaTickets();
    getListaUsers();
    let perfil = JSON.parse(localStorage.getItem('currenUser'))
    store.datosUser.email = perfil[0].email;
    store.datosUser.avatar = perfil[0].imgUser;
    store.datosUser.idUser = perfil[0].idUser;
    //console.log("Ticket ")

});

const ticketsListFiltered = computed(() => {
  if (!searchTerm.value) {
    return tickets;
  } else if (searchTerm.value) {
    return tickets.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        item.idUser.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        item.idTicket.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        item.state.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        item.priority.toLowerCase().includes(searchTerm.value.toLowerCase())
      );
    });
  }
  return tickets;
});
function setSearchTerm(search) {
  searchTerm.value = search;
}

function showForm(){
  showModal.value = true;
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
//console.log("Num Tickets: "+contadores[0].ticketsNum)
//console.log("Tickets Procces: "+contadores[0].ticketsProcces)
//console.log("Tickets End: "+contadores[0].ticketsEnd)
//console.log(tickets);
}
async function addTicket(newTicket){

    console.log(newTicket);
    
    try {
     
    const docRef = await addDoc(collection(db, "tickets"), {
      //idTicket: newTicket.idTicket,
      idTicket: newTicket.idTicket,
      idUser: newTicket.idUser,
      title: newTicket.title,
      description: newTicket.description,
      category: newTicket.category,
      state: newTicket.state,
      priority: newTicket.priority,
      technical: newTicket.technical,          
      date: newTicket.date,
      comments: {
        email: 'no asignado',
        comment:'sin comentario'
      }
    });

    console.log("Document written with ID: ", docRef.id);
    console.log(newTicket)

    } catch (e) {
      console.error("Error adding document: ", e);
    }
    //router.push("/ticketsView")
    location.reload("/ticketsView")
    showModal.value = false;
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