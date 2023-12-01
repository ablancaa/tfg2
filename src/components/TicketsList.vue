<template>
<div class="container">
    <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-6 marginTop" v-for="ticket in props.ticketList" :key="ticket.idticket">
        <div v-for="user in props.userList" :key="user.idUser" :userList="userList"></div>
        <router-link :to="{ name: 'ticketDetail', 
        params:  { idTicket: ticket.idTicket, title: ticket.title, 
                   description: ticket.description, 
                   category: ticket.category, 
                   state: ticket.state,
                   priority: ticket.priority, 
                   date: ticket.date, 
                   idUser: ticket.idUser,
                   comments:  JSON.stringify(ticket.comments),
                   technical: ticket.technical[0], //Es un array que puede contener más de un técnico
                 }}" class="page-link">
            <CardTicket2 :tickets="ticket" :userList="userList" @deleteTicket="deleteTicket"/>
        </router-link>
        </div>
    </div><!-- Fin Row -->
</div><!-- Fin Container -->
</template> 
<script setup>
import { defineProps, defineEmits } from 'vue';
//import CardTicket from './CardTicket.vue';
import CardTicket2 from './CardTicket2.vue';
const emit = defineEmits(['deleteTicket','close'])
let props = defineProps({
    ticketList: {
        type: Array,
      },
    userList: {
        type: Array,
    }
  })
  const deleteTicket = () =>{
  emit("deleteUser", deleteTicket)
 }
//console.log(props.userList)
//console.log(props.ticketList)
</script>
  
<style scoped>
.marginTop{
    margin-top: 0px;
}
</style>