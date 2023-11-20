<template>
    <div id="modal">
        <div class="container rounded bg-white mb-5">
        <br/>
            <div class="titleMark"><span class="pageTitle">Add Ticket</span></div>
    <div class="row">
        <div class="col-sm-12 col-md-12 border-right align-items-center flex-column">
            <div class="p-3">
                <div class="d-flex justify-content-between align-items-center">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row">
                    <div class="col-6"><label class="labels">idTicket</label><input type="text" class="form-control" :placeholder="id" v-model="idTicket" disabled></div>
                    <div class="col-6"><label class="labels">idUser</label><input type="text" class="form-control" :placeholder="idUser" v-model="idUser" disabled></div>
                    <div class="col-sm-12 col-md-12"><label class="labels">Date</label><input type="date" class="form-control" placeholder="Date" v-model="date"></div>
                    <div class="col-sm-12 col-md-12"><label class="labels">Title</label><input type="text" class="form-control" placeholder="Title" v-model="title"></div>
                    <div class="col-md-12"><label class="labels">Categoría</label>
                        <select class="form-control" v-model="category">
                            <option disabled value="">Seleccione una categoría</option>
                            <option>Hardware</option>
                            <option>Software</option>
                            <option>Asistencia</option>
                            <option>Servicios</option>
                        </select>
                    </div>
                    <div class="col-sm-12 col-md-12"><label class="labels">Descripción</label><textarea type="texarea" class="form-control" placeholder="Descripción" v-model="descripcion"></textarea> </div>
                </div>
                <div class="row mt-3">                   
                    <div class="col-md-12"><label class="labels">Estado</label>
                        <select class="form-control" v-model="state">
                            <option disabled value="">Seleccione un Estado</option>
                            <option>wait</option>
                            <option>procces</option>
                            <option>active</option>
                            <option>end</option>
                        </select>
                    </div>
                    <div class="col-md-12"><label class="labels">Prioridad</label>
                        <select class="form-control" v-model="priority">
                            <option disabled value="">Seleccione una Prioridad</option>
                            <option>Normal</option>
                            <option>Urgente</option>
                            <option>Crítico</option>
                            <option>Importante</option>
                        </select>
                    </div>
                    <div class="col-md-12"><label class="labels">Técnico Asignado</label>
                        <select class="form-control" v-model="technical">
                            <option disabled value="">Seleccione un Estado</option>
                            <option v-for="user in props.userList" :key="user.id">
                                {{ user.idUser }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button" @click="newTicket">Save Ticket</button> <button @click="emit('close')" class="btn btn-primary profile-button">Cerrar</button></div>
            </div>
        </div>
    </div>
</div>
</div>
</template>
<script setup>
import{ ref, reactive, defineEmits, defineProps } from 'vue'

const emit = defineEmits(['newTicket','close'])
const props = defineProps({
        userList: {
            type: Object,
        },    
    })
let idUser = ref("U00001");
let idTicket = ref(generarIdUnico());
let title = ref("");
let priority = ref("");
let category = ref("");
let descripcion = ref("");
let state = ref("");
let date = ref("");
let technical = ref("")




let newTick = reactive({})

    const newTicket = () => {
        if(title.value == ''){
            alert("Título no introducido");
        } else {
            newTick = ({
                idTicket: idTicket.value,
                idUser: idUser.value,
                title: title.value,
                priority: priority.value,
                description: descripcion.value,
                state: state.value,
                category: category.value,
                date: date.value,
                technical: [technical.value],
            });
        }
        emit('newTicket', newTick);
        console.log(newTick);
    }

    function generarIdUnico () { 
        return Math.random().toString(30).substring(2);           
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

body {
    background: rgb(99, 39, 120);
    color: #000000;

}

.form-control:focus {
    box-shadow: none;
    border-color: #BA68C8
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