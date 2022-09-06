<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/pic.jpg" />
    <h1></h1>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
img {
  height: inherit;
  width: 100px;
  animation: myAnim 2s ease 0s 1 normal forwards;
}
@keyframes myAnim {
  0% {
    transform: scale3d(1, 1, 1);
  }
  30% {
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
}
</style>