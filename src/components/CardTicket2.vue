<template>
    <br/>
<div class="silueta-card">
    <div class="row">
        <div class="col col-md-6 title">
            <h5>{{ props.tickets.title }}</h5>
            <p class="subtitle">
                <u><i><strong>Date: </strong> {{ props.tickets.date }} | <strong>Categoría: </strong> {{ props.tickets.category }}</i></u>
            </p>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="nticket">
                <h5>Nº Ticket</h5>
                <p class="idTicket">
                    {{ props.tickets.idTicket}}
                </p>
            </div>                       
        </div>
        <div class="col">
            <div class="estados">
                <p class="estados-items">
                            <img src="../assets/ico/normal.png" width="25" height="25" v-if="props.tickets.priority == 'Normal'"/>
                            <img src="../assets/ico/urgente.png" width="25" height="25" v-if="props.tickets.priority == 'Urgente'"/>
                            <img src="../assets/ico/critico.png" width="25" height="25" v-if="props.tickets.priority == 'Crítico'"/>
                            <img src="../assets/ico/importante.png" width="25" height="25" v-if="props.tickets.priority == 'Importante'"/>
                          {{ props.tickets.priority }}
                             
                    </p>
                    <p class="estados-items">
                          
                            <img src="../assets/ico/active.png" width="25" height="25" v-if="props.tickets.state == 'active'"/>
                            <img src="../assets/ico/procesando.png" width="25" height="25" v-if="props.tickets.state == 'wait'"/>
                            <img src="../assets/ico/end.png" width="25" height="25" v-if="props.tickets.state == 'end'"/>
                            <img src="../assets/ico/proceso.png" width="25" height="25" v-if="props.tickets.state == 'procces'"/>
                            {{ props.tickets.state }}
                           
                    </p>
            </div>
            <div class="estados">
                             
            </div>
            
        </div>
    </div>
    <div class="row">
    <div class="col">
        
    </div>
    </div>
    <hr/>
    <div class="row">
        <div class="col">
            <div class="item-usuario"> 
                <div v-for="user in props.userList" :key="user.idUser">      
                    <div v-if="props.tickets.idUser == user.idUser">
                        <p class="title-user"><strong>Usuario: </strong></p>
                        <img :src="user.imgUser" width="40" height="40" class="imgUser"/>
                        <p class="nombre">{{ user.name }} {{ user.surname1 }}  <!-- <br/><strong>Rol: </strong>{{ user.rol } {{ user.idUser }}{{ user.surname2 }}--></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="item-tecnico"> 
                <div v-for="user in props.userList" :key="user.idUser">
                    <div v-if="user.rol == 'Técnico' && user.idUser == props.tickets.technical[0]">
                        <p class="title-user"><strong>Técnico: </strong> </p>
                        <img :src="user.imgUser" width="40" height="40" v-if="props.tickets.technical[0] === user.idUser" class="imgUser"/>
                        <p class="nombre">{{ user.name }} {{ user.surname1 }} </p><!--{{ user.surname2 }}-->
                    </div>
                </div><!-- Fin bucle -->
                <div v-if="props.tickets.technical[0] == 'Sin Asignar'">
                    <p class="title-user"><strong>Técnico: </strong></p>
                        <img src="../assets/ico/noAsignado.png" width="50" height="50" v-if="props.tickets.technical[0] === 'Sin Asignar'" class="">
                        <p class="nombre">No Asignado </p>
                    </div>
            </div>
        </div>
        <div class="col">
            <div class="notifys">
                <p class="nNotify ico">
                    <img src="../assets/ico/notificacion1.png" width="35" height="35" v-if="props.tickets.notify >= 1"/>
                    <img src="../assets/ico/notificacion.png" width="35" height="35" v-else/>
                </p>
                <p class="nNotify">{{ props.tickets.notify }}</p>
            </div>
        </div>
    </div><!-- Fin Row -->
</div><!-- Fin silueta-card -->
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    tickets: {
        type: Object,
    },
    userList: {
        type: Object,
    }
})

</script>

<style  scoped>
.silueta-card {
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 10px;
    border: 1px solid;
    border-radius: 10px;
    box-shadow: 0px 5px 5px 2px #757575;
}
.space{
    margin-top: 10px;
    margin-left: 15px;
    margin-right: 15px;
}
.subtitle{
    font-size: 14px;
}
.estados{
    text-align: left;
    margin-top: -20px;
    background-color: beige;
    width: auto;
    border-radius: 10px 0px 0px 10px;
}

.nticket{
    width: 100%;
    margin-top: -20px;
    font-size: 16px;
    background-color: rgb(231, 252, 245);
    border-radius: 0px 10px 10px 0px;
}
.idTicket{
    font-weight: 500;
    margin-top: -1px;
}
.title-user{
    font-size: 12px;
    margin-bottom: 2px;
}
.estados-items {
    margin-left: 20px;
    margin-bottom: 1px;
    font-size: 13px;
}
.notifys {
    display: flex;
    flex-direction: column;
}
.nNotify {
    margin-top: -10px;
    margin-bottom: 5px;
    font-size: 25px;
    width: auto;
}

.nombre {
    font-size: 12px;
    width: auto;
}
.title {
    text-align: left;
    margin: 15px 10px 20px 15px;
}

hr {
    height: 2px;
    background-color: black;
    box-shadow: 2px 2px rgba(120, 120, 120, .25);
    margin-top: 5px;
}
.imgUser {
    border-radius: 50%;
    border: 2px solid rgb(2, 30, 132);
    margin: 0px 0px 0px 0px;
}

.flex-container1 {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: normal;
  align-items:flex-start;
  align-content: flex-start;
}
.flex-container2 {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content:space-between;
  align-items:center; 
  align-content:center;
  
}

.item-title {
    display: flex;
    align-content: center;
    justify-content: start;
    padding: 10px;
    background-color: aqua;
}
.item-nticket {
    display: flex;
    align-content: center;
    justify-content: start;
    background-color: rgb(13, 83, 83);
}
.item-state {
    display: flex;
    align-content: center;
    justify-content: start;
    padding: 10px;
    background-color: rgb(13, 83, 83);
}
.flex-items:nth-child(1) {
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  align-items: start;
  align-content:center;
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

.flex-items:nth-child(3) {
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
}

</style>