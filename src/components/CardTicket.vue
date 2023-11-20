<template>
<div class="silueta-card">
    <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12">
            <h4 class="title">{{ props.tickets.title }}</h4>
        </div>
    </div>
    <div class="row">
            <div class="col">
                <h2>Nº Ticket</h2>
                <h5>{{ props.tickets.idTicket }}</h5> 
            </div>
            <div class="col">
                <div class="flex-container1">
                    <div class=""><span class="">Estado: </span><img src="../assets/ico/trabajo-en-progreso.png" width="20" height="20"/> {{ props.tickets.state }}</div>
                    <div class=""><span class="">Prioridad: </span><img src="../assets/ico/trabajo-en-progreso.png" width="20" height="20"/> {{ props.tickets.priority }}</div>
                    <div class="">Categoría: {{ props.tickets.category }}</div>
                    <div class="">Fecha: {{ props.tickets.date }}</div>
                </div>
            </div>
    </div>
    <hr/>
    <div class="row">
            <div class="col">
                <div class="flex-container2">
                    <div class="flex-items">
                        <div v-for="user in props.userList" :key="user.idUser">
                            <div v-if="props.tickets.idUser == user.idUser">
                                <span class="">
                                <h6><strong>Usuario: </strong></h6>
                                <img :src="user.imgUser" width="40" height="40" class="imgUser"/>
                                <p class="nombre">{{ user.name }} {{ user.surname1 }} {{ user.surname2 }}<!-- <br/><strong>Rol: </strong>{{ user.rol }--></p></span>
                            </div>
                        </div>
                    </div>
                    <div class="flex-items">
                        <div v-for="user in props.userList" :key="user.idUser">
                            <div v-if="user.rol == 'Técnico' && user.idUser == props.tickets.technical[0]">
                                <span class="">
                                <h6><strong>Técnico: </strong> </h6>
                                <img :src="user.imgUser" width="40" height="40" v-if="props.tickets.technical[0] === user.idUser" class="imgUser"/>
                                <p class="nombre">{{ user.name }} {{ user.surname1 }} {{ user.surname2 }}</p></span>
                            </div>
                        </div><!-- Fin bucle -->
                    </div>
                    <div class="flex-items">
                        <div class="notify">
                            <img src="../assets/ico/notificacion.png" width="40" height="40"/>6
                        </div> 
                    </div>
                </div><!-- flex-container -->
            </div>
        </div>  
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
// console.log(props.userList)
// console.log(props.tickets)

// function generarIdUnico () { 
//     return Math.random().toString(30).substring(2);           
// } 
//console.log(generarIdUnico());
</script>

<style  scoped>
.silueta-card {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: start;
    margin-top: 10px;
    border: 1px solid;
    border-radius: 10px;
    box-shadow: 0px 5px 5px 2px #757575;
}
.notify {
    font-size: 35px;
    width: auto;
}

.nombre {
    font-size: 16px;
    width: 120px;
}
.title {
    text-align: left;
    margin: 15px 0px 20px 30px;
}



hr {
    height: 2px;
    background-color: black;
    box-shadow: 2px 2px rgba(120, 120, 120, .25);
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

.item{
    display: flex;
   
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