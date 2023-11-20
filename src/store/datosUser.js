//STATE (Datos)


//GETTERS (Computados)


//ACTION (Métodos)

import { defineStore } from 'pinia'

export const useDataStore  = defineStore('datosUser',{
    state: () => {
        return {
            datosUser: [{
                email: '',
            }]
        }
    },

    getters: {
    
    },

    actions: {
        mostrarDatosUsuario(){
           console.log(this.datosUser);
        },
        asignarUsuarioActivo(dato){
            this.datosUser.email= dato;
        },
        getEmail: () => {
            return this.datosUser.email
        },
        setEmail(mail){
            this.datosUser.email = mail;
        }
    }   
})