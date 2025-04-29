<template>
  <div>
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="@/assets/img/banner1.jpg" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="@/assets/img/banner2.jpg" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="@/assets/img/banner3.jpg" alt="Third slide">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="animate__animated animate__bounce">
    <h1 class="carousel-title">{{ titulo }}</h1>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HomeBanner',
  data() {
    return {
      titulo: "Vida Saludable",
    };
  },
};
</script>

<style scoped>
.carousel-title {
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

.carousel-item img {
  width: 100%;
  max-height: 400px;
  margin: 15px auto;
  object-fit: cover;
  box-shadow: 2px 2px 4px black;
  border-radius: 10px;
}
</style>
