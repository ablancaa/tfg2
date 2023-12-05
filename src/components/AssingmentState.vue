<template>
<div id="modal">
    <div class="container">
    <div class="flex-container">
        <div class="flex-items">
            <div class="tecnicos">
                <span class="title"><h1>Estados disponibles</h1></span>
                
            <div class="flex-item">
              <strong>Estado:</strong>
            </div>
            <div class="flex-item">
              <img
                src="../assets/ico/procesando.png"
                width="50"
                height="50"
                @click="newState"/>
                <p>Wait</p>
              <img
                src="../assets/ico/proceso.png"
                width="50"
                height="50"
                @click="newState"/>
                <p>Procces</p>
              <img
                src="../assets/ico/active.png"
                width="50"
                height="50"
                @click="newState"/>
                <p>Active</p>
              <img
                src="../assets/ico/end.png"
                width="50"
                height="50"
                @click="newState"/>
                <p>End</p>
            </div>
            <div class="flex-item">
              <!-- <p v-if="route.params.state == 'end'">{{ ticket[0].state }}</p>
              <p v-if="route.params.state == 'active'">{{ ticket[0].state }}</p>
              <p v-if="route.params.state == 'wait'">{{ ticket[0].state }}</p>
              <p v-if="route.params.state == 'procces'">{{ ticket[0].state }}</p> -->
            </div>
    
                </div>
            <div class="mt-5 text-center">
                <!-- <button class="btn btn-primary profile-button btnmargin" type="button" @click="newAssingment">Assingment Ticket</button> -->
                <button class="btn btn-dark" @click="emit('close')">Cerrar</button>
            </div>
        </div>
    </div>    
    </div><!-- fin container -->
</div><!-- fin Modal -->
</template>
<script setup>
import{ defineEmits } from 'vue'
//import { useDataStore } from '../store/datosUser.js'
const tiempoTranscurrido = Date.now();
const hoy = new Date(tiempoTranscurrido);
hoy.toLocaleDateString();

////const store = useDataStore();
const emit = defineEmits(['close','stateAssignment'])

// const props = defineProps({
//         userList: {
//             type: Array,
//         },    
//     })

//let tec = reactive([])
    
// onMounted(() => {
//        tecnicos();
//     });

//     const tecnicos = () => {
//         let listaTecnicos = reactive([])
//             for(let i=0; i < props.userList.length; i++){
//             //console.log(props.userList[i].rol)
//             if(props.userList[i].rol === 'Técnico'){
                
//                 tec = 
//                         { idUser: props.userList[i].idUser,
//                         name:props.userList[i].name,
//                         surname1: props.userList[i].surname1,
//                         surname2: props.userList[i].surname2
//                         }
//                         listaTecnicos.push(tec)
//             }
//         }
//         //console.log(tec)
//         //console.log(listaTecnicos)
//         return listaTecnicos;
//         }

        const newState = (state) =>{
            emit('stateAssignment',state)
        }
</script>

<style scoped>
#modal {
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  position: fixed;
  top:0;
  left: 0;
  height: 100%;
  width: 100%;
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
  align-content: center;
}
p{
    color:black
}
.flex-items:nth-child(1) {
  margin-top: 75px;
  border-radius: 10px;
  flex-grow: 0;
  flex-shrink: 1;
  order: 0;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100%;
  background-color: #fff;
}

.title {
    color: black;
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
  padding: 1px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-size: 16px;
  width: 90%;
  
}
.flex-items-technic:nth-child(2) {  
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 150px;
  /* background-color: rgb(17, 201, 100);*/
} 

.btnmargin{
    margin-right: 10px;
}
</style>