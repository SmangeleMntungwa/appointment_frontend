<template>
  <section class="Home">
    <div class="image">
      <img src="https://i.postimg.cc/4NMm92sm/trees-sunset.webp" />

      <h1>Vumilanga's House Of Healing</h1>
      <router-link to="All_items"
        ><button class="button">Therapies</button></router-link
      >
      <router-link to="Booking_form"
        ><button class="button">Book</button></router-link
      >
      <h3 class="first-txt">123</h3>

      <h3 class="second-txt">456</h3>
    </div>
  </section>
</template>

<script>
// import Login from "../views/Login.vue";
export default {
  // name: "Home",
  // components: {
  //   Login,
  // },
  // mounted() {
  //   $(".Home").ripples({
  //     resolution: 200,
  //     perturbance: 0.04,
  //   });
  // },
};
</script>

<style scoped>
.gfg {
  margin: 3%;
  position: relative;
}

.first-txt {
  position: absolute;
  top: 17px;
  left: 50px;
}

.second-txt {
  position: absolute;
  bottom: 20px;
  left: 10px;
}

.button {
  margin-left: 30px;
  text-decoration: none;
  background-color: #003459;
  color: white;
  border-radius: 300px;
  border: none;
  width: 120px;
  height: 40px;
}
.button:hover {
  transform: scale(1.1);
}
.container {
  color: white;
  position: absolute;
  text-align: center;
  top: 42%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
.Home {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  position: fixed;
}
#myVideo {
  z-index: -1000;
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}
</style>