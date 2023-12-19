<template>
    <div class="container">
     <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-6 marginTop " v-for="user in props.usersList" :key="user">
        <div v-for="ticket in props.ticketList" :key="ticket.idTicket"></div>
            <router-link :to="{ name: 'userDetail', 
                          params:  { idUser: user.idUser, 
                                     name: user.name,
                                     surname1: user.surname1,
                                     surname2: user.surname2,
                                     rol: user.rol,
                                     email: user.email,
                                     phone: user.phone,
                                     imgUser: user.imgUser,
                                     state: user.state }}" class="page-link">
              <CardUser :user="user" :ticket="ticketList" @deleteUser="deleteUser" />
            </router-link>
        </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue';
import CardUser from './CardUser.vue';
const emit = defineEmits(['deleteUser','close'])
  let props = defineProps({
    usersList: {
        type: Array,
      },
    ticketList: {
        type: Array,
      }
  })
  
//emite que borre el ususario en concreto
 const deleteUser = () =>{
  emit("deleteUser", deleteUser)
 }
</script>
  
<style scoped>
.marginTop{
    margin-top: 0px;
}



</style>