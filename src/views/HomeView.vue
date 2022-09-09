<template>
  <header>
    <div class="landing-left">
      <h1>Hello_______</h1>
      <h2>I am sive</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum rem
        blanditiis et doloribus suscipit. Inventore sit quos ratione temporibus.
        At.
      </p>
    </div>
    <div class="landing-right">
      <img src="https://picsum.photos/200" alt="pic" />
    </div>
  </header>
</template>
<script>
export default {
  
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header {
  min-height: 100vh;
  background: cornflowerblue;
  display: flex;
  align-items: center;
  padding: 10%;
  gap: 30px;
}

.landing-left,
.landing-right {
  width: 50%;
}

.landing-right {
  background: black;
  border-radius: 50%;
  width: fit-content;
  padding: 20px;
  aspect-ratio: 1;
  display: grid;
  place-content: center;
}

.landing-right img {
  border-radius: 50%;
}
</style>