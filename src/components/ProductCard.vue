<template>
  <div class="card">
    <div class="card-item"><img :src="One_therapy.image" /></div>
    <div class="card-item">{{ One_therapy.title }}</div>

    <div class="card-item">R{{ One_therapy.description }}</div>
  </div>
</template>
<script>
export default {
  props: ["One_therapy"],
};
</script>
<style scoped>
.card {
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  margin: auto;
  padding: 1rem, 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.card-item {
  width: 90%;
}
.card-item img {
  width: 200px;
  height: 200px;
}
.card:hover {
  box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
  transform: translate3d(0px, -1px, 0px);
}
</style>