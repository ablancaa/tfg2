<template>
    <div class="contenedor">
         <div class="row">
           <div class="co-xs-12"> 
           <label for="myInput" class="label">
             <span class="label-title">Búsqueda</span>
             <input id="myInput" class="input" name="text" placeholder="Escribe Algo..." type="text" v-model="search">   
         </label>
       </div>
     </div>
     </div>
</template>

<script setup>
import { defineEmits, watch, ref } from "vue";
let search = ref('');
const emit = defineEmits(["search"]);

//Observador de los que se ecribe en el input
 watch(search, async (newValue) => {
     emit("search", newValue);
 });
</script>

<style  scoped>
.contenedor{
 margin-top: 15px;
}

.label {
display: flex;
--border: rgba(66, 66, 66, 0.733);
--bgLabel: rgba(120,120,120,1);
--bgInput: rgba(255,255,255,1);
--color-light: rgb(38, 38, 38); /*rgb(98, 0, 255); */
--color-light-a: rgb(5, 5, 5);
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: min-content min-content;
background: var(--bgLabel);
position: relative;
font-size: .65rem;
transition: all .3s ease-out;
margin-top: 10px;
border-radius: 12px;
}

.label > .label-title {

border: 1px solid var(--color-light);
color: var(--color-light);
box-shadow: 0 2px 2px rgba(120,120,120,.25);
padding: .25em .5em;
background-color: var(--bgInput);
grid-column: 1/span 1;
grid-row: 1/span 1;
position: relative;
border-radius: 4px;
translate: 10px -10px;
transition: all .5s ease-out .5s;
z-index: 10;
}

.label:focus .input,
.label:focus-within .input {

background-color: var(--bgInput);
padding: 1em;
color: var(--color-light);
border: 2px solid var(--color-light);
outline: 2px solid var(--color-light);
outline-offset: -2px;
border-radius: 12px;
box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25), 0 -5px 20px rgba(98, 0, 255,.1);
scale: 1.00;
transition: all .5s cubic-bezier(0,1.46,1,1.62) .3s;
}

.label:focus,
.label:focus-within .label-title {
translate: 10px -20px;
border-radius: 4px 4px 0 0;
z-index: 0;
transition: all .3s cubic-bezier(0,1.46,1,1.62);
}

.input {
appearance: none;
border-top: 2px solid transparent;
border-right: 2px solid transparent;
border-bottom: 2px solid var(--color-light);
border-left: 2px solid transparent;
background-color: var(--bgInput);
caret-color: var(--color-light);
min-width: 150px;
padding: 1.25em 1em .25em;
outline: 0px solid var(--color-light);
grid-column: 1/-1;
grid-row: 1 / -1;
position: relative;
transition: all .3s cubic-bezier(.5,.6,.5,.62);
z-index: 0;
}




.input, 
.input::placeholder {
color: var(--color-light-a); 
font-size: 14px;
}
.inpu2, 
.input2::placeholder {
color: var(--color-light-a); 

}

.clear:focus {
 margin-top: 9px;
 margin-left: 93%;
 width: 5rem;
 position:relative;

}
</style>