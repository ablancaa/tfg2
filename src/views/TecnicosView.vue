<template>
    <NavBar2/>
    <div class="container">
        <br/>
        <div class="titleMark"><span class="pageTitle">Técnicos View</span></div>
            <table class="table">
            <thead class="thead-dark">
                <tr>
                <th>Profile</th>
                <th scope="col">Assignment</th>
                <th scope="col">Ticket</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="tecnico in users" :key="tecnico.idUser">
                <td v-if=" tecnico.rol == 'Técnico'"><img :src="tecnico.imgUser" width="45" height="45" class="imgUser"><br/>{{ tecnico.name }} {{ tecnico.surname1 }}</td>
                <td v-if=" tecnico.rol == 'Técnico'" class="table-info">{{ tecnico.assignment }}</td>
                <td v-if=" tecnico.rol == 'Técnico'">44444444444</td>
                </tr>
            </tbody>
            </table>
    </div>
    <Footer/>
</template>

<script setup>
import NavBar2 from '@/components/NavBar2.vue';
import Footer from '@/components/Footer.vue';
import { reactive, onMounted } from "vue";
import { db } from "../utils/FirebaseConfig.js"
import { collection, getDocs } from "firebase/firestore";

let users = reactive([]);

onMounted(() => {
    getListados();
  
});


const getListados = async () => {
    const querySnapshotUsers = await getDocs(collection(db, "users"));
    querySnapshotUsers.forEach((doc) => {
        users.push(doc.data());
      
});
}



</script>

<style  scoped>
.titleMark {
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
.imgUser {
    border-radius: 50%;
    border: 2px solid rgb(0, 0, 0);
}
table tr {
    vertical-align: middle;
}
</style>