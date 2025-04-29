<template>
    <div class="contenedor">
      <div class="card-deck">
        <div class="card card-plan" v-for="plan in plan" :key="plan.id">
          <img class="card-img-top plan-img" :src="require(`../assets/img/${plan.img}`)" :alt="plan.alt" />
          <div class="card-body">
            <h3 class="card-title plan-titulo">{{ plan.titulo }}</h3>
            <p class="card-text plan-text">{{ plan.texto }}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'PlanView',
  data: function () {
    return {
      plan: [
        {
          id: 1,
          titulo: "Plan de alimentación generalizado",
          img: "id1.png",
          alt: "Foto de plan de alimentación",
          texto: "Ideal si querés comenzar un cambio de hábitos, tips básicos, consejos, lista de compras, entre otras cosas más que te ayudarán a comenzar este cambio, para luego ir en busca de tus objetivos, si así lo deseas, con un plan personalizado. No se realiza videollamada, ya que no es un plan personalizado."
        },
        {
          id: 2,
          titulo: "Menu semanal por un mes",
          img: "id2.png",
          alt: "Foto de plan de alimentación",
          texto: "Menú semanal por un mes, para poder variar tu alimentación siendo completa y equilibrada, fácil y práctica. Cuenta con todos los grupos de alimentos y algunos reemplazos para aquellas personas que no consuman carnes."
        },
        {
          id: 3,
          titulo: "Plan de alimentación personalizado",
          img: "id3.png",
          alt: "Foto de plan de alimentación",
          texto: "Se coordina una consulta por videollamada, nos conocemos y planteamos objetivos. Luego se recibe la planilla de control (con mediciones y peso) registro de 24 horas para completar todo lo que vas consumiendo. A la semana de la consulta se brinda el plan de alimentación acorde a tu requerimiento y objetivo, gustos y preferencias."
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
.contenedor {
  display: flex;
  justify-content: center;
	background-color: rgba(46, 46, 46, 0.7);
  box-shadow: 2px 2px 4px black;
	border-radius: 10px;
  padding: 15px;
  max-width: fit-content;
  margin: auto;
}

.card-deck {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
}

.card-plan {
  background-color: rgba(20, 20, 20, 0.6);
  border: 2px solid aliceblue;
  box-shadow: 2px 2px 4px black;
  margin-top: 10px;
  width: 300px;
}

.card-title{
	color: rgb(88, 221, 88);
	text-align: center;
	font-size: 20pt;
	font-family: 'Montserrat', sans-serif;
	text-shadow: 2px 2px 4px black;
}

.card-plan p{
  color: aliceblue;
}

.card-plan img {
  width: 100%;
  height: 250px;
  filter: grayscale(100%);
}

.card-plan img:hover {
  filter: grayscale(0%);
}

</style>
