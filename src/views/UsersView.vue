<template>
    <NavBar2/>
    <div class="container">
        <br/>
        <div class="titleMark"><span class="pageTitle">Users View</span></div>
        <div class="searchbar"><SearchBar v-on:search="setSearchTerm"/></div>
        <div class="header-opciones">
            <div class="row">
                <div class="col"><button class="btn" @click="showForm">Add User</button></div>
                <div class="col"></div>
                <div class="col">
                    <div class="row">
                            <div class="col-6"><p class="estado-online ">On-Line:</p> <p class="estado-offline">Off-Line:</p></div>
                            <div class="col-6"><div class="circulo-verde">{{ contadores[0].usersActive }}</div> <div class="circulo-rojo">{{ contadores[0].usersDisconnect }}</div></div>
                    </div>
                </div>
            </div>
        </div>
        <AddUser v-if="showModal" 
        @close="showModal = false" 
        @newUser="addUser"/>

       
    </div>
    <UsersList :usersList="usersListFiltered" :ticketList="tickets" 
        @deleteClientId="deleteClient"/>
</template>

<script setup>
import NavBar2 from '@/components/NavBar2.vue'
import SearchBar from '@/components/SearchBar.vue'
import UsersList from '@/components/UsersList.vue'
import AddUser from "@/components/AddUser.vue"
import { reactive, onMounted, ref, computed } from "vue";
import { db } from "../utils/FirebaseConfig.js"
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";



let searchTerm = ref("");
let users = reactive([]);
let tickets = reactive([]);
let contadores = reactive ([   {
        usersNum: 0,
        usersActive: 0,
        usersDisconnect: 0
    }
]);
let showModal = ref(false);

onMounted(() => {
    getListaUsuarios();
    getListaTickets();
  });

const usersListFiltered = computed(() => {
  if (!searchTerm.value) {
    return users;
  } else if (searchTerm.value) {
    return users.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        item.surname1.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        item.surname2.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.value) ||
        item.rol.toLowerCase().includes(searchTerm.value)
      );
    });
  }
  return users;
});
function setSearchTerm(search) {
  searchTerm.value = search;
}

async function getListaUsuarios() {
    const querySnapshotUsers = await getDocs(collection(db, "users"));
    
    querySnapshotUsers.forEach((doc) => {
    users.push(doc.data());
    let activesUsers = users.filter(user => user.state == true)
        let disconnectUsers = users.filter(user => user.state == false)
        contadores[0].usersNum = users.length;
        contadores[0].usersActive = activesUsers.length;
        contadores[0].usersDisconnect = disconnectUsers.length;
   
    });
    sessionStorage.setItem("usersList", JSON.stringify(users));
}

function showForm(){
  showModal.value = true;
}

async function addUser(newUser){
    let assignment = ref();
    console.log(newUser);
    if(newUser.rol == 'Técnico'){
      assignment.value = false;
    }
  try {
  const docRef = await addDoc(collection(db, "users"), {
    idUser: newUser.idUser,
    name: newUser.name,
    surname1: newUser.surname1,
    surname2: newUser.surname2,
    state: newUser.state,
    rol: newUser.rol,
    imgUser: newUser.avatar,
    assignment: assignment.value,
    email: newUser.email,
    adress: newUser.adress,
<<<<<<< HEAD
    phone: newUser.phone,
=======
    phone: newUser.phone.mobile,
    },
>>>>>>> b70ceae5aab3584eac6bf37d4d49fb10275eb79f
  });
  console.log("Document written with ID: ", docRef.id);
  //console.log(newClient)
  } catch (e) {
  console.error("Error adding document: ", e);
  }
  location.reload();
}

async function deleteClient(idUUI) {
  let refUsuarioEnFirebase;
  const querySnapshotClients = await getDocs(collection(db, "users"));
  querySnapshotClients.forEach((doc) => {
    users.push(doc.data());
  //console.log(doc.id)
  //console.log(doc.data().idClient)
  if(doc.data().idUser == idUUI){
    refUsuarioEnFirebase = doc.id;
    //console.log("Se borra el registro:  "+refClienteEnFirebase)
  }
  });
  await deleteDoc(doc(db, "users",refUsuarioEnFirebase));
  location.reload();
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

.estado{
    height: 55px;
    background-color: rgb(122, 198, 198);
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

    margin-left: 10px;
    margin-top: 5px;
    border-radius: 50%;
    background: rgb(67, 228, 22);
    color: black;
}

.circulo-rojo {
    width: 20px;
    height: 20px;
    margin-top: 4px;
    margin-left: 10px;
    border-radius: 50%;
    background: rgb(228, 22, 22);
}

.estado-online{
    margin-top: 3px;
    margin-left: 0px;
    width: 65px;
}

.estado-offline{
    margin-top: -13px;
    margin-left: 0px;
    width: 65px;
}

</style>
