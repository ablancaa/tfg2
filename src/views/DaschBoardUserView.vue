<template>
    <NavBar2 :currenUser="currenUser" />
    <div class="container">
        <br />
        <div class="cabecera">
            <div class="titleMark"><span class="pageTitle">Dashboard User</span></div>
            <router-link to="/ticketsView" class="page-link">
                <div class="bloque-estadiscicas-usuario">
                    <div>
                        <h1><img alt="Imagen tickets" src="../assets/ico/logoTicketBlack.png" width="70"> Mis Tickets</h1>
                        <strong>Nº Tickets totales:</strong>
                        <span class="num-contador"><span class="cuadrado-numerador">{{ ticketsUsuario.length
                        }}</span></span><br />
                        <hr />
                        <div class="row">
                            <div class="col">
                                <strong>Activos:</strong>
                                <span class="num-contador"><span class="circulo-verde">{{
                                    contadorUsuario[0].ticketsUserActive }}</span></span><br />
                                <strong>En Espera: </strong>
                                <span class="num-contador"><span class="circulo-verde">{{ contadorUsuario[0].ticketsUserWait
                                }}</span></span><br />
                                <strong>En proceso:</strong>
                                <span class="num-contador"><span class="circulo-verde">{{
                                    contadorUsuario[0].ticketsUserProcces }}</span></span><br />
                                <strong>Finalizados:</strong>
                                <span class="num-contador"><span class="circulo-verde">{{ contadorUsuario[0].ticketsUserEnd
                                }}</span></span><br />
                            </div>
                            <div class="col">
                                <strong
                                    v-if="store.currenUser.rol == 'Técnico' || store.currenUser.rol == 'Admin'">Asignados:</strong>
                                <span class="num-contador" v-if="store.currenUser.rol == 'Técnico'">
                                    <span class="circulo-verde">{{ contadorUsuario[0].ticketsAssignment }}</span>
                                </span><br /><br />
                                <img src="../assets/ico/notificacion.png" width="40" height="40" class="ico" />
                                <span class="num-contador"><span class="circulo-notificaciones">25</span></span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">

                            </div>
                            <div class="col">
                                <strong></strong>

                            </div>
                        </div>
                    </div>
                </div>
            </router-link>
        </div><!-- fin Cabecera -->
        <div class="row">
            <div class="col-xs-12 col-md-12 col-lg-12 contenFlex">
                <hr />
                <div class="historico" v-if="store.currenUser.rol == 'Técnico'"><span class="pageTitle">Tickets
                        Asignados</span></div>
                <div class="row">
                    <div class="col-sm-12" v-for=" ticket in tickets" :key="ticket.idUser">
                        <router-link :to="{
                            name: 'ticketDetail',
                            params: {
                                idTicket: ticket.idTicket,
                                title: ticket.title,
                                description: ticket.description,
                                category: ticket.category,
                                state: ticket.state,
                                priority: ticket.priority,
                                date: ticket.date,
                                idUser: ticket.idUser,
                                comments: JSON.stringify(ticket.comments),
                                technical: ticket.technical[0],
                            }
                        }" class="page-link">
                            <div class="silueta-ticket" v-if="ticket.technical[0] == store.currenUser.idUser">
                                <p class="info"><strong>{{ ticket.idTicket }}</strong><br />
                                    <span class="title ">{{ ticket.title }}</span><br />
                                    <span class="info ">{{ ticket.state }}</span> <br />
                                    <span class="info ">{{ ticket.date }}</span>
                                </p>
                            </div>
                        </router-link>
                    </div>
                </div>
                <br />
                <div class="historico"><span class="pageTitle">Histórico</span></div>
                <div class="bloque-tickets">
                    <div class="row">
                        <div class="col-12" v-for=" ticket in ticketsUsuario" :key="ticket.idUser">
                            <router-link :to="{
                                name: 'ticketDetail',
                                params: {
                                    idTicket: ticket.idTicket,
                                    title: ticket.title,
                                    description: ticket.description,
                                    category: ticket.category,
                                    state: ticket.state,
                                    priority: ticket.priority,
                                    date: ticket.date,
                                    idUser: ticket.idUser,
                                    comments: JSON.stringify(ticket.comments),
                                    technical: ticket.technical[0],
                                }
                            }" class="page-link">
                                <div class="silueta-ticket" v-if="ticket.state == 'end'">
                                    <p class="info"><strong>{{ ticket.idTicket }}</strong><br />
                                        <span class="title ">{{ ticket.title }}</span><br />
                                        <span class="info ">{{ ticket.state }}</span> <br />
                                        <span class="info ">{{ ticket.date }}</span>
                                    </p>
                                </div>
                            </router-link>
                        </div>
                    </div>

                </div>

            </div>
        </div><!--Fin Row -->
    </div><!--Fin Container -->

    <br />
    <Footer />
