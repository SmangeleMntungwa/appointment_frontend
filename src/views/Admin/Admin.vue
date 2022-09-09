<template>
  <section>
    <div class="container" v-if="this.isadmin == true">
      <h1>Admin Dashboard</h1>
      <div class="row">
        <div class="col">
          <h2>All users:</h2>
        </div>
      </div>
      <div class="row">
        <div
          class="col-12 col-md-4 col-lg-4"
          v-for="user of users"
          :key="user._id"
        >
          <p>
            <span>Is Admin: {{ user.isadmin }}</span>
            <br />
            <span>name :</span> {{ user.fullname }}
            <br />
            <span>email :</span> {{ user.email }}
            <br />
            <span>contact :</span> {{ user.phone_number }}
            <br />
            <span>Street Address :</span> {{ user.street }}
            <br />
            <span>City :</span> {{ user.city }}
            <br />
            <span>Zipcode :</span> {{ user.zipcode }}
            <br />
            <span>Country :</span> {{ user.country }}
            <br />
          </p>
        </div>
      </div>
      <div class="row">
        <h1>All Products</h1>
        <!-- Button trigger modal -->
        <button
          @click="isModalVisible = true"
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Create Product
        </button>

        <!-- Modal -->

        <div class="row">
          <div class="col-4">
            <select
              v-model="selected"
              class="form-select"
              aria-label="Default select example"
            >
              <option selected value="">Display All</option>
              <option value="mask">Masks</option>
              <option value="wetsuits">Wetsuits</option>
              <option value="camera">Camera</option>
            </select>
          </div>
          <div class="col-4">
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="text"
                v-model="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
          <div class="col-4"></div>
        </div>
        <div
          class="col-12 col-md-4 col-lg-4"
          v-for="products of filterProducts"
          :key="products._id"
        >
          <div class="card py-4 px-lg-5 h-100">
            <div class="card-body d-flex flex-column">
              <div class="text-center">
                <img
                  :src="products.img"
                  class="img-fluid mb-5"
                  alt="Websearch"
                />
              </div>

              <h2 class="card-title mb-4 text-center">{{ products.title }}</h2>
              <div class="pricing">
                <ul class="list-unstyled">
                  <li class="mb-3">
                    <span class="small ms-3">{{ products.description }}</span>
                  </li>
                </ul>
              </div>
              <div class="text-center mt-auto mb-4">
                <span class="fw-bold fs-2">R{{ products.price }}</span>
              </div>
              <div class="text-center">
                <div>
                  <router-link
                    class="btn btn-warning"
                    :to="{ name: 'EditProduct', params: { id: products._id } }"
                  >
                    Edit product
                  </router-link>
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="deleteProduct(products._id)"
                  >
                    Delete product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      v-if="isModalVisible"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <create-product />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CreateProduct from "../../components/CreateProduct.vue";
export default {
  data() {
    return {
      isModalVisible: false,
      isadmin: false,
      users: null,
      product: null,
      search: "",
      selected: "",
    };
  },
  components: {
    CreateProduct,
  },
  methods: {
    deleteProduct(id) {
      if (confirm("Do you really want to delete this product?")) {
        fetch("https://smangele-api.herokuapp.com/therapy/" + id, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        })
          .then((response) => response.json())
          .then((json) => {
            alert("DELETED PRODUCT");
            location.reload();
          })
          .catch((err) => {
            alert(err);
          });
      }
    },
  },
  mounted() {
    if (localStorage.getItem("jwt")) {
      fetch("https://smangele-api.herokuapp.com/Patients/patient/", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          this.isadmin = json.isadmin;
          if (this.isadmin == true) {
            fetch("https://smangele-api.herokuapp.com/therapy", {
              method: "GET",
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            })
              .then((response) => response.json())
              .then((json) => {
                this.therapy = json;
              })
              .catch((err) => {
                alert(err);
                console.log(err);
              });
            fetch("https://smangele-api.herokuapp.com/Patients", {
              method: "GET",
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            })
              .then((response) => response.json())
              .then((json) => {
                this.Patients = json;
              })
              .catch((err) => {
                alert(err);
              });
          }
          if (this.isadmin == false) {
            alert("You are Not ADMIN");
            this.$router.push({ name: "Home" });
          }
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      alert("Please Login");
      this.$router.push({ name: "AdminLogin" });
    }
  },
  computed: {
    filterAppointments: function () {
      if (this.Appointments) {
        let filtered = this.Appointments;
        if (this.selected == "") {
          filtered = filtered.filter((Appointments) => {
            return Appointments.Therapy_type.match(this.selected);
          });
          if (this.search) {
            filtered = filtered.filter((Appointments) => {
              return Appointments.Date_time.match(this.search);
            });
          }
          return filtered;
        }
        if (this.selected) {
          filtered = filtered.filter((product) => {
            return product.category.match(this.selected);
          });
          if (this.search) {
            filtered = filtered.filter((product) => {
              return product.title.match(this.search);
            });
          }
          return filtered;
        }
      }
    },
  },
};
</script>

<style scoped>

</style>
