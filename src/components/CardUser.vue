<template>
<div class="silueta-card">
    <div class="flex-items">
        <img class="imgUser" :src="props.user.imgUser" width="50" height="50"/>
    </div>
    <div class="flex-items">
        <p class="informacion">{{ props.user.name }} {{ props.user.surname1 }} {{ props.user.surname2 }}<br/>
            <span class="email">{{ props.user.email }}</span><br/></p>
    </div>
    <div class="flex-items">
        <div class="flex-estado">
            <div class="flex-item-estado">
                <div class="circulo-verde" v-if="props.user.state"></div>
                <div class="circulo-rojo" v-else></div>
            </div>
            <div class="flex-item-estado">
                <p class="estado" v-if="props.user.rol=='Técnico'">
                <img src="@/assets/ico/soporte-tecnico.png" class="imgico">
                </p>
                <p class="estado" v-if="props.user.rol=='Docente'">
                <img src="@/assets/ico/profesor.png" class="imgico">
                </p>
                <p class="estado" v-if="props.user.rol=='Admin'">
                <img src="@/assets/ico/administrador.png" class="imgico">
                </p>
                <p class="estado" v-if="props.user.rol=='Servicios'">
                <img src="@/assets/ico/servicios.png" class="imgico">
                </p>
            </div>
        </div> 
    </div>
</div><!--silueta-card-->

</template>

<script setup>
import { defineProps } from 'vue';

    const props = defineProps({
        ticket: {
            type: Object,
        },
        user: {
            type: Object,
        },    
    })

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

.silueta-card {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
    border: 1px solid;
    border-radius: 10px;
    box-shadow: 0px 5px 5px 2px #757575;
}

.flex-items:nth-child(1) {
    justify-content: center;
    align-items: center;
    /* background-color: aqua;  */
}

.flex-items:nth-child(2) {
    width: 210px;
    justify-content: start;
    align-items:start;
    /* background-color: rgb(28, 196, 196); */
}
.flex-estado {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: normal;
  align-items: normal;
  align-content: normal;
  
}

.flex-item-estado:nth-child(1) {
  display: block;
}

.informacion {
    margin-top: 10px;
    line-height: 20px;
    text-align: left;
    font-size: 16px;
    font-weight: 700;
}

.email{
    font-size: 16px;
    font-weight: 400;
}
.estado {
    font-size: 14px;
    margin-top: 10px;
    /* background-color: rgb(180, 9, 186);  */
} 
.flex-items:nth-child(3) {
    justify-content: center;
    align-items: center;

    /* background-color: rgb(255, 0, 217); */
}
.imgUser{
    border-radius: 50%;
    border: 2px solid rgb(2, 30, 132);
    margin: 0px 10px 0px 5px;
    margin-left: 6px;
}
.imgico{
    width: 30px;
    height: 30px;
}

.circulo-verde {
    width: 15px;
    height: 15px;
    margin: auto;
    margin-top: 10px;
    border-radius: 50%;
    background: rgb(67, 228, 22);
}
.circulo-rojo {
    width: 15px;
    height: 15px;
    margin: auto;
    margin-top: 10px;
    border-radius: 50%;
    background: rgb(228, 22, 22);
}
</style>