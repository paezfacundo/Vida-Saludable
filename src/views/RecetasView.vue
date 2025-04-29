<template>
    <div class="recetas">
      <div class="animate__animated animate__zoomIn">
        <h1>Recetas</h1>
      </div>
        <recetas-component/>
    </div>
</template>

<script>

import RecetasComponent from '@/components/RecetasComponent.vue'

    export default {
      name: 'RecetasView',  
      components: {
        RecetasComponent
      }
    }
</script>

<style>
h1{
	text-align: center;
	text-shadow: 2px 2px 4px black;
	animation: colorChange 3s infinite;
	font-family: 'Montserrat', sans-serif;
	font-size: 40pt;
}

@keyframes colorChange {
	0% {color: rgb(46, 190, 46);}
	50% {color: rgb(0, 143, 12);}
	100% {color: rgb(79, 223, 103);}
  }

.recetas {
	background-color: rgba(27, 27, 27, 0.7);
	margin: 15px auto;
	box-shadow: 2px 2px 4px black;
	border-radius: 10px;
  padding: 10px;
  text-align: center;
}

</style>