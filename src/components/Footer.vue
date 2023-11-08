<template>
    <div class="fondo">
        <p class="title "><img alt="Vue logo" src="../assets/ico/logoTicketWhite.png" width="80">
        <span class="tituloLogo"> TicketService</span></p>
    </div>
</template>

<script setup>

</script>
<script>
    export default {
        name:'Footer-app'
    }
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

.fondo {
    display: flex;
    justify-content: center;
    background-color: black;
    color: #fff;
    font-size: 38px;
   
    line-height:2em;
}
.tituloLogo{
    font-weight: 700;
}
</style>