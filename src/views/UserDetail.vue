
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
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
//import { collection, query, where } from "firebase/firestore";
//import { db } from "../utils/FirebaseConfig.js"
import { reactive } from 'vue';
import { useRoute } from 'vue-router'
import NavBar2 from '@/components/NavBar2.vue';
const route = useRoute();  


let user = reactive ([
    {
    idUser: route.params.idUser,
    name: route.params.name,
    surname1: route.params.surname1,
    surname2: route.params.surname2,
    rol: route.params.rol,
    email: route.params.email,
    phone: route.params.phone,
    }])

 

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