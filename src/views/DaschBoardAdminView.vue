<template>
    <NavBar2 :currenUser="currenUser"/>
    <div class="container">
        <br />
        <div class="titleMark"><span class="pageTitle">Dashboard Admin</span></div>
            <div class="row">
                
                <div class="col-sm-12 col-md-6">
                    <router-link to="/estadisticasView" class="page-link">     
                    <div class="bloque-estadiscicas">
                        <canvas id="graficaTicket"></canvas>
                    </div> <!--Fin Bloque Estadisticas -->
                    </router-link>
                </div> <!--Fin col 1 estadísticas-->
                <div class="col-sm-12 col-md-6">
                    <router-link to="/estadisticasView" class="page-link">     
                    <div class="bloque-estadiscicas">
                        <canvas id="graficaCategorias"></canvas>
                    </div> <!--Fin Bloque Estadisticas -->
                    </router-link>
                </div> <!--Fin col 1 estadísticas-->
                <div class="col-sm-12 col-md-4">
                    <router-link to="/ticketsView" class="page-link"> 
                    <div class="bloque-tickets">
                        <div class="row">
                            <div class="col">
                                <div class="siluelta_card_peq">
                                    <img alt="Imagen tickets" class="icono" src="../assets/ico/logoTicketBlack.png" width="65" id="logoTicketBlack">
                                    <router-link to="/ticketsView" class="page-link">
                                        <p class="title">Tickets</p>
                                    </router-link>
                                </div>
                            </div>
                            <div class="siluelta_card_grande">
                                <div class="">
                                    <h5 class="contenido-card-grande">Nº Tickets: </h5>
                                    <span class="num-contador cuadrado-numerador">{{ contadores[1].ticketsNum }}</span>
                                </div>
                                <hr />
                                <div class="">
                                    <div class="">
                                        <h5>En proceso: </h5>
                                    </div>
                                    <span class="num-contador circulo-naranja">{{ contadores[1].ticketsProgress }}</span>
                                </div>
                                <div class="">
                                    <div class="">
                                        <h5>Activos: </h5>
                                    </div>
                                    <span class="num-contador circulo-naranja">{{ contadores[1].ticketsActive }}</span>
                                </div>
                                <div class="">
                                    <div class="">
                                        <h5>En Espera: </h5>
                                    </div>
                                    <span class="num-contador circulo-naranja">{{ contadores[1].ticketsWait }}</span>
                                </div>
                                <div class="">
                                    <h5>Finalizados:</h5>
                                </div>
                                <span class="num-contador circulo-verde">{{ contadores[1].ticketsEnd }}</span>
                            </div>
                        </div>
                    </div><!--Fin div bloque-tickets-->
                    </router-link>
                 </div> <!--Fin col 2 tickets-->
                 
                 <div class="col-sm-12 col-md-4">
                    <router-link to="/usersView" class="page-link">
                    <div class="bloque-usuarios">
                        <div class="row">
                            <div class="col">
                                <div class="siluelta_card_peq">
                                    <img alt="Imagen tickets" class="icono" src="../assets/ico/userBlack.png" width="65" id="userBlack">
                                    <router-link to="/usersView" class="page-link">
                                        <p class="title">Usuarios</p>
                                    </router-link>
                                </div>
                            </div>
                            <div class="siluelta_card_grande">
                                <div class="">
                                    <h5 class="contenido-card-grande">Nº Usuarios: </h5>
                                    <span class="num-contador cuadrado-numerador">{{ contadores[0].usersNum }}</span>
                                </div>
                                <hr />
                                <div class="">
                                    <div class="">
                                        <h5>On-Line: </h5>
                                    </div>
                                    <span class="num-contador circulo-verde">{{ contadores[0].usersActive }}</span>
                                </div>
                                <div class="">
                                    <h5>Off-Line:</h5>
                                </div>
                                <span class="num-contador circulo-rojo">{{ contadores[0].usersDisconnect }}</span>
                            </div>
                        </div>
                    </div><!--Fin div bloque-usuarios-->
                    </router-link>
                </div><!--Fin col 2 usuarios-->
                <div class="col-sm-12 col-md-4">
                    <router-link to="tecnicosView" class="page-link">
                    <div class="bloque-tecnicos">
                        <div class="row">
                            <div class="col">
                                <div class="siluelta_card_peq">
                                    <img alt="Imagen tickets" class="icono" src="../assets/ico/reparar.png"
                                        width="65">
                                    <router-link to="/tecnicosView" class="page-link">
                                        <p class="title">Técnicos</p>
                                    </router-link>
                                </div>
                            </div>
                            <div class="siluelta_card_grande">
                                <div class="">
                                    <h5 class="contenido-card-grande">Nº Técnicos: </h5>
                                    <span class="num-contador cuadrado-numerador">{{ contadores[2].usersTecnico }}</span>
                                </div>
                                <hr />
                                <div class="">
                                    <div class="">
                                        <h5>Libres: </h5>
                                    </div>
                                    <span class="num-contador circulo-verde">{{ contadores[2].userUnAssignment }}</span>
                                </div>
                                <div class="">
                                    <h5>Asignados: </h5>
                                </div>
                                <span class="num-contador circulo-rojo">{{ contadores[2].userAssignment }}</span>
                            </div>
                        </div>
                    </div><!--Fin div técnicos-->
                    </router-link>
                </div><!--Fin col 3 Técnicos -->
            </div><!--Fin Row bloque -->
            
    </div><!--Fin container-->
    <br />
    <Footer />
