<template>
  <NavBar2 />
  <div class="container">
    <br />
      <div class="titleMark ">
        <span class="pageTitle"
          >Ticket Nº: <span class="nticket">{{ ticket[0].idTicket }}</span></span>
      </div>
    
    <div class="col-12 col-md-6 ">
      <div class="col" v-for="user in users" :key="user.idUser">
        <div class="silueta-card" v-if="ticket[0].idUser == user.idUser">
          <div class="flex-items">
            <img class="imgUser" :src="user.imgUser" width="60" height="60" />
          </div>
          <div class="flex-items">
            <p class="informacion">
              {{ user.name }} {{ user.surname1 }} {{ user.surname2 }}<br />
              <span class="email">{{ user.email }}</span
              ><br />id: {{ user.idUser }}
            </p>
          </div>
          <div class="flex-items">
            <div class="flex-estado">
              <div class="flex-item-estado">
                <div class="circulo-verde" v-if="user.state"></div>
                <div class="circulo-rojo" v-else></div>
              </div>
              <div class="flex-item-estado">
                <p class="estado">{{ user.rol }}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- silueta-card  -->
      </div>
    </div>
 
    <div class="container">
      <div class="row silueta-card">
        <div class="col">
          <div class="flex-container">
            <div class="flex-item">
              <strong>Prioridad:</strong>
            </div>
            <div class="flex-item" @click="showPriority">
              <img
                src="../assets/ico/importante.png"
                v-if="route.params.priority == 'Importante'"
                width="50"
                height="50"
              />
              <img
                src="../assets/ico/normal.png"
                v-if="route.params.priority == 'Normal'"
                width="50"
                height="50"
              />
              <img
                src="../assets/ico/critico.png"
                v-if="route.params.priority == 'Crítico'"
                width="50"
                height="50"
              />
              <img
                src="../assets/ico/urgente.png"
                v-if="route.params.priority == 'Urgente'"
                width="50"
                height="50"
              />
            </div>
            <div class="flex-item">
              <p v-if="route.params.priority == 'Importante'">{{ ticket[0].priority }}</p>
              <p v-if="route.params.priority == 'Normal'">{{ ticket[0].priority }}</p>
              <p v-if="route.params.priority == 'Urgente'">{{ ticket[0].priority }}</p>
              <p v-if="route.params.priority == 'Crítico'">{{ ticket[0].priority }}</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="flex-container">
            <div class="flex-item">
              <strong>Estado:</strong>
            </div>
            <div class="flex-item">
              <img
                src="../assets/ico/procesando.png"
                v-if="route.params.state == 'wait'"
                width="50"
                height="50"
                @click="showState"/>
              <img
                src="../assets/ico/proceso.png"
                v-if="route.params.state == 'procces'"
                width="50"
                height="50"
                @click="showState"/>
              <img
                src="../assets/ico/active.png"
                v-if="route.params.state == 'active'"
                width="50"
                height="50"
                @click="showState"/>
              <img
                src="../assets/ico/end.png"
                v-if="route.params.state == 'end'"
                width="50"
                height="50"
                @click="showState"/>
            </div>
            <div class="flex-item">
              <p v-if="route.params.state == 'end'">{{ ticket[0].state }}</p>
              <p v-if="route.params.state == 'active'">{{ ticket[0].state }}</p>
              <p v-if="route.params.state == 'wait'">{{ ticket[0].state }}</p>
              <p v-if="route.params.state == 'procces'">{{ ticket[0].state }}</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="flex-container" v-if="ticket[0].technical == 'Sin Asignar'">
            <div class="flex-item" @click="showAssingment()">
              <strong>Asignado:</strong><br/>
              <img
                  src="../assets/ico/noAsignado.png"
                  v-if="ticket[0].technical == 'Sin Asignar'"
                  width="50"
                  height="50"
                  class=""
                />
                <p v-if="ticket[0].technical == 'Sin Asignar'">
                  No Asignado
                </p>
            </div>
          </div>
          <div class="flex-container" v-if="ticket[0].technical != 'Sin Asignar'" @click="showAssingment()">
            <div class="flex-item">
              <strong>Asignado:</strong>
            </div>
            <div class="flex-item" v-for="avatar in users" :key="avatar.idUser">
              <img
                :src="avatar.imgUser"
                v-if="ticket[0].technical == avatar.idUser"
                width="50"
                height="50"
                class="imgUser"
              />
            </div>
            <div class="flex-item" v-for="technic in users" :key="technic.idUser">
              <p v-if="technic.idUser == ticket[0].technical" class="technicDates">
                {{ technic.name }} {{ technic.surname1 }}
              </p>
            </div>
          </div>
       
        </div>
        
      </div>
      </div><!-- fin container -->
      <br/>
      <div class="container">
      <div class="row">
        <div class="col">
          <p class="titleTicket">
            Categoría: {{ ticket[0].category }} | Fecha: {{ ticket[0].date }}
          </p>
          <p class="description">
            <span class="titleTicket">Title: {{ ticket[0].title }}</span>
            <span><strong>Description</strong></span
            ><br />
            {{ ticket[0].description }}
          </p>

          <div class="comment">
            <div v-for="comentario in tickets" :key="comentario">
              <div v-for="comen in comentario.comments" :key="comen">
                <span v-if="comentario.idTicket == route.params.idTicket">
                  <p class="titleTicket">{{ comen.email }} | {{ comen.date }}</p>
                  <p>{{ comen.comment }}</p>
                  <div class="btnComment">
                    <button @click="deleteComment(comen)" class="agregar">
                      <img src="../assets/ico/delete.png" width="15" height="15" />
                    </button>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <br />
          <p class="ico">
            <button @click="showForm()" class="agregar">
              <img src="../assets/ico/agregar.png" width="30" height="30" class="agregar"/>
            </button>
          </p>
        </div>
      </div>
      <div class="col col-md-2 item-3">
        <span v-if="store.currenUser.rol == 'Admin'">
          <button @click="deleteTicket(route.params.idTicket)" class="agregar">
            <img src="../assets/ico/delete.png" width="30" height="30" />
          </button>
        </span>
      </div>
      <AddComment v-if="showModal" @close="showModal = false" @newComment="addComment" class="showModal" />
    </div>
    <!--fin container 2 -->
    <div>
      <AssingmentTechnic
        v-if="showAssingmentTechnicModal"
        @close="showAssingmentTechnicModal = false"
        :userList="users"
        @technicAssignment="technicAssignment"
      />
    </div>
    <div>
      <AssingmentState
        v-if="showAssingmentStateModal"
        @close="showAssingmentStateModal = false"
        :userList="users"
        @stateAssignment="assignmentState"
      />
    </div>
    <div>
      <AssingmentPriority
        v-if="showAssingmentPriorityModal"
        @close="showAssingmentPriorityModal = false"
        :userList="users"
        @priorityAssignment="assignmentPriority"
      />
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { db } from "../utils/FirebaseConfig.js";
import { collection, deleteDoc, getDocs, doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { useDataStore } from "../store/datosUser.js";
import NavBar2 from "@/components/NavBar2.vue";
import AddComment from "@/components/AddComment.vue";
import Footer from "@/components/Footer.vue";
import AssingmentTechnic from "@/components/AssingmentTechnic.vue";
import AssingmentState from "@/components/AssingmentState.vue";
import AssingmentPriority from "@/components/AssingmentPriority.vue";


const store = useDataStore(); // Accede al store de la apliacion
const router = useRouter(); //Utiliza el router.push("/")
const route = useRoute(); //recibe los parámetros del router
const tiempoTranscurrido = Date.now();
const hoy = new Date(tiempoTranscurrido);
hoy.toLocaleDateString();

//Variables para uso en la vista
let refTicketEnFirebase = ref();
let idsTickets = reactive([]);
let idsUsers = reactive([]);
let tickets = reactive([]);
let users = reactive([]);
let comments = reactive([]);
let showModal = ref(false);
let showAssingmentTechnicModal = ref(false);
let showAssingmentStateModal = ref(false);
let showAssingmentPriorityModal = ref(false);

comments.push(JSON.parse(route.params.comments));//Parámetro recibido por el router

let ticket = reactive([
  {
    idTicket: route.params.idTicket,
    title: route.params.title,
    description: route.params.description,
    category: route.params.category,
    priority: route.params.priority,
    state: route.params.state,
    date: route.params.date,
    idUser: route.params.idUser,
    technical: route.params.technical,
    comments: comments,
  },
]);

onMounted(() => {
  temporizadorDeTickets();
  getListaUsers();
});

const temporizadorDeTickets = () => {
  setTimeout(getListaTickets, 1000);
}

function showForm() {
  showModal.value = true;
}

//Función para asignar un técnico
function showAssingment() {
    showAssingmentTechnicModal.value = true;
  if (store.currenUser.rol != "Admin") {
    alert(
      "El usuario " +
        store.currenUser.email +
        " no tiene permisos para asignar un Técnico porque su perfil es: " +
        store.currenUser.rol
    );
    showAssingmentTechnicModal.value = false;
  }
}

//Muestra la prioridad e impide que pueda cambiarla un usuario que no tenga permisos
function showPriority() {
    showAssingmentPriorityModal.value = true;
  if (store.currenUser.rol != "Admin") {
    alert(
      "El usuario " +
        store.currenUser.email +
        " no tiene permisos para asignar una Prioridad porque ya especificó una Prioridad: " +
        route.params.priority
    );
    showAssingmentPriorityModal.value = false;
  }
}

//Solicita lista de usuario del servidor y la guarda en array
async function getListaUsers() {
  const querySnapshotUsers = await getDocs(collection(db, "users"));
  querySnapshotUsers.forEach((doc) => {
    users.push(doc.data());
  });
}

//Hace peticíon al servidor de la lista de tickets
async function getListaTickets() {
  const querySnapshotTickets = await getDocs(collection(db, "tickets"));
  querySnapshotTickets.forEach((doc) => {
    tickets.push(doc.data());
  });
 
}
//Busca el ticket por referencia y lo borra
async function deleteTicket(idTicket) {
  console.log(idTicket);
  const querySnapshotClients = await getDocs(collection(db, "tickets"));
  querySnapshotClients.forEach((doc) => {
    idsTickets.push(doc.id);
    users.push(doc.data());
  });

  for (let i = 0; i < tickets.length; i++) {
    if (idTicket == tickets[i].idTicket) {
 
      refTicketEnFirebase.value = idsTickets[i];
    
    }
  }
  console.log(refTicketEnFirebase.value);
  await deleteDoc(doc(db, "tickets", refTicketEnFirebase.value));
  router.push("/ticketsView");
}

//Función para añadir un comentario al ticket y que lo incluya como objeto
const addComment = async (newComment) => {
  //Lista de id de cada ticket en Firebase
  const querySnapshotTickets = await getDocs(collection(db, "tickets"));
  querySnapshotTickets.forEach((doc) => {
    idsTickets.push(doc.id);
  });

  //Bucle para buscar los comentarios del ticket elegido
  let comentariosAnteriores = reactive([]);
  for (let i = 0; i < tickets.length; i++) {
    console.log(tickets[i].idTicket);
    if (route.params.idTicket == tickets[i].idTicket) {
      comentariosAnteriores.push(...tickets[i].comments);
      refTicketEnFirebase.value = idsTickets[i];
    }
  }

  //Nuevo comentario para introducir en el ticket
  let com = reactive([
    {
      email: newComment.email,
      comment: newComment.description,
      date: newComment.date,
    },
  ]);

  //Comentarios anteriores más el nuevo al final
  comentariosAnteriores.push(...com);

  //Actualización de campo comentarios del ticket
  const comentariosRef = doc(db, "tickets", refTicketEnFirebase.value);
  await updateDoc(comentariosRef, {
    comments: comentariosAnteriores,
  });

  //Recarga la página para aplicar cambios
  location.reload("/ticketDetail");
};

const deleteComment = async (comentario) => {
  console.log(comentario);
   //Lista de id de cada ticket en Firebase
   const querySnapshotTickets = await getDocs(collection(db, "tickets"));
  querySnapshotTickets.forEach((doc) => {
    idsTickets.push(doc.id);
  });

  //Bucle para buscar los comentarios del ticket elegido
  let comentariosAnteriores = reactive([]);
  for (let i = 0; i < tickets.length; i++) {
    console.log(tickets[i].idTicket);
    if (route.params.idTicket == tickets[i].idTicket) {
      comentariosAnteriores.push(...tickets[i].comments);
      refTicketEnFirebase.value = idsTickets[i];
    }
  }

   //Actualización de campo comentarios del ticket
   const comentariosRef = doc(db, "tickets", refTicketEnFirebase.value);
  await updateDoc(comentariosRef, {
    comments: arrayRemove(comentario),
  });
  location.reload("/ticketDetail");
  //alert("Borrar Mensaje");
};

//Asigna un técnico al ticket por la id del usuario
const technicAssignment = async (idTechnic) => {
  
  //Lista de id de cada ticket en Firebase
  const querySnapshotTickets = await getDocs(collection(db, "tickets"));
  querySnapshotTickets.forEach((doc) => {
    idsTickets.push(doc.id);
  });

  //Lista de id de cada usuario en Firebase
  const querySnapshotUsers = await getDocs(collection(db, "users"));
  let user = reactive([])
  querySnapshotUsers.forEach((doc) => {
    idsUsers.push(doc.id);
    user.push(doc.id);
  });

  //Bucle para buscar la referencia del ticket elegido en firebase
  let technicalAssignement = reactive([]);
  for (let i = 0; i < tickets.length; i++) {
    if (route.params.idTicket == tickets[i].idTicket) {
      refTicketEnFirebase.value = idsTickets[i];
    }
  }
  ticket.technical = idTechnic;
  //Bucle para buscar los comentarios del ticket elegido
   let comentariosAnteriores = reactive([]);
   for (let i = 0; i < tickets.length; i++) {
    if (route.params.idTicket == tickets[i].idTicket) {
      comentariosAnteriores.push(...tickets[i].comments);
      refTicketEnFirebase.value = idsTickets[i];
    }
  }
  let userIdFirebase =''
  for (let i=0; i < users.length; i++){
    if(users[i].idUser == idTechnic)
      console.log(idsUsers[i]);
      userIdFirebase = idsUsers[i];
    }
  
  //Actualización de campo tecnico asignado del ticket y mensaje de ticket activo al usuario
  console.log(refTicketEnFirebase.value);
  ticket.technical = idTechnic;
  technicalAssignement.push(idTechnic);
  const technicalRef = doc(db, "tickets", refTicketEnFirebase.value);
    let comment = {
        email: 'Mensaje del sistema',
        comment: 'Un técnico ha sido asignado a su incidencia, pronto recibirá información de su parte, Gracias',
        date: hoy.toLocaleDateString(),
    }
  await updateDoc(technicalRef, {
    technical: technicalAssignement,
    state: "active",
    comments: arrayUnion(comment) 
  });

   const technicalAssingmentRef = doc(db, "users", userIdFirebase);
   await updateDoc(technicalAssingmentRef, {
     assignment: true, 
   });
  showAssingmentTechnicModal.value = false;
  router.push("/ticketsView");
};

//Función para asignar estado
const showState = () => {
    showAssingmentStateModal.value = true;
  if (store.currenUser.rol != "Admin") {
    alert(
      "El usuario " +
        store.currenUser.email +
        " no tiene permisos para asignar un Estado al ticket porque su perfil es: " +
        store.currenUser.rol
    );
    showAssingmentStateModal.value = false;
  }
}

//Asigna el estado al ticket
const assignmentState = async (newState) => {
  //Lista de id de cada ticket en Firebase
  const querySnapshotTickets = await getDocs(collection(db, "tickets"));
  querySnapshotTickets.forEach((doc) => {
    idsTickets.push(doc.id);
  });
    //Bucle para buscar la referencia del ticket elegido en firebase
    for (let i = 0; i < tickets.length; i++) {
        if (route.params.idTicket == tickets[i].idTicket) {
        refTicketEnFirebase.value = idsTickets[i];
        }
    }

    const TicketRef = doc(db, "tickets", refTicketEnFirebase.value);
    let com = {}
    switch (newState) {
    case "wait":
    com = {
        email: 'Mensaje del sistema',
        comment: 'Ticket en Espera',
        date: hoy.toLocaleDateString(),
      }
      await updateDoc(TicketRef, {
        state: newState,
        comments:  arrayUnion(com),
      });

      break;
    case "procces":
    com = {
        email: 'Mensaje del sistema',
        comment: 'Ticket En proceso',
        date: hoy.toLocaleDateString(),
      }
    
      await updateDoc(TicketRef, {
        state: newState,
        comments:  arrayUnion(com),
      });
      
      route.params.state = newState
      break;
    case "active":
    com = {
        email: 'Mensaje del sistema',
        comment: 'Ticket Activo',
        date: hoy.toLocaleDateString(),
      }
      await updateDoc(TicketRef, {
        state: newState,
        comments:  arrayUnion(com),
      });
      route.params.state = newState
     
      break;
    case "end":
      com = {
        email: 'Mensaje del sistema',
        comment: 'Ticket Finalizado',
        date: hoy.toLocaleDateString(),
      }
      await updateDoc(TicketRef, {
        state: newState,
        comments:  arrayUnion(com),
      });
      route.params.state = newState
    
      break;
    default:
      console.log(
        "Lo lamentamos, por el momento no disponemos del estado: " + newState + "."
      );
  }

  console.log(newState);
    console.log(refTicketEnFirebase.value);
    
  router.push("/ticketsView");
};

const assignmentPriority = (priority) => {
    alert("Ticket detail Prioridad: "+ priority);
}

</script>
<script>
export default {
  name: "Tickets-View",
};
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
}

