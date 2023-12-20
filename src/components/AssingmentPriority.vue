<template>
<div id="modal">
    <div class="container">
    <br/>
      <div class="titleMark"><span class="pageTitle">Prioridades</span></div>
    <div class="flex-container">
        <div class="flex-items">
            <div class="tecnicos">
                <span class="title"><h1></h1></span> 
            <div class="flex-item">
              <strong></strong>
            </div>
            <div class="flex-item">
              <img
                src="../assets/ico/normal.png"
                width="50"
                height="50"
                @click="newPriority('normal')"/>
                <div>Normal</div>
              </div>
              <br/>
              <div class="flex-item">
              <img
                src="../assets/ico/urgente.png"
                width="50"
                height="50"
                @click="newPriority('urgente')"/>
                <div class>Urgente</div>
              </div>
              <br/>
              <div class="flex-item">
              <img
                src="../assets/ico/critico.png"
                width="50"
                height="50"
                @click="newPriority('critico')"/> 
                <div>Crítico</div>
                </div>
                <br/>
                <div class="flex-item">
              <img
                src="../assets/ico/importante.png"
                width="50"
                height="50"
                @click="newPriority('importante')"/>
                <div>Importante</div>
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

const tiempoTranscurrido = Date.now();
const hoy = new Date(tiempoTranscurrido);
hoy.toLocaleDateString();

const emit = defineEmits(['close','priorityAssignment'])

//Cambia la prioridad del ticket
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
  width: 85%;
  height: 100%;
  background-color: #fff;
  color:rgb(0, 0, 0)
}

.title {
    color: black;
}

.title {
    font-size: 20px;
    font-weight: 700;
}

.titleMark {
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