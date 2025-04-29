<template>
    <div class="detalles">
      <ul class="lista">
        <h2 class="item" v-for="item in recetario" :key="item.id">
          <router-link :to="'/recetario/' + item.id + '/' + item.publicacion">{{ item.titulo }}</router-link>
        </h2>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RecetarioComponent',
    data() {
      return {
        recetario: [
          { id: 1, titulo: 'Recetario General', publicacion: 2022 },
          { id: 2, titulo: 'Recetario Infantil', publicacion: 2023 },
          { id: 3, titulo: 'Recetario Vegetariano', publicacion: 2023 },
        ],
      };
    },
  };
  </script>

<style>
.detalles{
    text-align: center;
}

.lista {
    display: flex;
    list-style: none;
    justify-content: center;
    display: flex;
}

.item{
    padding: 0 0.5em 0.3em 0.5em;
    background-color: rgba(10, 10, 10, 0.4);
    border-bottom: 1px rgb(88, 221, 88) solid;
    margin: 0px 15px 0px 15px;
}

.item a{
    color: rgb(209, 209, 209);
    text-shadow: 2px 2px 4px black;
    font-family: 'Roboto', sans-serif;
    font-size: 20pt;
}

.item:hover{
    background-color: rgba(0, 0, 0, 0.6);
    border-bottom: 1px rgb(50, 126, 50) solid;
}

.item a:hover{
    color: rgb(88, 221, 88);
}

[v-cloak] > * {display: none}


</style>