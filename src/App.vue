<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <div class="animate__animated animate__flash">
          <router-link class="navbar-brand" to="/">Vida Saludable</router-link>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/recetas">Recetas</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/menu">Tu Menú</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view />
  </div>
</template>


<script>
  
export default {
  name: 'App',
  components: {
  
}
  
}
</script>
<style>

body{
	background: url("../src/assets/img/fondo.jpg");
	background-attachment: fixed;
	background-size: cover;
  max-width: 1200px;
	margin: 15px auto;
  color: aliceblue;
  font-family: 'Montserrat', sans-serif;
}

.bg-dark {
  background-color: rgba(0, 0, 0, 0.6) !important;
  box-shadow: 2px 2px 4px black;
	border-radius: 10px;
}

.navbar-brand {
  font-size: 20pt;
  font-weight: bold;
  text-shadow: 2px 2px 4px black;
  animation: colorChange 3s infinite;
  font-family: 'Montserrat', sans-serif;
}

@keyframes colorChange {
  0% {color: rgb(46, 190, 46);}
  50% {color: rgb(0, 143, 12);}
  100% {color: rgb(79, 223, 103);}
}

.navbar-nav {
  margin-left: auto;
}

.nav-link {
  font-size: 18pt;
  text-shadow: 2px 2px 4px black;
}

h2{
  font-size: 40px;
}

</style>