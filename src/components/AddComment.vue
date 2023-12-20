<template>
    <div id="modal">
        <div class="container rounded bg-white mb-5">
        <br/>
            <div class="titleMark"><span class="pageTitle">Add Comment</span></div>
    <div class="row">
        <div class="col-sm-12 col-md-12 border-right align-items-center flex-column">
            <div class="p-3">
                <div class="d-flex justify-content-between align-items-center">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row">
                    <div class="col-7"><label class="labels">eMail</label><input type="text" class="form-control" id="email" :placeholder="email" v-model="email" disabled></div>
                    <div class="col-sm-12 col-md-12"><label class="labels">Descripción</label><textarea type="text" class="form-control" placeholder="Descripción" v-model="descripcion"></textarea> </div>
                </div>
                <div class="mt-5 text-center">
                <button class="btn btn-primary profile-button" type="button" @click="newComment">Save Comment</button>
                <button @click="emit('close')" class="btn btn-primary profile-button">Cerrar</button></div>
            </div>
        </div>
    </div>
</div>
</div>
</template>
<script setup>
import{ ref, reactive, defineEmits } from 'vue'
import { useDataStore } from '../store/datosUser.js'

const store = useDataStore();
const emit = defineEmits(['newComment','close'])
const tiempoTranscurrido = Date.now();
const hoy = new Date(tiempoTranscurrido);

let email = ref(store.currenUser.email);
let descripcion = ref("");
let date = ref(hoy.toLocaleDateString());
let newCom = reactive({})

    const newComment = () => {
        if(descripcion.value == ''){
            alert("Descripción Vacía");
        } else {
            newCom = ({    
                description: descripcion.value,
                email: email.value,
                date: date.value,
            });
        }
        emit('newComment', newCom);
        console.log(newCom);
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

.form-control:focus {
    box-shadow: none;
    border-color: #0f0a10
}

.profile-button {
    background: rgb(0, 0, 0);
    box-shadow: none;
    border: none
}

.profile-button:hover {
    background: #100f10
}

.profile-button:focus {
    background: #000000;
    box-shadow: none
}

.profile-button:active {
    background: #682773;
    box-shadow: none
}

.back:hover {
    color: #000000;
    cursor: pointer
}

.labels {
    margin-top: 10px;
    font-size: 16px;
    color:#000000;
    font-weight: 600;
}

.add-experience:hover {
    background: #BA68C8;
    color: #ffffff;
    cursor: pointer;
    border: solid 1px #BA68C8
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
</style>