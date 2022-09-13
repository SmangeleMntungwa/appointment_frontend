<template>
  <div class="content">
    <div>
      <input
        type="text"
        id=""
        v-model="search"
        placeholder="Search"
        class="w-100 my-5 justify-content-center"
      />
    </div>
    <div class="filter">
      <button @click="sortByName">Sort by Name</button>
    </div>
    <div v-if="Therapy">
      <ProductCard
        class="card"
        v-for="one_therapy in Therapy"
        :key="one_therapy.one_therapy_id"
        :one_therapy="one_therapy"
      />
    </div>
    <!-- <div v-else class="spinner-border" role="status">
      <TheLoader />
    </div> -->
  </div>
</template>
<script>
import ProductCard from "../components/ProductCard.vue";

export default {
  data() {
    return {
      Therapy: [],
    };
  },
  computed: {
    Therapy() {
      return this.$store.state.Therapy;
    },
    sortByPrice() {
      return this.$store.state.Therapy?.filter((Therapy) => {
        let isMatch = true;
        if (!Therapy.title?.toLowerCase().includes(this.search.toLowerCase()))
          isMatch = false;
        if (
          this.category !== "all" &&
          one_therapy_id.category !== this.category
        )
          isMatch = false;
        return isMatch;
      });
    },
  },
  mounted() {
    this.$store.dispatch("getBooks");
  },
  computed: {
    books() {
      return this.$store.state.Therapy;
    },
    computed: {
      filterdBooks: function () {
        return this.books.filter((book) => {
          return book.title.match(this.search);
        });
      },
    },
  },
  components: { BookCard },
  mounted() {
    this.$store.dispatch("getBooks");
  },
};
</script>
<style scoped>
.container {
  height: 86vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
  margin: auto;
  font-family: "Times New Roman", Times, serif;
}
.search {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 50%;
}
div {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  align-content: center;
  align-items: stretch;
}
</style>
