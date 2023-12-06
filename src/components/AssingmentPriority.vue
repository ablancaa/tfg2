<template>
<div id="modal">
    <div class="container">
    <div class="flex-container">
        <div class="flex-items">
            <div class="tecnicos">
                <span class="title"><h1>Prioridades disponibles</h1></span>
                
            <div class="flex-item">
              <strong>Prioridad:</strong>
            </div>
            <div class="flex-item">
              <img
                src="../assets/ico/normal.png"
                width="50"
                height="50"
                @click="newPriority('normal')"/>
                <p>Normal</p>
              <img
                src="../assets/ico/urgente.png"
                width="50"
                height="50"
                @click="newPriority('urgente')"/>
                <p>Urgente</p>
              <img
                src="../assets/ico/critico.png"
                width="50"
                height="50"
                @click="newPriority('critico')"/>
                <p>Crítico</p>
              <img
                src="../assets/ico/importante.png"
                width="50"
                height="50"
                @click="newPriority('importante')"/>
                <p>Importante</p>
            </div>   
          </div>
            <div class="mt-5 text-center">
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

//let normal = ref ('normal')
////const store = useDataStore();
const emit = defineEmits(['close','priorityAssignment'])

const newPriority = (priority) =>{

  switch (priority) {
    case "normal":
    emit('priorityAssignment',priority)
      console.log("La Prioridad es NORMAL");
      break;
    case "urgente":
    emit('priorityAssignment',priority)
      console.log("La Prioridad es URGENTE");
      break;
    case "critico":
    emit('priorityAssignment',priority)
    console.log("La Prioridad es CRÍTICO");
      break;
    case "importante":
    emit('priorityAssignment',priority)
    console.log("La Prioridad es IMPORTANTE");
      break;
    default:
      console.log("Lo lamentamos, por el momento no disponemos de " + priority + ".");
  }
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