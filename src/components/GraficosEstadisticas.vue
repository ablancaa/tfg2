<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-6">
                <router-link to="/ticketsView">
                    <div class="bloque-estadiscicas">
                        <canvas id="tickets"></canvas>
                    </div> <!--Fin Bloque Estadisticas -->
                </router-link>
            </div>
            <div class="col-sm-12 col-md-6">
                <router-link to="/usersView">
                    <div class="bloque-estadiscicas">
                        <canvas id="usuarios"></canvas>
                    </div> <!--Fin Bloque Estadisticas -->
                </router-link>
            </div>
            <div class="col-sm-12 col-md-6">
                <div class="bloque-estadiscicas">
                    <canvas id="categorias"></canvas>
                </div> <!--Fin Bloque Estadisticas -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Chart from 'chart.js/auto';

onMounted(() => {
    pintaGraficaTickets();
    pintaGraficaUsuarios();
    pintaGraficaCategorias();
});

const pintaGraficaTickets = () => {

    let ticket = JSON.parse(localStorage.tickets);
    let ticketsNum = ticket.ticketsNum;
    let ticketsActive = ticket.ticketsActive;
    let ticketsWait = ticket.ticketsWait;
    let ticketsProgress = ticket.ticketsProgress;
    let ticketsEnd = ticket.ticketsEnd;

    const ctx = document.getElementById("tickets");
    const labels = ['Nº Tickets Total', 'En Activo', 'En Espera', 'En proceso', 'Resuelto']

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                display: false,
                label: 'Tickets',
                data: [ticketsNum, ticketsActive, ticketsWait, ticketsProgress, ticketsEnd],
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
const pintaGraficaUsuarios = () => {

    let usuarios = JSON.parse(localStorage.usuarios);
    let usuNum = usuarios.usersNum;
    let usuActive = usuarios.usersActive;
    let usuDisconnect = usuarios.usersDisconnect;


    const ctx = document.getElementById("usuarios");
    const labels = ['Nº Usuarios Total', 'On Line', 'Off Line']

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                display: false,
                label: 'Usuarios',
                data: [usuNum, usuActive, usuDisconnect],
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
const pintaGraficaCategorias = () => {

    let ticket = JSON.parse(localStorage.tickets);
    let ticketSoftware = ticket.ticketSofware;
    let ticketAsistencia = ticket.ticketAsistencia;
    let ticketHardware = ticket.ticketHardware;
    let ticketServicios = ticket.ticketServicios;

    const ctx = document.getElementById("categorias");
    const labels = ['Software', 'Hardware', 'Asistencia', 'Servicios']

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                display: false,
                label: 'Categorías',
                data: [ticketSoftware, ticketAsistencia, ticketHardware, ticketServicios],
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
</script>

<style scoped>
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
</style>