</template>

<script setup>

import NavBar2 from '@/components/NavBar2.vue'
import Footer from '@/components/Footer.vue'

import { reactive, onMounted, onUpdated, onBeforeUnmount,ref } from "vue";
import { db, tokenMessaging } from "../utils/FirebaseConfig.js"
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import Chart from 'chart.js/auto';
import { useDataStore } from '../store/datosUser.js'

const store = useDataStore();
let refUserEnFirebase = ref()
let refUserFire = ref();
let ids = reactive([]);
let users = reactive([]);
let tickets = reactive([]);
let currenUser = reactive([]);
let contadores = reactive([
    {
        usersNum: 0,
        usersActive: 0,
        usersDisconnect: 0,
        usersAdmin: 0,
        usersDocente: 0,
        usersServicios: 0,
    },
    {
        ticketsNum: 0,
        ticketsProgress: 0,
        ticketsEnd: 0,
        ticketsActive: 0,
        ticketsWait: 0,
        ticketSofware: 0,
        ticketHardware: 0,
        ticketAsistencia: 0,
        ticketServicios: 0,

    },
    {
        usersTecnico: 0,
        userAssignment: 0,
        userUnAssignment: 0,
    }
])

const temporizadorDeRetrasoGraficas = ()=> {
   setTimeout(pintaGraficas, 1000);
}
const temporizadorDeContadores = ()=> {
   setTimeout(getListados, 500);
}


onMounted( () =>  {

    temporizadorDeContadores();
    temporizadorDeRetrasoGraficas();
    firebaseUserRef();
    store.setFirebaseRefCurrenUser(refUserEnFirebase.value);
 
});

onUpdated(() => {
      
});

