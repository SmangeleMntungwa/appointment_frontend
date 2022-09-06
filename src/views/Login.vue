<template>
  <section id="Login">
    <div
      class="container"
      aria-hidden="false"
      aria-label="Dialog open. Sign in to start taking action"
    >
      <div class="row">
        <div class="col-12">
          <p>
            Welcome back!
            <br />
            Sign in to start taking action.
          </p>
          <p>
            Not a ME Citizen yet?
            <button
              data-bs-toggle="modal"
              data-bs-target="#registerModal"
              aria-label="Not a Global Citizen yet? Sign up."
            >
              Sign up
            </button>
          </p>
          <div class="horizontal-rule-with-text">
            <hr />
            <span>or</span>
            <hr />
          </div>
        </div>
      </div>
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
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
        Close
      </button>
      <!-- <div v-if="loading" >
 <div class="half-circle-spinner">
  <div class="circle circle-1"></div>
  <div class="circle circle-2"></div>
</div>
   </div> -->
    </div>
  </section>
  <!-- Modal -->

  <!-- Modal -->
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
      fetch("https://mullins-marine-api.herokuapp.com/users", {
        method: "PATCH",
        body: JSON.stringify({
          email: this.email,
          password: this.password,
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
};
</script>

<style scoped>
.container {
  display: grid;
  width: 100%;
  min-width: 50%;
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
