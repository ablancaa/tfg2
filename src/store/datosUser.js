//STATE (Datos)


//GETTERS (Computados)


//ACTION (Métodos)

import { defineStore } from 'pinia'

export const useDataStore  = defineStore('datosUser',{
    state: () => {
        return {
            datosUser: [{
                idUser: '',
                avatar: '',
                name: '',
                surname1:'',
                surname2:'',
                email: '',
                rol: '',
                phone: '',
                state: false,               
            }],
            userList: [],
            ticketList: [],
            contadoresUsuario: [],
        }
    },

    getters: {
    getEmail: (state) => {
            return state.datosUser.email
        },
    },

    actions: {
        mostrarDatosUsuario(){
           console.log(this.datosUser.email);
        },
        getEmail: () => {
            return this.datosUser.email
        },
        setEmail(mail) {
            this.datosUser.email = mail;
        },
        setAvatar(avatar) {
            this.datosUser.avatar = avatar;
        },
        setidUser(idUser) {
            this.datosUser.idUser = idUser;
        },
        setName(name) {
            this.datosUser.name = name;
        },
        setSurname1(surname1) {
            this.datosUser.surname1 = surname1;
        },
        setSurname2(surname2) {
            this.datosUser.surname2 = surname2;
        },
        setRol(rol) {
            this.datosUser.rol = rol;
        },
        setPhone(phone) {
            this.datosUser.phone = phone;
        },
        setUsersList(lista){
            this.userList=lista
        },
        getUsersList: () => {
            return this.userList;
        },
    }   
})
