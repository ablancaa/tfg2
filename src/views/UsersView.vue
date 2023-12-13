<template>
    <NavBar2/>
    <div class="container header-fijo">
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
    <div class="container">
      <div class="row">
        <div class="col lista">
          <UsersList :usersList="usersListFiltered" :ticketList="tickets" 
          @deleteClientId="deleteClient"/>
        </div>
      </div>
    </div>
   
  
  
        <Footer/>
</template>

<script setup>
import NavBar2 from '@/components/NavBar2.vue'
import SearchBar from '@/components/SearchBar.vue'
import UsersList from '@/components/UsersList.vue'
import AddUser from "@/components/AddUser.vue"
import Footer from '@/components/Footer.vue'
import {getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import "firebase/auth";
import { reactive, onMounted, ref, computed } from "vue";
import { db, getDocs } from "../utils/FirebaseConfig.js"
import { collection, addDoc, deleteDoc, doc } from "firebase/firestore";
//import { useDataStore } from '../store/datosUser.js'
//import router from '@/router';
//import { useRouter } from 'vue-router'

//const router = useRouter() //Utiliza el router.push("/")
//const store = useDataStore();
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
    // let perfil = JSON.parse(localStorage.getItem('currenUser'))
    // store.datosUser.email = perfil[0].email;
    // store.datosUser.avatar = perfil[0].imgUser;
    // store.datosUser.idUser = perfil[0].idUser;
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
  let assignment = ref("");
    //console.log(newUser);
  if(newUser.rol === 'Técnico') {
    assignment.value = false;
   
    try {
      const docRef = await addDoc(collection(db, "users"), {
      idUser: newUser.idUser,
      imgUser: newUser.avatar,
      name: newUser.name,
      surname1: newUser.surname1,
      surname2: newUser.surname2,
      rol: newUser.rol,
      phone: newUser.phone,
      assignment: assignment.value,
      adress: newUser.adress,
      email: newUser.email,
      state: newUser.state,
    });
    let passwordDefecto = '123456';
    await createUserWithEmailAndPassword(getAuth(), newUser.email, passwordDefecto)
            .then((data)=> {
                alert("Successfully registered!"+data.getAuth);
                
            })
            .catch((error)=>{
                console.log(error.code);
                alert(error.message);
            })

    
    //console.log("Document written with ID: ", docRef.id);
    //console.log(newUser);

    } catch (e) {
      console.error("Error adding document: ", e);
    }
  } else {
    
    try {
    const docRef = await addDoc(collection(db, "users"), {
      idUser: newUser.idUser,
      imgUser: newUser.avatar,
      name: newUser.name,
      surname1: newUser.surname1,
      surname2: newUser.surname2,
      rol: newUser.rol,
      phone: newUser.phone,
      adress: newUser.adress,
      email: newUser.email,
      state: newUser.state,
    });
    await createUserWithEmailAndPassword(getAuth(), newUser.email, '123456')
            .then((data)=> {
                alert("Successfully registered!"+data.getAuth);
                
            })
            .catch((error)=>{
                console.log(error.code);
                alert(error.message);
            })
    
    //console.log("Document written with ID: ", docRef.id);
    //console.log(newUser)
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  location.reload("/usersView")
  showModal.value = false;
}

async function deleteClient(idUser) {
  console.log(idUser)
  let refUsuarioEnFirebase;
  const querySnapshotClients = await getDocs(collection(db, "users"));
  querySnapshotClients.forEach((doc) => {
    users.push(doc.data());
    if(doc.data().idUser == idUser){
      refUsuarioEnFirebase = doc.id;
    }
  });
  
  await deleteDoc(doc(db, "users",refUsuarioEnFirebase));
  location.reload("/usersView");
  showModal.value = false;
  
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
.header-fijo {
  min-width: 100%;
  position: fixed;
  height: auto;
  width: auto;
  z-index: 3;
  background-color: #ffffff;
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

.lista {
  margin-top: 265px;
  width: 150px;
}
</style>
