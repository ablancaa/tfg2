<template>
  <div class="hello">
    <h1>{{ props.msg }}</h1>
    <p>
     
    </p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  msg: String
})
</script>

<script>
export default {
  name: 'HelloWorld',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 4px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
