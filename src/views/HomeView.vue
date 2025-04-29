<template>
  <div class="home">
    <home-banner/>
    <p class="descripcion">Las mejores recetas para llevar una vida saludable</p>
      
      <recetario-component/>
      <plan-component/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeBanner from '@/components/HomeBanner.vue'
import RecetarioComponent from '@/components/RecetarioComponent.vue'
import PlanComponent from '@/components/PlanComponent.vue'

export default {
  name: 'HomeView',
  components: {
    HomeBanner,
    RecetarioComponent,
    PlanComponent,
}
}
</script>

<style scoped>
.home{
	background-color: rgba(27, 27, 27, 0.7);
	margin: 15px auto;
	box-shadow: 2px 2px 4px black;
	border-radius: 10px;
  padding: 10px;
  text-align: center;
}

.descripcion{
	color: rgb(88, 221, 88);
	text-align: center;
	font-size: 18pt;
	font-family: 'Roboto', sans-serif;
	text-shadow: 2px 2px 4px black;
}
</style>