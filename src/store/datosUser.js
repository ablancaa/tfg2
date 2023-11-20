//STATE (Datos)


//GETTERS (Computados)


//ACTION (Métodos)

import { defineStore } from 'pinia'

export const useDataStore  = defineStore('datosUser',{
    state: () => {
        return {
            datosUser: [{
                email: '',
                avatar: ''
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
        }
    }   
})