</template>

<script setup>
import NavBar2 from '@/components/NavBar2.vue'
import Footer from '@/components/Footer.vue'
import { useDataStore } from '../store/datosUser.js'
import { db } from "../utils/FirebaseConfig.js"
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { reactive, onMounted, onBeforeMount, ref } from 'vue'


let currenUser = reactive([]);

const store = useDataStore();

let refUserEnFirebase = ref()
let refUserFire = ref();
let ids = reactive([]);
let users = reactive([]);
let ticketsUsuario = reactive([]);
let tickets = reactive([]);
let contadorUsuario = reactive([
    {
        ticketsUserProcces: 0,
        ticketsUserActive: 0,
        ticketsUserEnd: 0,
        ticketsUserWait: 0,
        ticketsAssignment: 0,
    }
]);
let contadores = reactive([
    {
        usersNum: 0,
        usersActive: 0,
        usersDisconnect: 0,
        usersAdmin: 0,
        usersDocente: 0,
        usersServicios: 0
    },
    {
        ticketsNum: 0,
        ticketsProgress: 0,
        ticketsEnd: 0,
        ticketsActive: 0,
        ticketsWait: 0,
    },
    {
        usersTecnico: 0,
        userAssignment: 0,
        userUnAssignment: 0,
    }
])


localStorage.tickets = JSON.stringify(contadores[1]);
localStorage.usuarios = JSON.stringify(contadores[0]);
onBeforeMount(() => {

}),
    onMounted(() => {
        getListados();
        temporizadorDeRetraso();
        refUserEnFirebase.value = firebaseUserRef();
    })


function temporizadorDeRetraso() {
    setTimeout(getListaTicketsDelUsuario, 1000);

}

async function getListados() {
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
        contadores[2].userUnAssignment = tecnicoNoAsignado.lengt;

    });

    querySnapshotTickets.forEach((doc) => {
        tickets.push(doc.data());
        let ticketProcces = tickets.filter(ticket => ticket.state == "procces")
        let ticketEnd = tickets.filter(ticket => ticket.state == "end")
        let ticketActive = tickets.filter(ticket => ticket.state == "active")
        let ticketWait = tickets.filter(ticket => ticket.state == "wait")

        contadores[1].ticketsNum = tickets.length
        contadores[1].ticketsProgress = ticketProcces.length
        contadores[1].ticketsEnd = ticketEnd.length
        contadores[1].ticketsActive = ticketActive.length
        contadores[1].ticketsWait = ticketWait.length
    });
    localStorage.tickets = JSON.stringify(contadores[1]);
    localStorage.usuarios = JSON.stringify(contadores[0]);
    localStorage.setItem("usersList", JSON.stringify(users));

    datosUsuarioLogado(users)

}

//Se asignan los datos del usuario que hace login
const datosUsuarioLogado = (lista) => {

    store.setUsersList(lista);
    const usuario = lista.filter((item) => item.email === store.currenUser.email);

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
    store.setFirebaseRefCurrenUser(refUserEnFirebase.value)
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
    await updateDoc(stateRef, {
        state: true,
    });
    //Variable que carga el id de firebase del usuario
    refUserFire.value = refUserEnFirebase.value
}

