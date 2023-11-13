<template>
    <div class="container">
     <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-6 marginTop" v-for="user in props.usersList" :key="user.idUser">
        <div v-for="ticket in props.ticketList" :key="ticket.idTicket"></div>
            <CardUser :user="user" :ticket="ticketList"/>
        </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';
import CardUser from './CardUser.vue';
  let props = defineProps({
    usersList: {
        type: Array,
      },
    ticketList: {
        type: Array,
      }
  })
  console.log(props.usersList)
  console.log(props.ticketList)
</script>
  
<style scoped>
.marginTop{
    margin-top: 0px;
}
</style>