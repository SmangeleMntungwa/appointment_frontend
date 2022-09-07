<template>
  <form
    class="container rounded bg-white mb-5 text-center"
    @submit.prevent="editProduct"
    v-if="product"
  >
    <div class="row">
      <div class="col-md-12 border-right">
        <div class="">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h4 class="text-right">Edit Product</h4>
          </div>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-md-12">
          <label class="labels">Title</label
          ><input type="text" class="form-control" v-model="title" />
        </div>
        <div class="col-md-12">
          <label class="labels">Category</label
          ><input type="text" class="form-control" v-model="category" />
          <!-- <select class="form-control" name="category" id="category">
              <option value="masks">Masks</option>
              <option value="wetsuits">Wetsuits</option>
              <option value="camera">Camera</option>
          </select> -->
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-12">
          <label class="labels">Description</label
          ><textarea
            class="form-control"
            cols="30"
            rows="10"
            v-model="description"
          ></textarea>
        </div>
        <div class="col-md-12">
          <label class="labels">Price</label
          ><input type="text" class="form-control" v-model="price" />
        </div>

        <div class="col-md-12">
          <label class="labels">Img Link</label
          ><input type="text" class="form-control" v-model="img" />
        </div>
      </div>

      <div class="mt-5 text-center">
        <button class="btn btn-primary profile-button" type="submit">
          Confirm Changes
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      product: null,
      isadmin: false,
      title: null,
      category: null,
      description: null,
      price: null,
      img: null,
    };
  },
  methods: {
    editProduct() {
      if (this.isadmin == true) {
        fetch("https://mullins-marine-api.herokuapp.com/product/" + this.id, {
          method: "PUT",
          body: JSON.stringify({
            title: this.title,
            category: this.category,
            description: this.description,
            price: this.price,
            img: this.img,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        })
          .then((response) => response.json())
          .then((json) => {
            alert("Product Updated");
            return this.$router.push({ name: "Shop" });
          });
      }
    },
  },
  mounted() {
    if (localStorage.getItem("jwt")) {
      fetch("https://mullins-marine-api.herokuapp.com/users/oneuser/", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.isadmin == true) {
            this.isadmin = json.isadmin;
            fetch(
              "https://mullins-marine-api.herokuapp.com/product/" + this.id,
              {
                method: "GET",
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
              }
            )
              .then((response) => response.json())
              .then((json) => {
                this.product = json;
                this.title = json.title;
                this.category = json.category;
                this.description = json.description;
                this.price = json.price;
                this.img = json.img;
              })
              .catch((err) => {
                alert(err);
                console.log(err);
              });
          }
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      alert("not admin");
      return this.$router.push({ name: "Home" });
    }
  },
};
</script>

<style scoped>
.form-control:focus {
  box-shadow: none;
  border-color: #222222;
}
.profile-button {
  background: rgb(0, 0, 0);
  box-shadow: none;
  border: none;
}
.profile-button:hover {
  background: #222222;
}
.profile-button:focus {
  background: #682773;
  box-shadow: none;
}
.profile-button:active {
  background: #682773;
  box-shadow: none;
}
.back:hover {
  color: #682773;
  cursor: pointer;
}
.labels {
  font-size: 11px;
}
.add-experience:hover {
  background: #222222;
  color: #fff;
  cursor: pointer;
  border: solid 1px #111111;
}
</style>
