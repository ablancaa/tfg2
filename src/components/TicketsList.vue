<template>
<div class="container">
    <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-6 marginTop" v-for="ticket in props.ticketList" :key="ticket.idticket">
        <div v-for="user in props.userList" :key="user.idUser" :userList="userList"></div>
            <CardTicket :tickets="ticket" :userList="userList"/>
        </div>
    </div><!-- Fin Row -->
</div><!-- Fin Container -->
</template> 
<script setup>
import { defineProps } from 'vue';
import CardTicket from './CardTicket.vue';
let props = defineProps({
    ticketList: {
        type: Array,
      },
    userList: {
        type: Array,
    }
  })
console.log(props.userList)
console.log(props.ticketList)
</script>
  
<style scoped>
.marginTop{
    margin-top: 0px;
}
</style>