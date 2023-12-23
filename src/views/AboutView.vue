<template>
<NavBar2/>
  <div class="container">
    <br/>
    <div class="titleMark"><span class="pageTitle">About</span></div>
    <div class="row">
      <div class="col-12">
      <br/>
      <h3>TFG - Desarrollo de aplicaciones sobre dispositivos móviles</h3><br/></div>
      <br/>
      <hr/>
      <div class="col-12"><img src="../assets/img/Profile2.jpg" width="100" class="imagen"/></div>
      <div class="col-12"><br/><p>Alberto Blanca Alcaide</p></div>
      <div class="col-12"><br/><h5>2023/24 UOC</h5></div>
      <hr/>
      <div>
    </div>
    <table class="table">
            <thead class="thead-dark">
                <tr>
                <th colspan="5"><h3>Iconografía</h3></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <td><img alt="Icono" src="../assets/ico/charlando.png" width="40" height="40"/></td>
                  <td><img alt="Icono" src="../assets/ico/userBlack.png" width="40"/></td>
                  <td><img alt="Icono" src="../assets/ico/logoTicketBlack.png" width="40"/></td>
                  <td><img alt="Icono" src="../assets/ico/reparar.png" width="40"/></td>
                  <td><img alt="Icono" src="../assets/ico/normal.png" width="40" height="40"/></td>
                </tr>
                <tr>
                  <td><img alt="Icono" src="../assets/ico/urgente.png" width="40" height="40"/></td>
                  <td><img alt="Icono" src="../assets/ico/critico.png" width="40"/></td>                 
                  <td><img alt="Icono" src="../assets/ico/importante.png" width="40"/></td>
                  <td><img alt="Icono" src="../assets/ico/active.png" width="40"/></td>
                  <td><img alt="Icono" src="../assets/ico/procesando.png" width="40"/></td>
                </tr>
                <tr>
                  <td><img alt="Icono" src="../assets/ico/end.png" width="40"/></td>
                  <td><img alt="Icono" src="../assets/ico/proceso.png" width="40"/></td>
                  <td><img src="../assets/ico/exitBlack.png" width="40" /></td>
                  <td><img src="../assets/ico/delete.png" width="40" /></td>
                  <td><img src="@/assets/ico/soporte-tecnico.png" width="40"/></td>
                </tr>
                <tr>
                  <td><img alt="Icono" src="../assets/ico/profesor.png" width="40"/></td>
                  <td><img alt="Icono" src="../assets/ico/administrador.png" width="40"/></td>
                  <td><img src="../assets/ico/servicios.png" width="40" /></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                <td colspan="5"><a href="https://www.flaticon.es/iconos-gratis/mensaje" title="mensaje iconos">Mensaje iconos creados por Freepik - Flaticon</a></td>
                </tr>
            </tbody>
            </table>
      </div>
  </div>
  <Footer/>
</template>
<script setup>
import NavBar2 from '@/components/NavBar2.vue'
import Footer from '@/components/Footer.vue';
</script>
<style scoped>
.titleMark {
    margin-top: 50px;
    border-radius: 10px;
    height: 55px;
    width: 100%;
    background-color: rgb(0, 0, 0);
}
.pageTitle {
    color: #ffffff;
    font-size: 38px;
    font-weight: 700;
}

.imagen {
  border-radius: 10px;
  -webkit-box-shadow: 10px 10px 15px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 15px 1px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 15px 1px rgba(75, 75, 75, 0.75);
}
</style>