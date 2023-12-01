//STATE (Datos)


//GETTERS (Computados)


//ACTION (Métodos)

import { defineStore } from 'pinia'
export const useDataStore  = defineStore('datosUser',{
    state: () => {
        return {
            // datosUser: [{
            //     idUser: '',
            //     avatar: '',
            //     name: '',
            //     surname1:'',
            //     surname2:'',
            //     email: '',
            //     rol: '',
            //     phone: '',
            //     state: false,               
            // }],
            currenUser: [{
                idUser: '',
                avatar: '',
                name: '',
                surname1:'',
                surname2:'',
                email: '',
                rol: '',
                phone: '',
                state: false,
                firebaseRef:''               
            }],
            userList: [{}],
            ticketList: [],
            contadoresUsuario: [],
            
        } 
    },
    persist: {
        paths: ['currenUser.idUser', 
                'currenUser.email', 
                'currenUser.avatar', 
                'currenUser.rol',
                'currenUser.name',
                'currenUser.surname1',
                'currenUser.surname2',
                'currenUser.state',
                'currenUser.firebaseRef',
                'userList',
                
            ],
    },
    getters: {
    getEmail: (state) => {
            return state.currenUser.email
        },
    },

    actions: {
        mostrarDatosUsuario(){
           console.log(this.currenUser.email);
        },
        setEmail(mail) {
            this.currenUser.email = mail;
        },
        setAvatar(avatar) {
            this.currenUser.avatar = avatar;
        },
        setidUser(idUser) {
            this.currenUser.idUser = idUser;
        },
        setName(name) {
            this.currenUser.name = name;
        },
        setSurname1(surname1) {
            this.currenUser.surname1 = surname1;
        },
        setSurname2(surname2) {
            this.currenUser.surname2 = surname2;
        },
        setRol(rol) {
            this.currenUser.rol = rol;
        },
        setPhone(phone) {
            this.currenUser.phone = phone;
        },
        setState(state) {
            this.currenUser.state = state;
        },
        setFirebaseRefCurrenUser(ref){
            this.currenUser.firebaseRef = ref
        },
        setUsersList(lista){
            this.userList=lista
        },
        getUsersList: () => {
            return this.userList;
        },
    }   
})