//Adquiere la lista de tickets del usuario
async function getListaTicketsDelUsuario() {

    let ticketsUsu = tickets.filter(ticket => ticket.idUser == store.currenUser.idUser)
    let ticketProcces = tickets.filter(ticket => ticket.state == "procces" && ticket.idUser == store.currenUser.idUser)
    let ticketActive = tickets.filter(ticket => ticket.state == "active" && ticket.idUser == store.currenUser.idUser)
    let ticketWait = tickets.filter(ticket => ticket.state == "wait" && ticket.idUser == store.currenUser.idUser)
    let ticketEnd = tickets.filter(ticket => ticket.state == "end" && ticket.idUser == store.currenUser.idUser)
    let ticketAssignment = tickets.filter(ticket => ticket.technical[0] == store.currenUser.idUser)
    console.log(ticketProcces.length)
    console.log(ticketActive.length)
    console.log(ticketWait.length)
    console.log(ticketEnd.length)
    console.log(ticketsUsu);
    console.log(ticketAssignment.length);
    contadorUsuario[0].ticketsAssignment = ticketAssignment.length;
    for (let i = 0; i < ticketsUsu.length; i++) {
        if (ticketsUsu[i].idUser == store.currenUser.idUser) {
            contadores[1].ticketsProgress = i;
            contadorUsuario[0].ticketsUserProcces = ticketProcces.length;
            contadorUsuario[0].ticketsUserWait = ticketWait.length;
            contadorUsuario[0].ticketsUserActive = ticketActive.length;
            contadorUsuario[0].ticketsUserEnd = ticketEnd.length;
        
        }
        
        ticketsUsuario.push(ticketsUsu[i])
    }
}

</script>

<script>
export default {
    name: 'Dashboard-User'
}
</script>

<style scoped>
.cabecera {
    width: auto;
    display: fixed;
}

.titleMark {
    margin-top: 50px;
    border-radius: 10px;
    height: 55px;
    width: 100%;
    background-color: rgb(0, 0, 0);

}

.silueta-ticket {

    margin-top: 5px;
    margin-bottom: 10px;
    border-radius: 10px;
    box-shadow: -5px 6px 4px 0px rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(0, 0, 0, 0.50);
}

.pageTitle {
    color: #ffffff;
    font-size: 38px;
    font-weight: 700;
}

.container {
    width: 100%;
    height: 100%;
    background-color: rgb(255, 255, 255);
}

.historico {
    margin-top: 0px;
    border-radius: 10px;
    height: 55px;
    width: 100%;
    background-color: rgb(0, 0, 0);
}

.contenFlex {
    display: flex;
    flex-direction: column;
}

.bloque-estadiscicas-usuario {
    flex-shrink: 0;
    margin-top: 15px;
    height: auto;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    border: 1px solid;
    box-shadow: 0px 10px 13px -7px #000000, 2px 6px 12px -1px rgba(0, 0, 0, 0.42);
}

.bloque-tickets {
    margin-top: 10px;
    height: 100%;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
}

.title {
    font-size: 16px;
}

.num-contador {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-weight: 700;
    font-size: 18px;
    color: #FFF;
    margin-left: 5px;
}

.circulo-verde {
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: rgb(67, 228, 22);
    font-weight: 700;
    color: #FFF;
}

.circulo-notificaciones {
    position: relative;
    padding: 3px;
    border-radius: 50%;
    background: rgb(228, 159, 22);
    font-weight: 700;
    color: #ffffff;
}

.ico {
    margin-bottom: 5px;
}

.cuadrado-numerador {
    width: 30px;
    height: 25px;
    position: absolute;
    border-radius: 10%;
    background: rgb(217, 162, 12);
    font-weight: 700;
    font-size: 18px;
    color: #FFF;
}

.info {
    padding: 15px;
    text-align: left;
    font-size: 12px;
}</style>