<template>
<NavBar2/>
  <div class="container">
    <br/>
    <div class="titleMark"><span class="pageTitle">About</span></div>
    <div class="row">
      <div class="col-12">
      <br/>
      <h3>TFG - Desarrollo de aplicaciones sobre dispositivos móviles</h3><br/></div>
      <br/>
      <hr/>
      
    
      
      <div class="col-12"><img src="../assets/img/Profile2.jpg" width="100" class="imagen"/></div>
      <div class="col-12"><br/><p>Alberto Blanca Alcaide</p></div>
      <div class="col-12"><br/><h5>2023/24 UOC</h5></div>
      <hr/>
      
    </div>
  </div>
</template>
<script setup>
import NavBar2 from '@/components/NavBar2.vue'
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

.imagen {
  border-radius: 10px;
  -webkit-box-shadow: 10px 10px 15px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 15px 1px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 15px 1px rgba(75, 75, 75, 0.75);
}
</style>