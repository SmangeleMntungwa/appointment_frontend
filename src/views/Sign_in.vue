<template>
  <section id="Login">
    <div
      class="container"
      aria-hidden="false"
      aria-label="Dialog open. Sign in to start taking action"
    >
      <h3>Admin Login</h3>
      <div class="row">
        <div class="col-12">
          <form @submit.prevent="login">
            <div id="login-fields">
              <div class="mb-4">
                <div class="">
                  <input
                    type="email"
                    aria-label="Email Address"
                    v-model="email"
                    required
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div class="mb-4">
                <input
                  v-model="password"
                  type="password"
                  required
                  aria-label="Password"
                  placeholder="Password"
                />
              </div>
              <button
                class="btn btn-primary w-100 mb-2 text-uppercase"
                type="submit"
                aria-label="Sign In"
              >
                <span class=""><span class="">Sign In</span></span>
              </button>
            </div>
            <fieldset class="text-left"></fieldset>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      fetch("https://smangele-api.herokuapp.com/Patients", {
        method: "PATCH",
        body: JSON.stringify({
          Patient_email: this.Patient_email,
          Patient_password: this.Patient_password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.jwt) {
            localStorage.setItem("jwt", json.jwt);
          }
          if (localStorage.getItem("jwt")) {
            location.reload();
          } else {
            alert("Incorrect Credentials");
          }
        })
        .catch((err) => {
          alert(err);
        });
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
          let isadmin = json.isadmin;
          if (isadmin == true) {
            this.$router.push({ name: "Admin" });
          }
          if (isadmin == false) {
            alert("You are Not ADMIN");
            this.$router.push({ name: "Home" });
          }
        })
        .catch((err) => {
          alert(err);
        });
    }
  },
};
</script>

<style scoped>
.container {
  display: grid;
  width: 100%;
  min-width: 100%;
  justify-content: center;
  align-content: center;
  text-align: left;
  min-height: 100%;
  margin: auto;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(247, 247, 247, 0.97);
  box-shadow: none;
  border: 0;
  overflow-y: auto;
}
.horizontal-rule-with-text {
  display: grid;
  justify-content: center;
}
form {
  margin: 0 2px;
}
/* loader */
/* 
.half-circle-spinner, .half-circle-spinner * {
      box-sizing: border-box;
    }
    .half-circle-spinner {
      z-index: 2627;
      width: 60px;
      height: 60px;
      border-radius: 100%;
      position: fixed;
      top:45%;
      left: 40%;
    }
    .half-circle-spinner .circle {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 100%;
      border: calc(60px / 10) solid transparent;
    }
    .half-circle-spinner .circle.circle-1 {
      border-top-color: white;
      animation: half-circle-spinner-animation 1s infinite;
    }
    .half-circle-spinner .circle.circle-2 {
      border-bottom-color: #1d92ff;
      animation: half-circle-spinner-animation 1s infinite alternate;
    }
    @keyframes half-circle-spinner-animation {
      0% {
        transform: rotate(0deg);
      }
      100%{
        transform: rotate(360deg);
      }
    } */
</style>