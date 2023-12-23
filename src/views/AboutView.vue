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
      <div class="col-4"><img src="../assets/img/Profile2.jpg" width="100" class="imagen"/></div>
      <div class="col-8"><br/>
        <h5>Alberto Blanca Alcaide</h5>
        <h6>Grado Multimedia</h6>
        <h5>2023/24 UOC</h5><br/><br/>
      </div>
      <hr/>
      <div class="col-6"><br/><p><strong>Nombre Consultor/a:</strong><br/> Helena Boltà Torrell</p></div>
      <div class="col-6"><br/><p><strong>Profesor/a responsable de la asignatura:</strong><br/> Carles Garrigues</p> </div>     
      <hr/>
      <div>
    </div>
    <table class="table">
            <thead class="thead-dark">
                <tr>
                <th colspan="5"><h3>Iconografía</h3><a href="https://www.flaticon.es/iconos-gratis/mensaje" title="mensaje iconos">Iconos creados por Freepik - Flaticon</a></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <td><img alt="Icono" src="../assets/ico/charlando.png" width="40"/></td>
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
                  <td><img alt="Icono" src="../assets/ico/exitBlack.png" width="40" /></td>
                  <td><img alt="Icono" src="../assets/ico/delete.png" width="40" /></td>
                  <td><img alt="Icono" src="@/assets/ico/soporte-tecnico.png" width="40"/></td>
                </tr>
                <tr>
                  <td><img alt="Icono" src="../assets/ico/profesor.png" width="40"/></td>
                  <td><img alt="Icono" src="../assets/ico/administrador.png" width="40"/></td>
                  <td><img alt="Icono" src="../assets/ico/servicios.png" width="40" /></td>
                  <td><img alt="Icono" src="../assets/ico/trabajo-en-progreso.png" width="40"/></td>
                  <td><img alt="Icono" src="../assets/ico/noAsignado.png" width="40"/></td>
                </tr>
                <tr>
                <td colspan="5"></td>
                </tr>
            </tbody>
            </table>
            <div class="col-12">
              <table class="table">
            <thead class="thead-dark">
                <tr>
                <th colspan="5"><h3>Herramientas</h3></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <td>
                    <img src="data:image/jpeg;base64,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" 
                    class="iconosHerramientas"/>
                  </td>
                  <td class="letterMin">
                    <h6>Visual Studio Code</h6>
                    <p>Editor de código generalista que limita sus funcionalidades de IDE para resultar ligero y cómodo de usar. En la elaboración de la aplicación se ha utilizado para toda la tarea de codificación y pruebas, además de para la instalación de paquetes mediante npm y gestión del repositorio mediante git.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="data:image/png;base64,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"
                    class="iconosHerramientas"
                    />
                  </td>
                  <td class="letterMin">
                    <h6>Node.js</h6>
                    <p>Entorno de ejecución de JavaScript orientado a eventos asíncronos. https://nodejs.org/en</p>
                  </td>                 
                  
                </tr>
                <tr>
                  <td>
                  <img src="data:image/png;base64,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"
                    class="iconosHerramientas"
                    />
                  </td>
                  <td class="letterMin">
                  <h6>Vue.js (Vue 3)</h6>
                  <p>Framework Javascript progresivo, para el desarrollo de interfaces web. Con este framework se ha desarrollado toda la aplicación, utilizando una programación modular en los ficheros para vistas independientes con su contenido propio de código Javascript, HTML y CSS. https://vuejs.org/</p>
                  </td>
                  
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                <td colspan="5"></td>
                </tr>
            </tbody>
            </table>
            
            </div>
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

.letterMin{
  font-size: 11px;
  text-align: left;
}

.iconosHerramientas{
  width: 40px;
}
</style>