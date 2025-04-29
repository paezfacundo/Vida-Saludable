<template>
    <div class="recetario">
      <div v-if="i === '1'" class="left">
            <div class="animate__animated animate__fadeIn">
                <h2>Recetario General</h2>
            </div>
                <img src="@/assets/img/recetario-general.jpg"/>
                <div class="texto">
                    <p>El <strong>Recetario General</strong> es ideal para aquellos que desean llevar un estilo de vida activo y mantener una alimentación equilibrada y saludable. Con una amplia variedad de recetas sencillas y rápidas de hacer, sin dejar de ser ricas y nutritivas.</p>
                    <p>Fecha de Publicación: {{e}} -- {{ $route.params.publicacion }}</p>
                </div>
            </div>
            <div v-else-if="i === '2'" class="left">
                <div class="animate__animated animate__fadeIn">
                    <h2>Recetario Infantil</h2>
                </div>
                <img src="@/assets/img/recetario-infantil.jpg" alt="Recetario Infantil"/>
                <div class="texto">
                    <p>El <strong>Recetario Infantil</strong> es la solución perfecta para padres y cuidadores que quieran fomentar la alimentación saludable en los mas chicos.</p>
                    <p>Fecha de Publicación: {{e}} -- {{ $route.params.publicacion }}</p>
                </div>
            </div>
            <div v-else class="left">
                <div class="animate__animated animate__fadeIn">
                    <h2>Recetario Vegetariano</h2>
                </div>
                <img src="@/assets/img/recetario-vegetariano.jpg" alt="Recetario Vegetariano"/>
                <div class="texto">
                    <p>El <strong>Recetario Vegetariano</strong> está diseñado para quienes deseen tener ideas y explorar la cocina vegetariana, ofreciendo variedad de recetas deliciosas y equilibradas que son adecuadas para una dieta vegetariana y para aquellos que buscan incorporar más vegetales en su dieta. Desde platos clásicos reinventados hasta creaciones innovadoras, este recetario te inspirará a descubrir la riqueza de los ingredientes naturales.</p>
                    <p>Fecha de Publicación: {{e}} -- {{ $route.params.publicacion }}</p>
                </div>
            </div>
            <button @click="$router.go(-1)" class="btn btn-primary">Volver</button>
    </div>
</template>

<script>
export default {
  name: 'RecetarioView',
  data() {
    return {
      i: '',
      e: '',
    };
  },
  mounted() {
    this.recuperarRecetario();
  },
  methods: {
    recuperarRecetario() {
      this.i = this.$route.params.id;
      this.e = this.$route.params.publicacion;
    },
  },
};
</script>

<style>
* {
    box-sizing: border-box;
}

.recetario{
    background-color: rgba(27, 27, 27, 0.7);
	margin: 15px auto;
	box-shadow: 2px 2px 4px black;
	border-radius: 10px;
    padding: 10px;
    text-align: center;
}

.left img{
    float:left;
    shape-outside: circle(50%);
    border-radius: 50%;
    margin: 5%;
    width: 50%;
}

.recetario h2{
	font-size: 24pt !important;
    margin-top: 10px;
    color: rgb(88, 221, 88);
    font-family: 'Roboto', sans-serif;
    text-shadow: 2px 2px 4px black;
}

.texto{
    text-align: left;
    font-size: 14pt;
    padding-right: 5%;
    padding-top: 5%;
    text-shadow: 2px 2px 4px black;
}

.left {
    overflow: auto;
}

</style> 