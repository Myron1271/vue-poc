<script setup>

</script>

<template>
  <main>
      <RouterLink to="/soundboard">
        <button class="buttonHomeLinks">SoundBoard Pagina</button>
      </RouterLink>
      <RouterLink to="/locatiecheck">
        <button class="buttonHomeLinks">Locatie Check Pagina</button>
      </RouterLink>
  </main>
</template>

<style>

  .buttonHomeLinks {
    font-family: Verdana, sans-serif;
    font-size: 20px;
    margin: 10px;
    border-radius: 20px;
    height: 200px;
    width: 300px;
    box-shadow: 0 2px 10px #000;
    border: none;
    background-color: yellow;
    color: black;
    font-weight: bold;
  }

  .buttonHomeLinks:active {
    transform: translateY(2px);
    box-shadow: 0 2px 4px black;
    transition: all 0.1s ease;
  }

  .buttonHomeLinks a {
    text-decoration: none;
    color: black;
  }

</style>
