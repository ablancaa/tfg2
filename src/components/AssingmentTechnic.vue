<template>
    <div id="modal">
        <div class="container">
            <br />
            <div class="titleMark"><span class="pageTitle">Técnicos</span></div>
            <div class="flex-container">
                <div class="flex-items">
                    <div class="tecnicos">
                        <span class="title">
                        <br/>
                        </span>
                        <div class="idUser" v-for="tecnico in props.userList" :key="tecnico.idUser">
                            <div class="flex-Technics">
                                <div class="flex-items-technic" v-if="tecnico.rol == 'Técnico'"><img :src="tecnico.imgUser"
                                        class="imgUser" width="50" height="50" @click="newAssingment(tecnico.idUser)"></div>
                                <div class="flex-items-technic" v-if="tecnico.rol == 'Técnico'"
                                    @click="newAssingment(tecnico.idUser)">{{ tecnico.name }} {{ tecnico.surname1 }} </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-5 text-center">
                        <button class="btn btn-dark profile-button" @click="emit('close')">Cerrar</button>
                    </div>
                </div>
            </div>
        </div><!-- fin container -->
    </div><!-- fin Modal -->
</template>
<script setup>
import { reactive, defineEmits, defineProps, onMounted } from 'vue'

const tiempoTranscurrido = Date.now();
const hoy = new Date(tiempoTranscurrido);
hoy.toLocaleDateString();

const emit = defineEmits(['close', 'technicAssignment'])

const props = defineProps({
    userList: {
        type: Array,
    },
})

let tec = reactive([])

onMounted(() => {
    tecnicos();
});

//Creo un array con los técnicos en la base de datos
const tecnicos = () => {
    let listaTecnicos = reactive([])
    for (let i = 0; i < props.userList.length; i++) {

        if (props.userList[i].rol === 'Técnico') {

            tec =
            {
                idUser: props.userList[i].idUser,
                name: props.userList[i].name,
                surname1: props.userList[i].surname1,
                surname2: props.userList[i].surname2
            }
            listaTecnicos.push(tec)
        }
    }

    return listaTecnicos;
}

const newAssingment = (idUser) => {
    emit('technicAssignment', idUser)
}
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
}</style>