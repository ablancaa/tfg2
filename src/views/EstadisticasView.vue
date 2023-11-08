<template>
    <NavBar2/>
    <div class="container">
        <br/>
        <div class="titleMark"><span class="pageTitle">Estadísticas View</span></div>
    </div>
</template>

<script setup>
import NavBar2 from '@/components/NavBar2.vue'
</script>
<script>
    export default {
        name:'Estadisticas-View'
    }
</script>
<style scoped>
.container {
    width: 100%;
    height: 100%;
   
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