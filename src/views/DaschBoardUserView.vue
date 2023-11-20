<template>
<NavBar2/>

<div class="container">
    <br/>
    <div class="cabecera">
        <div class="titleMark"><span class="pageTitle">Dashboard User</span></div>
        <div class="bloque-estadiscicas-usuario">
            <div>
                <h1><img alt="Imagen tickets" src="../assets/ico/logoTicketBlack.png" width="70"> Mis Tickets</h1>
                <hr/>
                    <div class="row">
                        <div class="col-6">Nº Tickets: 25</div>
                        <div class="col">Notificaciones</div>   
                    </div>
                    
                    <div class="row">
                        <div class="col">En Proceso: 10</div>
                        <div class="col">25</div>
                    </div>
            </div>
        </div>
    </div><!-- fin Cabecera -->
    <div class="row">
        <div class="col-xs-12 col-md-12 col-lg-12 contenFlex">
            
            <div class="bloque-tickets">
                <h1>Histórico</h1>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>

        </div>

    </div><!--Fin Row -->
</div><!--Fin Container -->



    

    <br/>
    <Footer/>
</template>

<script setup>
//import NavBar from '@/components/NavBar.vue'
import NavBar2 from '@/components/NavBar2.vue'
import Footer from '@/components/Footer.vue'

import { reactive } from 'vue'
let contadores = reactive([
    {
        usersNum: 0,
        usersActive: 0,
        usersDisconnect: 0,
        usersAdmin: 0,
        usersDocente: 0,
        usersServicios: 0
    },
    {
        ticketsNum: 0,
        ticketsProgress: 0,
        ticketsEnd: 0,
        ticketsActive: 0,
        ticketsWait: 0,
    },
    {
        usersTecnico: 0,
        userAssignment: 0,
        userUnAssignment: 0,
    }
])
    localStorage.tickets = JSON.stringify(contadores[1]);
    localStorage.usuarios = JSON.stringify(contadores[0]);

</script>

<script>
    export default {
        name:'Dashboard-User'
    }
</script>

<style scoped>
.cabecera {
    width: auto;
    display: fixed;
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
.container {
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
}

.contenFlex{
    display: flex;
    flex-direction: column; 
}

.bloque-estadiscicas-usuario {
    height: 150px;
    flex-shrink: 0;
    margin-top: 15px;
    height: 180px;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    border: 1px solid;
    box-shadow: 0px 10px 13px -7px #000000, 2px 6px 12px -1px rgba(0,0,0,0.42);
}
.bloque-tickets{
    margin-top: 15px;
    height: 100%;
    background-color: rgb(216, 216, 216);
    border-radius: 10px;
}

.flex-container {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: normal;
}

.flex-items:nth-child(1) {
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
}

.flex-items:nth-child(2) {
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
}
</style>