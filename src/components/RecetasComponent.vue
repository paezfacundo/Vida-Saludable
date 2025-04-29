<template>
    <div class="contrecet">
      <div class="card mb-3">
        <div class="card-body">
          <form>
            <div class="mb-3">
              <input type="search" v-model="buscar" class="form-control" placeholder="Buscar" />
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <button v-on:click="ascendente = !ascendente; ordenarPor = ''" :class="ascendente ? 'btn btn-primary' : 'btn btn-primary'">
                <span v-if="ascendente">Ordenar por: A - Z</span>
                <span v-else>Ordenar por: Z - A</span>
              </button>
              <button v-on:click="ascendente = !ascendente; ordenarPor = 'lanzamiento'" class="btn btn-primary">
                <span v-if="ascendente">Ordenar por: Mas Reciente</span>
                <span v-else>Ordenar por: Mas Antiguo</span>
              </button>
            </div>
          </form>
        </div>
      </div>
  
      <div class="animate__animated animate__fadeInUp">
      <div class="row row-cols-1 row-cols-md-3">
        <div v-for="item in items" :key="item.id" class="col mb-4">
            <div class="card h-100">
              <img :src="require('@/assets/img/' + item.img)" :alt="item.nombre" class="card-img-top">
              <div class="card-body">
                <h2 class="card-title">{{ item.nombre }}</h2>
                <p class="card-text">Lanzamiento: {{ item.lanzamiento }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <p>{{ mensaje }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RecetasComponent',
    data() {
      return {
        buscar: '',
        datos: [            {
                id:1,
                nombre:"Berenjenas Rellenas",
                img:"receta-berenjenas.jpg",
                lanzamiento:2014
            },
            {
                id:2,
                nombre:"Pescado al Horno Mediterraneo",
                img:"pescado-receta.jpg",
                lanzamiento: 2018
            },
            {
                id:3,
                nombre:"Croquetas de Pollo",
                img:"croquetas-receta.jpg",
                lanzamiento: 2013     
            },
            {
                id:4,
                nombre:"Ensalada de Fideos",
                img:"fideos-receta.jpg",
                lanzamiento: 2017
            },
            {
                id:5,
                nombre:"Ensalada de Arroz",
                img:"arroz-receta.jpg",
                lanzamiento: 2019},],
        ascendente: true,
        ordenarPor: '',
      };
    },
    computed: {
      items() {
        let items = this.datos.filter((x) => {
          return x.nombre.toLowerCase().includes(this.buscar.toLowerCase());
        });
  
        if (this.ascendente) {
          items = items.sort((a, b) => {
            return a.nombre < b.nombre ? -1 : 1;
          });
        } else {
          items = items.sort((a, b) => {
            return a.nombre > b.nombre ? -1 : 1;
          });
        }
  
        if (this.ordenarPor === 'lanzamiento') {
          items = items.sort((a, b) => (this.ascendente ? a.lanzamiento - b.lanzamiento : b.lanzamiento - a.lanzamiento));
        }
  
        return items;
      },
      mensaje() {
        if (this.items.length === 0) {
          return 'No hay coincidencia';
        }
        return '';
      },
    },
  };
  </script>
  
  <style>
.row h2{
	color: rgb(88, 221, 88) !important;;
	text-align: center;
	font-size: 20pt;
	font-family: 'Roboto', sans-serif;
	text-shadow: 2px 2px 4px black;
}

.card{
	background-color: rgba(20, 20, 20, 0.8);
	border: 2px solid aliceblue;
	box-shadow: 2px 2px 4px black;
}

.card img{
    height: 200px;
}

.card-body p{
    color: aliceblue;
    text-shadow: 2px 2px 4px black;
}

.row{
    justify-content: center;
}

.mb-3{
    width: 60%;
    margin: auto;
}

.btn-primary {
	color: #fff;
	background-color: #006909;
	border-color: #0a3f00;
	margin-bottom: 10px;
  }

.btn-primary:hover {
	color: #fff;
	background-color: #00830b;
	border-color: #0f5a00;
  }
  </style>
  