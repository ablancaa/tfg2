<template>
    <NavBar2/>
<div class="container">
    <br/>
        <div class="titleMark"><span class="pageTitle">Tickets View</span></div>
        <div class="searchbar"><SearchBar/></div>
        <div class="header-opciones">
            <div class="row">
                <div class="col-6"><button class="btn">Add Ticket</button></div>
            </div>
    </div>
</div>
</template>

<script setup>
import NavBar2 from '@/components/NavBar2.vue'
import SearchBar from '@/components/SearchBar.vue'
</script>
<script>
  export default {
      name:'Tickets-View'
  }
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
}
.header-opciones{
    margin-top: 10px;
    border-radius: 10px;
    height: 55px;
    width: 100%;
    background-color: rgb(0, 0, 0);
}
.btn {
    margin-top: 9px;
    margin-left: -70px;
    border-color: white;
    color: #ffffff;
    font-weight: 600;
}
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

</style>