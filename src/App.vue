<script setup>
  import { RouterView } from 'vue-router'
  import '../src/assets/base.css';
  import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <header>

    <div class="container">
      <div></div>

      <!--CENTER CONTENT-->
      <div class="center">
        <div class="centerContent">
          <RouterView />
        </div>
      </div>
    <!--Navbar-->
      <NavBar />
    </div>
  </header>


</template>

<style scoped>

</style>
