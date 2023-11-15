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
        getEmail: (datosUser) => {
            console.log(datosUser.email)
        }
    },

    actions: {
        mostrarDatosUsuario(){
           console.log(this.datosUser);
        },
        asignarUsuarioActivo(dato){
            this.datosUser.email= dato;
        }
    }
       

})