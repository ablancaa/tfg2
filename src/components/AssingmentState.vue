<template>
  <div id="modal">
    <div class="container">
      <br/>
      <div class="titleMark"><span class="pageTitle">Estados</span></div>
      <div class="flex-container">
        <div class="flex-items">
          <div class="tecnicos">
            <span class="title"><h1></h1></span>

            <div class="flex-item">
              <strong>Estado:</strong>
            </div>
            <div class="flex-item">
              <img
                src="../assets/ico/procesando.png"
                width="50"
                height="50"
                @click="newState('wait')"
              />
              <p>Wait</p>
              <img
                src="../assets/ico/proceso.png"
                width="50"
                height="50"
                @click="newState('procces')"
              />
              <p>Procces</p>
              <img
                src="../assets/ico/active.png"
                width="50"
                height="50"
                @click="newState('active')"
              />
              <p>Active</p>
              <img
                src="../assets/ico/end.png"
                width="50"
                height="50"
                @click="newState('end')"
              />
              <p>End</p>
            </div>
        </div>
          <div class="mt-5 text-center">
            <button class="btn btn-dark" @click="emit('close')">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
    <!-- fin container -->
  </div>
  <!-- fin Modal -->
</template>
<script setup>
import { defineEmits } from "vue";
const tiempoTranscurrido = Date.now();
const hoy = new Date(tiempoTranscurrido);
hoy.toLocaleDateString();

const emit = defineEmits(["close", "stateAssignment"]);

const newState = (state) => {
  switch (state) {
    case "wait":
      emit("stateAssignment", state);
      console.log("El Estado es WAIT");
      break;
    case "procces":
      emit("stateAssignment", state);
      console.log("El Estado es PROCCES");
      break;
    case "active":
      emit("stateAssignment", state);
      console.log("El Estado es ACTIVE");
      break;
    case "end":
      emit("stateAssignment", state);
      console.log("El Estado es END");
      break;
    default:
      console.log(
        "Lo lamentamos, por el momento no disponemos del estado: " + state + "."
      );
  }
};
</script>

<style scoped>
#modal {
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transition: all 0.1s;
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
p {
  color: black;
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
.idUser {
  color: black;
}
.imgUser {
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
