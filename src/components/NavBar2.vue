<template>
    <nav>
      <div class="navbar">
        <div class="container nav-container">
            <input class="checkbox" type="checkbox" name="" id="" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>  
          <div class="logo">
            <span class="profile-image img"><span class="currenUser">{{ userCurrenEmail }} <!--|{{ userCurrenName }}--></span><img :src='userCurrenAvatar' width="40"/></span>
            <router-link to="/"><img src="../assets/ico/exitWhite.png" width="25" @click="exit"/></router-link>
          </div>
          <div class="menu-items">
            <li v-if="userCurrenRol == 'Admin'"><router-link to="/dashBoardAdmin">DashBoard Admin</router-link></li>
            <li><router-link to="/dashBoardUser">DashBoard User</router-link></li>
            <li><router-link to="/ticketsView">Tickets</router-link></li>
            <li v-if="userCurrenRol == 'Admin'"><router-link to="/usersView">Users</router-link></li>
            <li v-if="userCurrenRol == 'Admin'"><router-link to="/estadisticasView">Estadísticas</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><span class="profile-image "><img :src='userCurrenAvatar' width="55"/> <!-- {{ userCurrenName }} --></span>
            <router-link to="/"><img src="../assets/ico/exitWhite.png" width="25"  @click="exit" class="exit-button"/></router-link></li>
          </div>
        </div>
      </div>
    </nav>
</template>

<script setup>
import { useDataStore } from '../store/datosUser.js'
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { db } from "../utils/FirebaseConfig.js"
import { updateDoc, doc } from "firebase/firestore";
const store = useDataStore();
const router = useRouter();

 let userCurrenEmail = ref(store.currenUser.email);
 let userCurrenAvatar = ref(store.currenUser.avatar)
 let userCurrenIdUser = ref(store.currenUser.idUser)
 let userCurrenRol = ref(store.currenUser.rol)
 let userFirebaseMessagingRef = ref(store.currenUser.firebaseMessaging)
 let userFirebaseRef = ref(store.currenUser.firebaseRef)

  onMounted(() => {
    userCurrenEmail = ref(store.currenUser.email);
    userCurrenAvatar = ref(store.currenUser.avatar);
    userCurrenIdUser = ref(store.currenUser.idUser);
    userCurrenRol = ref(store.currenUser.rol);
    userFirebaseRef = ref(store.currenUser.firebaseRef);
    userFirebaseMessagingRef = ref(store.currenUser.firebaseMessaging);
  });
 
  console.log("Email: "+userCurrenEmail.value)
  console.log("Avatar: "+userCurrenAvatar.value)
  console.log("IdUser: "+userCurrenIdUser.value)
  console.log("Rol: "+userCurrenRol.value)
  console.log("Firebase Ref: "+userFirebaseRef.value)
  console.log("Firebase Messaging Ref: "+userFirebaseMessagingRef.value)

  //Borra todos los datos cuando sale de la aplicación.
const exit = () => {
  
  store.setEmail('');
  store.setidUser('');
  store.setRol('');
  store.setAvatar('');
  store.setState(false);
  store.setName('');
  store.setSurname1('');
  store.setSurname2('');
  store.setPhone('');
  changeStateUser();
  store.setFirebaseRefCurrenUser('');
  store.setfirebaseMessagingRef('');
  store.setUsersList([]);
 
  localStorage.removeItem("tickets");
  localStorage.removeItem("usuarios");
  localStorage.removeItem("usersList");
  localStorage.removeItem("currenUser");
  sessionStorage.clear();
  localStorage.clear();
  router.push("/")
}

//Cambia el estado del usuario
const changeStateUser = async () => {
  //Actualización de campo State del usuario, para que aparezca on-line o off-line
 const stateRef = doc(db, "users", userFirebaseRef.value);
      await updateDoc(stateRef,{
        state: false,     
     });
    }
</script>


<style  scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
}
.currenUser {
  color: #ffffff;
  font-size: 11px;
}
.container {
  max-width: 1050px;
  width: 90%;
  margin: auto;
}

.navbar {
  width: 100%;
  box-shadow: 0 1px 4px rgb(146 161 176 / 15%);
  background-color: black;
  position:fixed;
  z-index: 15;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar .menu-items {
  display: flex;
  
}

.navbar .nav-container li {
  list-style: none;
}

.navbar .nav-container a {
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
  font-size: 1.2rem;
  padding: 0.7rem;

}

.navbar .nav-container a:hover{
    font-weight: bolder;
}

.nav-container {
  display: block;
  position: relative;
  height: 60px;
}

.nav-container .checkbox {
  position: absolute;
  display: block;
  height: 32px;
  width: 32px;
  top: 20px;
  left: 20px;
  z-index: 5;
  opacity: 0;
  cursor: pointer;
  
}

.nav-container .hamburger-lines {
  display: block;
  height: 26px;
  width: 32px;
  position: absolute;
  top: 17px;
  left: 20px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.nav-container .hamburger-lines .line {
  display: block;
  height: 4px;
  width: 100%;
  border-radius: 10px;
  background: #ffffff;
}

.nav-container .hamburger-lines .line1 {
  transform-origin: 0% 0%;
  transition: transform 0.4s ease-in-out;
}

.nav-container .hamburger-lines .line2 {
  transition: transform 0.2s ease-in-out;
}

.nav-container .hamburger-lines .line3 {
  transform-origin: 0% 100%;
  transition: transform 0.4s ease-in-out;
}

.navbar .menu-items {
  padding-top: 120px;
  /* box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5); Fondo transparente para el menú de opciones */
  background-color: black;
  height: auto; /* Control de altura del menú de opciones 110vh*/
  width: 70%;
  transform: translate(-150%);
  display: flex;
  flex-direction: column;
  margin-left: -50px;
  padding-left: 0px;
  transition: transform 0.5s ease-in-out;
  text-align: center;
  margin-bottom: 150px;
  
}

.navbar .menu-items li {
  margin-bottom: 1.2rem;
  font-size: 1.5rem;
  font-weight: 500;
}

.logo {
  position: absolute;
  top: 5px;
  right: 15px;
  font-size: 1.2rem;
  color: #0e2431;
}

.nav-container input[type="checkbox"]:checked ~ .menu-items {
  transform: translateX(0);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
  transform: rotate(45deg);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
  transform: scaleY(0);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
  transform: rotate(-45deg);
}

.nav-container input[type="checkbox"]:checked ~ .logo{
  display: none;
}

.profile-image img {
    border-radius: 40%;
    border: 2px solid #ffffff;
    margin: 0px 15px 0px 5px;
}

.icono{
  margin-left: 20px;
}
</style>