.header-fijo {
  min-width: 100%;
  position: fixed;
  height: auto;
  width: auto;
  z-index: 3;
  background-color: #ffffff;
}
.header-opciones {
  margin-top: 10px;
  border-radius: 10px;
  height: 55px;
  width: 100%;
  background-color: rgb(0, 0, 0);
}
.btnComment {
  text-align: right;
}
.btn {
  margin-top: 9px;
  margin-left: 10px;
  border-color: white;
  color: #ffffff;
  font-weight: 600;
  width: 110px;
}
.titleMark {
  margin-top: 50px;
  border-radius: 10px;
  height: 55px;
  width: 100%;
  text-align: left;
  background-color: rgb(0, 0, 0);
}

.pageTitle {
  color: #ffffff;
  margin-left: 10px;
  font-size: 38px;
  font-weight: 700;
}
.nticket {
  font-size: 25px;
  font-weight: 700;
}
.titleTicket {
  background-color: #ffffff;
  display: flex;
  font-weight: 700;
  justify-content: start;
  border-bottom: 2px solid;
}
.description {
  padding: 10px;
  border: 1px solid;
  border-radius: 10px;
  text-align: left;
}
.comment {
  border: 1px solid;
  border-radius: 10px;
  text-align: left;
  padding: 10px;
}
.agregar {
  border-radius: 10px;
}
.ico {
  text-align: right;
}

