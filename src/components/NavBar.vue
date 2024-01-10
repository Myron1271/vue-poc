<script>
  export default {
    name: "NavBar"
  }
</script>

<template>
  <div class="navBar">
    <div class="navBarContent">
      <RouterLink to="/soundboard">SoundBoard</RouterLink>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/locatiecheck">LocatieCheck</RouterLink>
    </div>
  </div>
</template>


<style scoped>

  .navBar {
    height: 55px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.80);
  }

  .navBarContent {
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    width: 100%;
    font-weight: 600;
    text-transform: uppercase;
  }

  .navBarContent a {
    font-family: Verdana, 'sans-serif';
    color: white;
    text-decoration: none;
  }

  .navBarContent a.router-link-active{
    scale: 1.1;
    text-decoration: underline 3px white;
    text-underline-offset: 4px;
  }

</style>