onBeforeUnmount(()=>{
    

})
 const getListados = async () => {
    const querySnapshotUsers = await getDocs(collection(db, "users"));
    const querySnapshotTickets = await getDocs(collection(db, "tickets"));

    querySnapshotUsers.forEach((doc) => {
        users.push(doc.data());
        let activesUsers = users.filter(user => user.state == true)
        let disconnectUsers = users.filter(user => user.state == false)
        let userTecnico = users.filter(user => user.rol == 'Técnico')
        let tecnicoAsignado = users.filter(user => user.assignment == true)
        let tecnicoNoAsignado = users.filter(user => user.assignment == false)
  
        contadores[0].usersNum = users.length;
        contadores[0].usersActive = activesUsers.length;
        contadores[0].usersDisconnect = disconnectUsers.length;
        contadores[0].usersAvatar = users.imgUser;
        contadores[2].usersTecnico = userTecnico.length
        contadores[2].userAssignment = tecnicoAsignado.length;
        contadores[2].userUnAssignment = tecnicoNoAsignado.length
    });

    querySnapshotTickets.forEach((doc) => {
        tickets.push(doc.data());
        let ticketProcces = tickets.filter(ticket => ticket.state == "procces")
        let ticketEnd = tickets.filter(ticket => ticket.state == "end")
        let ticketActive = tickets.filter(ticket => ticket.state == "active")
        let ticketWait = tickets.filter(ticket => ticket.state == "wait")
        let ticketSofware = tickets.filter(ticket => ticket.category == "Software")
        let ticketHardware = tickets.filter(ticket => ticket.category == "Hardware")
        let ticketAsistencia = tickets.filter(ticket => ticket.category == "Asistencia")
        let ticketServicios = tickets.filter(ticket => ticket.category == "Servicios")
        contadores[1].ticketsNum = tickets.length
        contadores[1].ticketsProgress = ticketProcces.length
        contadores[1].ticketsEnd = ticketEnd.length
        contadores[1].ticketsActive = ticketActive.length
        contadores[1].ticketsWait = ticketWait.length
        contadores[1].ticketSofware = ticketSofware.length
        contadores[1].ticketHardware = ticketHardware.length
        contadores[1].ticketAsistencia = ticketAsistencia.length
        contadores[1].ticketServicios = ticketServicios.length
    });
    localStorage.tickets = JSON.stringify(contadores[1]);
    localStorage.usuarios = JSON.stringify(contadores[0]);
    localStorage.setItem("usersList", JSON.stringify(users));
 
    store.ticketList = tickets;
   
    
    datosUsuarioLogado(users);
    
}

