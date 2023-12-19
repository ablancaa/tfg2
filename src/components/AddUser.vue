<template>
    <div id="modal">
        <div class="container rounded bg-white">
        <br/>
            <div class="titleMark"><span class="pageTitle">Add User</span></div>
    <div class="row">
        <div class="col-md-12 border-right align-items-center flex-column">
            <div class="">
                <div class="d-flex justify-content-between align-items-center">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-12"><label class="labels">idUser</label><input type="text" class="form-control" :placeholder="id" v-model="idUser" disabled></div>
                    <div class="col-sm-12 col-md-12"><label class="labels">Name</label><input type="text" class="form-control" placeholder="first name" v-model="name"></div>
                    <div class="col-sm-12 col-md-12"><label class="labels">Surname 1</label><input type="text" class="form-control" placeholder="surname1" v-model="surname1"></div>
                    <div class="col-sm-12 col-md-12"><label class="labels">Surname 2</label><input type="text" class="form-control" placeholder="surname2" v-model="surname2"></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Avatar</label><input type="text" class="form-control" placeholder="enter Mobile phone number" v-model="avatar"></div>
                    <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" class="form-control" placeholder="enter Mobile phone number" v-model="phone"></div>
                    <div class="col-md-12"><label class="labels">Rol</label>
                        <select class="form-control" v-model="rol">
                            <option disabled value="">Seleccione un rol para el usuario</option>
                            <option>Docente</option>
                            <option>Admin</option>
                            <option>Técnico</option>
                            <option>Servicios</option>
                        </select>
                    </div>
                    <div class="col-md-12"><label class="labels">Address Line 1</label><input type="text" class="form-control" placeholder="enter address line 1" v-model="adress"></div>
                   
                    <div class="col-md-12"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder="enter email" v-model="email"></div>
                </div>
                <div class="mt-5 p-5 text-center"><button class="btn btn-primary profile-button" type="button" @click="newClient">Save Profile</button> <button @click="emit('close')" class="btn btn-primary profile-button">Cerrar</button></div>
            </div>
        </div>
    </div>
</div>
</div>
</template>
<script setup>
import{ ref, reactive, defineEmits } from 'vue'

const emit = defineEmits(['newUser','close'])

let id = ref(generarIdUnico());
let idUser = ref("");
let avatar = ref('https://i.pravatar.cc/80'); //Añade imagen automáticamente de una API
let name = ref("");
let surname1 = ref("");
let surname2 = ref("");
let rol = ref("");
let phone = ref("");
let adress = ref("");
let email = ref("");

let newUser = reactive({})

    const newClient = () => {
        if(name.value == ''){
            alert("Nombre no introducido");
        } else if (surname1.value == '') {
            alert("Apellido 1 no introducido");
        } else if (surname2.value == '') {
            alert("Apellido 2 no introducido");
        } else if (rol.value == '') {
            alert("Rol no introducido");
        } else if (phone.value == '') {
            alert("Teléfono no introducido");
        } else if (adress.value == '') {
            alert("Dirección no introducida");
        } else if (email.value == '') {
            alert("Email no introducida");
        } else {
            newUser = ({
                idUser: id.value,
                avatar: avatar.value,
                name: name.value,
                surname1: surname1.value,
                surname2: surname2.value,
                rol: rol.value,
                phone: phone.value,
                adress: adress.value,
                email: email.value,
                state: false,
            });
        }
        //Emite el nuevo usuario para la base de datos,
        emit('newUser', newUser);
        console.log(newUser);
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
    font-size: 18px;
    color:#000000;
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