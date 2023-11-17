
<template>
    <NavBar2/>
    <div class="container">
        <br/>
        <div class="titleMark"><span class="pageTitle">User Detail</span></div>
        <br/>
        <div class="row">
            <div class="col-12">
                <div class="silueta-card">
                    <div>{{ user[0].name }} {{ user[0].surname1 }} {{ user[0].surname2 }}<br/> {{ user[0].email }}<br/> {{ user[0].rol }}<br/>{{ user[0].phone  }}</div>
                <button  @click="deleteUser(route.params.idUser)"><img src="../assets/ico/delete.png" width="40" height="40"/></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
//import { collection, query, where } from "firebase/firestore";
//import { db } from "../utils/FirebaseConfig.js"
import { reactive, ref } from 'vue';
import { useRouter, useRoute  } from 'vue-router'
import { db, getDocs } from "../utils/FirebaseConfig.js"
import { collection, deleteDoc, doc } from "firebase/firestore";

import NavBar2 from '@/components/NavBar2.vue';

    const router = useRouter() //Utiliza el router.push("/")
    const route = useRoute() //recibe los parámetros del router

    let refUsuarioEnFirebase = ref()
    let ids = reactive([]);
    let users = reactive([]);
    let user = reactive ([
        {
        idUser: route.params.idUser,
        name: route.params.name,
        surname1: route.params.surname1,
        surname2: route.params.surname2,
        rol: route.params.rol,
        email: route.params.email,
        phone: route.params.phone,
        }]
    );
   
async function deleteUser(idUser){
    console.log(idUser)
    const querySnapshotClients = await getDocs(collection(db, "users"));
    querySnapshotClients.forEach((doc) => {
    ids.push(doc.id);
    users.push(doc.data());
    });

  for(let i= 0 ; i< users.length; i++){
    if(idUser == users[i].idUser){
        console.log(ids[i])
        console.log(users[i].idUser)
        refUsuarioEnFirebase.value = ids[i]
        console.log(refUsuarioEnFirebase.value)
    }
  }
  
  await deleteDoc(doc(db, "users",refUsuarioEnFirebase.value));
  await router.push("/userView")
}

</script>

<style scoped>
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

.silueta-card {
    width: 100%;
    height: 140px;
    flex-shrink: 0;
    border-radius: 10px;
    border-right: 2px solid rgba(0, 0, 0, 0.50);
    background: #FFF;
    box-shadow: -5px 6px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>