<template>
  <div class="container">
    <div class="row">
    <br/>
      <div class="col-xs-12 col-md-12 col-lg-12"><br/><br/>
        <p class="title"><img alt="icono usuario" src="../assets/ico/logoTicketWhite.png" width="80">
        <span class="tituloLogo"> TicketService</span></p><br/><br/>
      </div>

      <div class="col-xs-12 col-md-6 col-lg-12">
        <br/><br/>
        <div class="formulario">
        <span class="tituloFormulario"><h1><img alt="Vue logo" src="../assets/ico/userBlack.png" width="70"> Login</h1><br/></span>
        <div v-if="loginNoOk">{{ error }}</div>
        <span class="item"><form>
            <input type="text" placeholder="Email" v-model="email"/><br/><br/>
            <input type="text" placeholder="Password" v-model="password"/><br/><br/>
            <button class="btn btn-dark" @click="login">Login</button><br/>
            <router-link to="/register"><div><br/>Register</div></router-link>
          </form></span>
        </div>
          <br/>
      </div>
      
    </div><!-- fin de row -->
  </div>
</template>

<script setup>
// @ is an alias to /src
//import { defineEmits } from 'vue'
//import HelloWorld from '@/components/HelloWorld.vue'
//const emit = defineEmits(['change', 'delete']);
import { reactive, onMounted, ref  } from 'vue'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { db, collection, getDocs } from "../utils/FirebaseConfig.js"
import { useRouter } from 'vue-router';
import "firebase/auth";
import { useDataStore } from '../store/datosUser.js'

  const store = useDataStore(); 
  
  let loginNoOk = ref(false);
  let users = reactive([]);

  const auth = getAuth();
  const router = useRouter();
  const email = ref("");
  const password = ref("");
  const error = ref("El usuario o el password está vacío")
  

  onMounted(() => {
    getListaUsuarios();
  });
    // onAuthStateChanged(auth, (user) => {
    //   //console.log(user)
    //   if (user) {
    //     // User is signed in, see docs for a list of available properties
    //     // https://firebase.google.com/docs/reference/js/auth.user
    //     //const uid = user.uid;
    //    // console.log(uid)
    //   } else {
    //     // User is signed out
    //     //console.log("NO LOGADO")
    //   }
    // });
    const login = async () => {
     
      if(email.value == '' || password.value == '') {
        alert("Usuario o Password vacio");
        loginNoOk.value = true;
        router.push("/")
      } else {
        signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential)=> {
              const user = userCredential.user;
              console.log("Successfully registered!");   
              store.setEmail(user.email);
              if(user.email == "ablancaa@gmail.com"){
                router.push("/dashBoardAdmin")
              } else {
                router.push("/dashBoardUser")
              }
              let usu = store.userList.filter((usu) => usu.email == store.datosUser.email)
              //console.log(usu)
              store.setAvatar(usu[0].imgUser);
              store.setidUser(usu[0].idUser);
              store.setName(usu[0].name);
              store.setSurname1(usu[0].surname1);
              store.setSurname2(usu[0].surname2);
              store.setRol(usu[0].rol);
              store.setPhone(usu[0].phone);
            })
        .catch((error)=>{
              console.log(error.code);
              alert(error.message);
        })
      }
    }

    const getListaUsuarios = async() => {
    const querySnapshotUsers = await getDocs(collection(db, "users"));
      querySnapshotUsers.forEach((doc) => {
        users.push(doc.data());
        store.userList = users;
      });
    }
</script>

<script>
    export default {
        name:'Login-View'
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

.container {
  display: flex;
  justify-content: center;
  background-color: black;
  height: 818px;

}

input {
  border-radius: 5px;
  border-color: rgb(255, 255, 255);
}
.tituloLogo {
  font-weight: 700;
}

.formulario {
  display:flex;
  flex-direction:column;
  background-color: white;
  border-radius: 10px;
  height: 350px;
  align-self: center;
  margin-top: -190px;
  box-shadow: 0px 10px 13px -7px #ffffff, 5px 15px 15px 15px rgba(255, 255, 255, 0);
  }
  .item1 {
    align-self: center;
  }
  .item2 {
    align-self: center;
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
</style>