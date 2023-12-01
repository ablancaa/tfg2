<template>
<div id="modal">
    <div class="container">
    <div class="flex-container">
        <div class="flex-items">
            <div class="tecnicos">
                <div v-for="tecnico in props.userList" :key="tecnico.idUser">
                    <div class="idUser">
                        <div class="flex-Technics">
                            <div class="flex-items-technic"  v-if="tecnico.rol == 'Técnico'"><img :src="tecnico.imgUser " class="imgUser" width="50" height="50"></div>
                            <div class="flex-items-technic"  v-if="tecnico.rol == 'Técnico'">{{ tecnico.name }} {{ tecnico.surname1 }} </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="mt-5 text-center">
                <button class="btn btn-primary profile-button" type="button" @click="newAssingment">Assingment<br/> Ticket</button>
                <button @click="emit('close')" class="btn btn-primary profile-button">Cerrar</button>
            </div>
        </div>
    </div>
    <!-- <div class="row" v-for="tecnico in props.userList" :key="tecnico.idUser">
    <div class="col flex-items-technic"> 
     <div class=""  v-if="tecnico.rol == 'Técnico'"><img :src="tecnico.imgUser " class="imgUser" width="50" height="50"></div>                
    <div class="col"> 
     <div class="flex-items-technic"  v-if="tecnico.rol == 'Técnico'">{{ tecnico.name }} {{ tecnico.surname1 }} </div></div></div>
    </div>
    <div class="row">
        <button class="btn btn-primary profile-button" type="button" @click="newAssingment">Assingment<br/> Ticket</button>
                <button @click="emit('close')" class="btn btn-primary profile-button">Cerrar</button>
    </div> -->
    
    </div><!-- fin container -->
</div><!-- fin Modal -->
</template>
<script setup>
import{ reactive, defineEmits, defineProps, onMounted } from 'vue'
//import { useDataStore } from '../store/datosUser.js'
const tiempoTranscurrido = Date.now();
const hoy = new Date(tiempoTranscurrido);
hoy.toLocaleDateString();

////const store = useDataStore();
const emit = defineEmits(['close'])

const props = defineProps({
        userList: {
            type: Array,
        },    
    })

let tec = reactive([])
    
onMounted(() => {
       tecnicos()
        
    });

    const tecnicos = () => {
        let listaTecnicos = reactive([])
            for(let i=0; i < props.userList.length; i++){
            console.log(props.userList[i].rol)
            if(props.userList[i].rol === 'Técnico'){
                
                tec = 
                        { idUser: props.userList[i].idUser,
                        name:props.userList[i].name,
                        surname1: props.userList[i].surname1,
                        surname2: props.userList[i].surname2
                        }
                        listaTecnicos.push(tec)
            }
        }
        console.log(tec)
        console.log(listaTecnicos)
        return listaTecnicos;
        }
</script>

<style scoped>
#modal {
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  transition: all .10s;
  z-index: 10;
  overflow-y: scroll;
}
.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: normal;
  height: 100vh;
}

.flex-items:nth-child(1) {
  display: block;
  border-radius: 10px;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
  width: 350px;
  height: auto;
  background-color: #fff;
}

.idUser{
    color: black;
}
.imgUser{
    border-radius: 50%;
    border: 2px solid rgb(2, 30, 132);
    margin: 0px 10px 0px 5px;
}

.flex-Technics {
 padding: 2px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}

.flex-items-technic:nth-child(1) {
    display: flex;
  background-color: rgb(23, 226, 226);
}

.flex-items-technic:nth-child(2) {

  background-color: rgb(23, 226, 226);
}
</style>