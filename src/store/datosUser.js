//STATE (Datos)


//GETTERS (Computados)


//ACTION (Métodos)

import { defineStore } from 'pinia'

export const useDataStore  = defineStore('datosUser',{
    state: () => {
        return {
            datosUser: [{
                name: '',
                email: '',
                avatar: '',
                idUser: ''
            }]
        }
    },

    getters: {
    
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
        }
    }   
})