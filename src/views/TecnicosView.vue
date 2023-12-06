<template>
    <NavBar2/>
    <div class="container">
        <br/>
        <div class="titleMark"><span class="pageTitle">Técnicos View</span></div>
            <table class="table">
            <thead class="thead-dark">
                <tr>
                <th>Técnico</th>
                <th scope="col">Tickets</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="tecnico in users" :key="tecnico.idUser">
                <td v-if=" tecnico.rol == 'Técnico'"><img :src="tecnico.imgUser" width="45" height="45" class="imgUser"><br/>{{ tecnico.name }} {{ tecnico.surname1 }} <span class="idUser"><br/>{{ tecnico.idUser }}</span></td>
                <td v-if=" tecnico.rol == 'Técnico'">
                    <span v-for="ticket in ticketsList" :key="ticket.idTicket">
                        <p v-if="tecnico.idUser == ticket.technical[0]">
                            <router-link :to="{ name: 'ticketDetail', 
                            params:  {  idTicket: ticket.idTicket, title: ticket.title, 
                                        description: ticket.description, 
                                        category: ticket.category, 
                                        state: ticket.state,
                                        priority: ticket.priority, 
                                        date: ticket.date, 
                                        idUser: ticket.idUser,
                                        comments:  JSON.stringify(ticket.comments),
                                        technical: ticket.technical[0], //Es un array que puede contener más de un técnico
                                        }}" class="page-link">
                                <img src="../assets/ico/logoTicketBlack.png" width="40" height="40"/><br/>
                                <u><em>{{ ticket.idTicket }}</em></u>

                            </router-link>
                        </p>
                    </span>
                </td>
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
let ticketsList = reactive([]);

onMounted(() => {
    getListados();
});


const getListados = async () => {
    const querySnapshotUsers = await getDocs(collection(db, "users"));
    querySnapshotUsers.forEach((doc) => {
        users.push(doc.data());     
});
    const querySnapshotTickets = await getDocs(collection(db, "tickets"));
    querySnapshotTickets.forEach((doc) => {
        ticketsList.push(doc.data());      
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
.idUser {
    color:black;
    font-size: 10px;
}
table tr {
    vertical-align: middle;
}
</style>