const pintaGraficas = () => {

    const ctx = document.getElementById("graficaTicket");
    const ctx2 = document.getElementById("graficaCategorias");
    const labels = ['Nº Tickets Total', 'Activos', 'En Espera', 'En proceso', 'Resuelto']
    const labels2 = ['Software', 'Hardware', 'Asistencia', 'Servicios']

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                display: false,
                label: 'Tickets',
                data: [contadores[1].ticketsNum, contadores[1].ticketsActive, contadores[1].ticketsWait, contadores[1].ticketsProgress, contadores[1].ticketsEnd],
                borderColor: 'black',
                pointStyle: 'rectRounded',
                backgroundColor: 'rgba(9, 129, 176, 0.2)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: labels2,
            datasets: [{
                display: false,
                label: 'Categorías',
                data: [contadores[1].ticketSofware, contadores[1].ticketHardware, contadores[1].ticketAsistencia, contadores[1].ticketServicios],
                borderColor: 'black',
                pointStyle: 'rectRounded',
                backgroundColor: 'rgba(9, 129, 176, 0.2)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    
}



//Función para que los datos del usuario sean persistentes en el store
const datosUsuarioLogado = (lista) => {
    //firebaseUserRef();
    store.setUsersList(lista);  
    const usuario = lista.filter((item) => item.email === store.currenUser.email);
    
    if(usuario.length > 0){
    currenUser.push(usuario[0]);
    store.setEmail(currenUser[0].email);
    store.setAvatar(currenUser[0].imgUser);
    store.setidUser(currenUser[0].idUser);
    store.setName(currenUser[0].name);
    store.setSurname1(currenUser[0].surname1);
    store.setSurname2(currenUser[0].surname2);
    store.setRol(currenUser[0].rol);
    store.setPhone(currenUser[0].phone);
    store.setState(true);
    store.setfirebaseMessagingRef(tokenMessaging);
    console.log(refUserEnFirebase.value);
    store.setFirebaseRefCurrenUser(refUserEnFirebase.value);
} else {
    // Manejar el caso en que no se encuentre un usuario
    console.error('Usuario no encontrado.');
}
 
}

//Función para buscar el número de referencia del usuario en Firebase
const firebaseUserRef = async () => { 
    const querySnapshotTickets = await getDocs(collection(db, "users"));
    querySnapshotTickets.forEach((doc) => {
        ids.push(doc.id);
    });

    //Bucle para buscar el usuario logado y su referencia en Firebase
    for (let i = 0; i < ids.length; i++) {
        if (store.currenUser.idUser == store.userList[i].idUser) {
        refUserEnFirebase.value = ids[i]
        }
    }

    //Actualización de campo State del usuario para que marque como activo
    const stateRef = doc(db, "users", refUserEnFirebase.value);
      await updateDoc(stateRef,{
        state: true,
        //firebaseRef: refUserEnFirebase.value    
    });
    //Variable que carga el id de firebase del usuario
    //console.log(refUserEnFirebase.value)
   
    refUserFire.value = refUserEnFirebase.value
    store.setFirebaseRefCurrenUser(refUserEnFirebase.value)
    
}

</script>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

.title {
    font-size: 20px;
    font-weight: 700;
}

.titleMark {
    margin-top: 50px;
    border-radius: 10px;
    height: 55px;
    width: 100%;
    background-color: rgb(0, 0, 0);
}

hr {
    height: 2px;
    background-color: black;
    box-shadow: 2px 2px rgba(120, 120, 120, .25);
}

.icono {
    margin-top: 5px;
}


.pageTitle {
    color: #ffffff;
    font-size: 38px;
    font-weight: 700;
}

.container {
    width: 100%;
    
    background-color: rgb(255, 255, 255);
}

.bloque-estadiscicas {
    display: flex;
    justify-content: center;
    height: 210px;
    flex-shrink: 0;
    margin-top: 15px;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    border: 1px solid #000;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}


.bloque-tickets {
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 15px;
    /* background-color: rgb(216, 216, 216); */
    border-radius: 10px;
}

.siluelta_card_peq {
    width: 160px;
    height: 100px;
    flex-shrink: 0;
    border-radius: 10px 0px 0px 10px;
    border: 1px solid #000;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin: 25px -12px -15px;
}

.siluelta_card_grande {
    width: 190px;
    height: auto;
    flex-shrink: 0;
    border-radius: 10px;
    border-right: 2px solid rgba(0, 0, 0, 0.50);
    background: #FFF;
    box-shadow: -5px 6px 4px 0px rgba(0, 0, 0, 0.25);
}

.contenido-card-grande {
    margin-top: 15px;
    margin-left: -20px;
}

.num-contador {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    float: right;
    font-weight: 700;
    font-size: 18px;
    color: #FFF;
}

.cuadrado-numerador {
    width: 30px;
    height: 26px;
    border-radius: 10%;
    float: right;
    margin-top: -35px;
    background: rgb(0, 0, 0);
    font-weight: 700;
    font-size: 18px;
    color: #FFF;
}

.circulo-rojo {
    width: 26px;
    height: 26px;
    margin-left: 1px;
    border-radius: 50%;
    float: right;
    margin-top: -33px;
    background: rgb(228, 22, 22);
    font-weight: 700;
    font-size: 18px;
    color: #FFF;
}

.circulo-verde {
    width: 26px;
    height: 26px;
    margin-left: 15px;
    border-radius: 50%;
    float: right;
    margin-top: -35px;
    background: rgb(67, 228, 22);
    font-weight: 700;
    font-size: 18px;
    color: #FFF;
}

.circulo-naranja {
    width: 26px;
    height: 26px;
    margin-left: 15px;
    border-radius: 50%;
    float: right;
    margin-top: -35px;
    background: #FFA800;
    font-weight: 700;
    font-size: 18px;
    color: #FFF;
}

.bloque-usuarios {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    height: auto;
    /* background-color: rgb(216, 216, 216); */
    border-radius: 10px;
}

.bloque-tecnicos {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    height: auto;
    /* background-color: rgb(216, 216, 216); */
    border-radius: 10px;
    margin-bottom: -5px;
}</style>