/* TARJETA DE USUARIO */
.silueta-card {
  display: flex;
  flex-direction: row;

  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
  border: 1px solid;
  border-radius: 10px;
  box-shadow: 0px 5px 5px 2px #757575;
}

.flex-items:nth-child(1) {
  justify-content: center;
  align-items: center;
  /* background-color: aqua;  */
}

.flex-items:nth-child(2) {
  width: 210px;
  justify-content: start;
  align-items: start;
  /* background-color: rgb(28, 196, 196); */
}
.flex-estado {
  display: flex;
  flex-direction: column;
  width: 60px;
}

.flex-item-estado:nth-child(1) {
  display: block;
}

.informacion {
  margin-top: 10px;
  line-height: 20px;
  text-align: left;
  font-size: 17px;
  font-weight: 700;
}
.technicDates {
  font-size: 13px;
}
.email {
  font-size: 16px;
  font-weight: 400;
}
.estado {
  font-size: 14px;
  margin-top: 10px;
  margin-left: -15px;
  /* background-color: rgb(180, 9, 186);  */
}
.flex-items:nth-child(3) {
  justify-content: center;
  align-items: center;
  /* background-color: rgb(255, 0, 217); */
}
.imgUser {
  border-radius: 50%;
  border: 2px solid rgb(2, 30, 132);
  margin: 0px 10px 0px 5px;
}

.circulo-verde {
  width: 20px;
  height: 20px;
  margin: auto;
  margin-top: 10px;
  border-radius: 50%;
  background: rgb(67, 228, 22);
}
.circulo-rojo {
  width: 20px;
  height: 20px;
  margin: auto;
  margin-top: 10px;
  border-radius: 50%;
  background: rgb(228, 22, 22);
}
</style>
