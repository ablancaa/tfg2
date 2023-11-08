<template>
    <NavBar2/>
    <div class="container">
    <br/>
        <div class="titleMark"><span class="pageTitle">Dashboard Admin</span></div>

    <div class="row">
        <div class="contenFlex">
            <div class="bloque-estadiscicas"><h1>Estadísticas</h1></div>
            <div class="bloque-tickets">
                <h1><img alt="Imagen tickets" src="../assets/ico/logoTicketBlack.png" width="70"> Mis Tickets</h1>
            </div>
            <div class="bloque-usuarios">
                <h1><img alt="Vue logo" src="../assets/ico/userBlack.png" width="70">Usuarios</h1>
                
            </div>
            <div class="bloque-tecnicos"><h1>Técnicos</h1></div>
        </div>
    </div>
    
    </div><!--Fin container -->
    <br/>
    <Footer/>
</template>

<script setup>
//import NavBar from '@/components/NavBar.vue'
import NavBar2 from '@/components/NavBar2.vue'
import Footer from '@/components/Footer.vue'
</script>

<script>
    export default {
        name:'Dashboard-Admin'
    }
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
.container {
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
}

.contenFlex{
    display: flex;
    flex-direction: column; 
}

.bloque-estadiscicas{
    height: 150px;
    flex-shrink: 0;
    margin-top: 15px;
    height: 180px;
    background-color: aqua;
    border-radius: 10px;
}
.bloque-tickets{
    margin-top: 10px;
    height: 115px;
    background-color: rgb(216, 216, 216);
    border-radius: 10px;
}.bloque-usuarios{
    margin-top: 10px;
    height: 115px;
    background-color: rgb(216, 216, 216);
    border-radius: 10px;
}
.bloque-tecnicos{
    margin-top: 10px;
    height: 115px;
    background-color: rgb(216, 216, 216);
    border-radius: 10px;
    margin-bottom: -5px;
}
</style>