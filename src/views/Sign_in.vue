<template>
  <!--Appointment Section-->

  <section class="appointment-section">
    <div class="container">
      <div class="sec-title">
        <h2>Sign in</h2>
      </div>
      <div class="row clearfix">
        <!--Form Column-->
        <div class="form-column col-md-8 col-sm-12 col-xs-12">
          <div class="inner-column">
            <!-- Default Form -->
            <div class="default-form">
              <!--Contact Form-->
              <form @submit.prevent="Sign_in">
                <div class="row clearfix">
                  <div class="column col-md-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <input
                        type="email"
                        name="email"
                        required v-model= "email"
                        placeholder="Email"
                        
                      />
                    </div>
                  </div>
                  <div class="column col-md-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <input
                        type="text"
                        name="text"
                        required v-model= "password"
                        placeholder="Password"
                      
                      />
                    </div>
                  </div>

                  <div
                    class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group"
                  >
                    <button
                      class="theme-btn appointment-btn"
                      type="submit"
                      value="login"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <!--End Default Form -->
          </div>
        </div>
      
        <!--Form Column-->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped>
li,
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.sec-title {
  position: relative;
  padding-bottom: 40px;
}
.sec-title .title {
  position: relative;
  color: #0a0b0b;
  font-size: 18px;
  font-weight: 700;
  padding-right: 50px;
  margin-bottom: 15px;
  display: inline-block;
  text-transform: capitalize;
}
.sec-title .title:before {
  position: absolute;
  content: "";
  right: 0;
  bottom: 7px;
  width: 40px;
  height: 1px;
  background-color: #bbb;
}
.sec-title h2 {
  position: relative;
  color: #252525;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.5em;
  display: block;
}
.sec-title.light h2 {
  color: #fff;
}
.appointment-section {
  position: relative;
  padding: 110px 0 80px;
}
.appointment-section .form-column {
  position: relative;
  margin-bottom: 40px;
}
.default-form {
  position: relative;
}
.default-form .form-group {
  position: relative;
  margin-bottom: 20px;
}
.default-form .form-group i {
  position: absolute;
  right: 15px;
  top: 15px;
  color: #070808;
  font-size: 18px;
}
.default-form .form-group input[type="text"],
.default-form .form-group input[type="tel"],
.default-form .form-group input[type="email"],
.default-form .form-group select {
  position: relative;
  display: block;
  width: 100%;
  line-height: 28px;
  padding: 10px 20px;
  color: #000;
  height: 50px;
  font-size: 13px;
  background: #fff;
  border: 1px solid #d7d7d7;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.default-form .form-group input[type="text"]:focus,
.default-form .form-group input[type="tel"]:focus,
.default-form .form-group input[type="email"]:focus,
.default-form .form-group textarea:focus {
  border-color: #070707;
}
.default-form .form-group textarea {
  position: relative;
  display: block;
  width: 100%;
  line-height: 22px;
  padding: 15px 20px;
  color: #797979;
  height: 120px;
  background: #fff;
  resize: none;
  font-size: 14px;
  border: 1px solid #d7d7d7;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.default-form .form-group .appointment-btn {
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
.default-form .form-group .btn-detail {
  position: relative;
  color: #777;
  font-size: 15px;
  margin-left: 35px;
  display: inline-block;
}
.appointment-section .schedule-column {
  position: relative;
}
.appointment-section .schedule-column .inner-outer {
  position: relative;
  padding-left: 20px;
  padding-bottom: 20px;
}
.appointment-section .schedule-column .inner-outer:before {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  width: 347px;
  height: 268px;
  background: url(https://i.ibb.co/gjZ1NFM/pattern-Appoinment.png) no-repeat;
}
.appointment-section .schedule-column .inner-column {
  position: relative;
  padding: 25px 30px;
  border: 2px solid #090909;
  background-color: #fff;
}
.appointment-section .schedule-column h2 {
  position: relative;
  color: #252525;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.4em;
  margin-bottom: 15px;
}
.appointment-section .schedule-column .time-list {
  position: relative;
}
.appointment-section .schedule-column .time-list li {
  position: relative;
  color: #777;
  font-size: 15px;
  margin-bottom: 12px;
}
.appointment-section .schedule-column .time-list li:last-child {
  margin-bottom: 0;
}
.appointment-section .schedule-column .time-list li strong {
  color: #222;
  font-weight: 700;
}
.appointment-section .schedule-column .time-list .closed {
  position: relative;
  color: #050707;
}
</style>