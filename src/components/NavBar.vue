<template>

<div class="header" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop">
  <div class="flex-container">
   <div class="flex-items"></div>
   <div class="flex-items"><span class="profile-image img"><img src="../assets/img/Profile.jpg" width="35"/></span>
    <img src="../assets/ico/exitWhite.png" width="25"/>  </div>
</div>
   

</div>

<!-- <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop">Enable backdrop (default)</button> -->
<br/>

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBackdropLabel">Ticket Service</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>DashBoard</p>
    <p>Tickets</p>
    <p>Users</p>
    <p><router-link to="/">Login</router-link></p>
  </div>
</div>
<div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdroped with scrolling</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </div>
</div>
</template>

<script setup>

</script>
<script>
    export default {
        name:'NavBar-component'
    }
</script>
<style scoped>
.header{
    width: 100%;
    height: 60px;
    background-color: rgb(0, 0, 0);
}
.offcanvas-body{
    width: 50%;
}
.offcanvas {
    width: 50%;
}

.profile-image img {
    border-radius: 50%;
    border: 2px solid #0044ff;
    margin: 5px 25px 5px 5px;
}

.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: normal;
  align-content: normal;
}

.flex-items:nth-child(1) {
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
}

.flex-items:nth-child(2) {
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
}
</style>