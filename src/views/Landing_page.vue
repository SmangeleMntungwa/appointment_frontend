<template>
  <header>
    <h2>Welcome to</h2>
    <h1>VUMILANGA'S</h1>
    <h1>HOUSE OF HEALING</h1>
    
    <router-link to="/Sign_in"
      ><button class="theme-btn appointment-btn" role="button">
        Sign_in
      </button></router-link
    >
  </header>
</template>

<script>
export default {};
</script>
<style scoped>
* {
  padding: 0px;
  margin: 0px;
  font-family: monospace;
}

header {
  height: 100vh;
  background-image: url("https://i.postimg.cc/FsmSDX7z/httpsi-postimg-ccc-CCm9-Kd7-Copy-of-Untitled-Design-2-webp.webp");
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  justify-content: center;
  margin-bottom: 30px;
}
.main {
  width: 90%;
  max-width: 100%;
  margin: 10px 5% 0 5%;
  font-size: 1.4em;
  line-height: 1.4em;
  /*padding: 15px;*/
  background-color: #eee;
  height: 100vh;
}

.main p {
  padding: 10px;
}
#down {
  position: absolute;
  top: 85vh;
  size: 40px;
  padding: 20px;
  font-size: 2.5em;
}

#down:hover {
  cursor: pointer;
  background-color: #eee;
  opacity: 0.8;
}
.appointment-btn {
  position: relative;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  padding: 11px 30px;
  margin-top: 10px;
  display: inline-block;
  background-color: #080808;
  border: 1px solid #050a0b;
  text-transform: uppercase;
  color: #fff;
}
</style>