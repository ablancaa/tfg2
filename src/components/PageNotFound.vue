<template>
 
        <NavBar2/>
        <div class="container">
      <br />
      <div class="titleMark"><span class="pageTitle">Ticket Nº: <span class="nticket">{{ ticket[0].idTicket }}</span></span></div>   
        <br/><br/><br/><br/>
        <h1>404 Page not Found</h1>
        <router-link to="/dashBoardAdmin">Dashboard</router-link>
</div>
</template>

<script setup>
import NavBar2 from '@/components/NavBar2'
</script>

<style scoped>

</style>