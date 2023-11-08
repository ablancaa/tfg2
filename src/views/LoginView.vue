<template>
  <div class="container">
    <div class="row">
    <br/>
      <div class="col-xs-12 col-md-12 col-lg-12"><br/><br/>
        <p class="title"><img alt="icono usuario" src="../assets/ico/logoTicketWhite.png" width="80">
        <span class="tituloLogo"> TicketService</span></p><br/><br/>
      </div>

      <div class="col-xs-12 col-md-6 col-lg-12">
        <br/><br/>
        <div class="formulario">
        <span class="tituloFormulario"><h1><img alt="Vue logo" src="../assets/ico/userBlack.png" width="70"> Login</h1><br/></span>
        <span class="item"><form>
            <input type="text" placeholder="Email"/><br/><br/>
            <input type="text" placeholder="Password"/><br/><br/>
            <router-link to="/dashBoard_admin"><button class="btn btn-dark">Login</button></router-link>
          </form></span>
        
          
        </div>
          <br/>
      </div>
      
    </div><!-- fin de row -->
  </div>
</template>

<script setup>
// @ is an alias to /src
//import { defineEmits } from 'vue'
//import HelloWorld from '@/components/HelloWorld.vue'
//const emit = defineEmits(['change', 'delete']);

</script>

<script>
    export default {
        name:'Login-View'
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

.container {
  display: flex;
  justify-content: center;
  background-color: black;
  height: 818px;

}

input {
  border-radius: 5px;
  border-color: rgb(255, 255, 255);
}
.tituloLogo {
  font-weight: 700;
}

.formulario {
  display:flex;
  flex-direction:column;
  background-color: white;
  border-radius: 10px;
  height: 280px;
  align-self: center;
  margin-top: -190px;
  box-shadow: 0px 10px 13px -7px #ffffff, 5px 15px 15px 15px rgba(255, 255, 255, 0);
  }
  .item1 {
    align-self: center;
  }
  .item2 {
    align-self: center;
  }

.title {
  font-weight: bold;
  line-height: 3.5;
  color: #FFF;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  }

  img {
    margin-top: 10px;
  }
</style>