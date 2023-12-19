<template>
  <div class="container-fluid">
    <div class="item1">

        <p class="title"><img alt="icono usuario" src="../assets/ico/logoTicketWhite.png" width="80"/>
          <span class="tituloLogo"> TicketService</span>
        </p>
    </div>
    <div class="item2">
        <div class="tituloFormulario">
            <h1><img alt="Vue logo" src="../assets/ico/userBlack.png" width="70"/> Login</h1><br />
        </div>
        <div class="error" v-if="loginNoOk">{{ error }}</div>
        <form>
              <input type="text" placeholder="Email" v-model="email" /><br /><br />
              <input type="password" placeholder="Password" v-model="password" /><br /><br />
              <button class="btn btn-dark" @click="login">Login</button><br />
            
        </form>
    </div>
    <div class="item3">
  
    </div>
  </div>
</template>

<script setup>
// @ is an alias to /src
//import { defineEmits } from 'vue'
//import HelloWorld from '@/components/HelloWorld.vue'
//const emit = defineEmits(['change', 'delete']);
import { reactive, onMounted, ref, onBeforeUnmount, onUnmounted } from 'vue'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { db, collection, getDocs, tokenMessaging } from "../utils/FirebaseConfig.js"
import { useRouter } from 'vue-router';
import { useDataStore } from '../store/datosUser.js'

import "firebase/auth";

const router = useRouter();
const store = useDataStore();
const auth = getAuth();

const email = ref("");
const password = ref("");
const error = ref("El usuario o el password está vacío")


let users = reactive([]);
let loginNoOk = ref(false);


onMounted(() => {
  getListaUsuarios();

 })
 
 onBeforeUnmount(() =>{
  
 })

 onUnmounted(() => {

 })

 const login = async () => {

  if (email.value == '' || password.value == '') {
    //alert("Usuario o Password vacio");
    loginNoOk = true;
    router.push("/")
  } else {
    signInWithEmailAndPassword(auth, email.value, password.value)
   
      .then((userCredential) => {
      const user = userCredential.user;
      //console.log("Successfully registered!");
      store.setEmail(user.email);
        if (user.email == "ablancaa@gmail.com") {
          router.push("/dashBoardAdmin")
        } else {
          router.push("/dashBoardUser")
        }
        let usu = store.userList.filter((usu) => usu.email == store.currenUser.email)
         //console.log(usu)
         store.setidUser(usu[0].idUser);
         store.setName(usu[0].name);
         store.setSurname1(usu[0].surname1);
         store.setSurname2(usu[0].surname2);
         store.setRol(usu[0].rol);
         store.setPhone(usu[0].phone);
         store.setState(true);
         store.setAvatar(usu[0].imgUser);
         store.setfirebaseMessagingRef(tokenMessaging);
       })
       .catch((error) => {
         console.log(error.code);
         //alert(error.message);
       })
   }

 }

 const getListaUsuarios = async () => {
   const querySnapshotUsers = await getDocs(collection(db, "users"));
   querySnapshotUsers.forEach((doc) => {
     users.push(doc.data());
     store.setUsersList(users);
   });
   //console.log(users)
 }


</script>

<script>
export default {
  name: 'Login-View'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

.container-fluid{
  min-height: 100vh;
  display: flex;
  background-color: black;
  flex-direction: column;
  justify-content:  space-between;
  align-content: center;
  align-items: center;
}

.item1{
  justify-content:  space-between;
}
.item2{
  margin-top: -100px;
  justify-content:  space-between;
  padding: 50px;
  border-radius: 10px;
  background-color: #FFF;
}
.item3 {
  height: 100%;
}

input {
  border-radius: 5px;
  border-color: rgb(255, 255, 255);
}

.tituloLogo {
  font-weight: 700;
}

.formulario {

  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  align-self: center;
  box-shadow: 0px 10px 13px -7px #ffffff, 5px 15px 15px 15px rgba(255, 255, 255, 0);
}


.title {
  font-weight: bold;
  line-height: 3.5;
  color: #FFF;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

img {
  margin-top: 10px;
}
/* CSS Formulario */


</style>