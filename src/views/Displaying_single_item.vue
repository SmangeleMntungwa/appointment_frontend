<template>
  <div class="cards">
    <router-link :to="{ name: 'PropertyDetails', params: { id: property.id } }">
      <h2>{{ property.title }}</h2>
      <img :src="property.img" class="card-img-top" alt="..." />
      <p>{{ property.Area }}</p>
      <p>{{ property.bedrooms }}</p>
      <p .class="price">{{ property.price }}</p>
    </router-link>
  </div>
</template>
<script>
export default {
  props: ["property"],
};
</script>
<style scoped>
h2 {
  color: white;
}
p {
  color: silver;
  font-size: 20px;
}
.cards {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: San-Francisco;
  margin: 30px;
  height: 440px;
  width: 300px;
  background-color: #17141d;
  border-radius: 10px;
  box-shadow: -1rem 0 3rem #000;
  transition: 0.4s ease-out;
  position: relative;
  left: 0px;
}
.cards:hover {
  box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
  transform: translate3d(0px, -1px, 0px);
}
img {
  width: 250px;
}
</style>
