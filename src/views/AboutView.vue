<template>
<NavBar2/>
  <div class="container">
    <br/>
    <div class="titleMark"><span class="pageTitle">About</span></div>
    <div class="row">
      <div class="col-6"><h1>TFG 2023/24 UOC</h1></div>
      <div class="col-6"><h5>Alberto Blanca Alcaide</h5></div>
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
</style>