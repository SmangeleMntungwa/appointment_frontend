<template>
  <section id="contact">
    <div class="contact-box">
      <div class="contact-links">
        <h2>CONTACT</h2>
        <div class="links">
          <div class="link">
            <a
              href="https://www.linkedin.com/in/smangele-mntungwa-b17b921b0/"
              target="_blank"
              ><img
                src="https://i.postimg.cc/m2mg2Hjm/linkedin.png"
                alt="linkedin"
            /></a>
          </div>
          <div class="link">
            <a href="https://github.com/SmangeleMntungwa" target="_blank"
              ><img src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github"
            /></a>
          </div>
          <div class="link">
            <a href="mailto:mangie696@gmail.com"
              ><img src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email"
            /></a>
          </div>
        </div>
      </div>
      <div class="contact-form-wrapper">
        <form
          @submit.prevent="handleSubmit"
          action="https://formspree.io/f/xpznqlyp"
          method="POST"
        >
          <div class="form-item">
            <input type="text" v-model="name" required />
            <label>Name:</label>
          </div>
          <div class="form-item">
            <input type="text" v-model="email" required />
            <label>Email:</label>
          </div>
          <div class="form-item">
            <input type="text" v-model="subject" required />
            <label>Subject:</label>
          </div>
          <div class="form-item">
            <textarea v-model="message" required></textarea>
            <label>Message:</label>
          </div>
          <button class="submit-btn">Send</button>
          <div v-if="loading">
            <div class="half-circle-spinner">
              <div class="circle circle-1"></div>
              <div class="circle circle-2"></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
      loading: false,
    };
  },
  methods: {
    async handleSubmit() {
      this.loading = true;
      try {
        fetch("https://smangele-api.herokuapp.com/contact", {
          method: "POST",
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            subject: this.subject,
            message: this.message,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((json) => {
            this.loading = false;
            (this.name = ""),
              (this.email = ""),
              (this.subject = ""),
              (this.message = "");
          });
      } catch (error) {
        alert(err);
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
/* loader */
.half-circle-spinner,
.half-circle-spinner * {
  box-sizing: border-box;
}
.half-circle-spinner {
  z-index: 2627;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
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
  animation: half-circle-spinner-animation 1s ;
}
.half-circle-spinner .circle.circle-2 {
  border-bottom-color: #1d92ff;
  animation: half-circle-spinner-animation 1s alternate;
}
@keyframes half-circle-spinner-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
#contact {
  background-color: #6a9ac4;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contact-box {
  width: clamp(100px, 90%, 1000px);
  margin: 80px 50px;
  display: flex;
  flex-wrap: wrap;
}
.contact-links,
.contact-form-wrapper {
  width: 50%;
  padding: 8% 5% 10% 5%;
}
.contact-links {
  background-color: white;
  background: radial-gradient(
      circle at 55% 92%,
      #426691 0 12%,
      transparent 12.2%
    ),
    radial-gradient(circle at 94% 72%, #b4c8e0 0 10%, transparent 10.2%),
    radial-gradient(
      circle at 20% max(78%, 350px),
      #263a53 0 7%,
      transparent 7.2%
    ),
    radial-gradient(circle at 0% 0%, #cad2dc 0 40%, transparent 40.2%), #dbe5f2;
  border-radius: 10px 0 0 10px;
}
.contact-form-wrapper {
  background-color: #ffffff8f;
  border-radius: 0 10px 10px 0;
}
@media only screen and (max-width: 800px) {
  .contact-links,
  .contact-form-wrapper {
    width: 100%;
  }
  .contact-links {
    border-radius: 10px 10px 0 0;
  }
  .contact-form-wrapper {
    border-radius: 0 0 10px 10px;
  }
}
@media only screen and (max-width: 400px) {
  .contact-box {
    width: 95%;
    margin: 8% 5%;
  }
}
h2 {
  font-family: "Arimo", sans-serif;
  color: #fff;
  font-size: clamp(30px, 6vw, 60px);
  letter-spacing: 2px;
  text-align: center;
  transform: scale(0.95, 1);
}
.links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 50px;
}
.link {
  margin: 10px;
  cursor: pointer;
}
img {
  width: 45px;
  height: 45px;
  filter: hue-rotate(220deg) drop-shadow(2px 4px 4px #0006);
  transition: 0.2s;
  user-select: none;
}
img:hover {
  transform: scale(1.1, 1.1);
}
img:active {
  transform: scale(1.1, 1.1);
  filter: hue-rotate(220deg) drop-shadow(2px 4px 4px #222) sepia(0.3);
}
.form-item {
  position: relative;
}
label,
input,
textarea {
  font-family: "Poppins", sans-serif;
}
label {
  position: absolute;
  top: 10px;
  left: 2%;
  color: #999;
  font-size: clamp(14px, 1.5vw, 18px);
  pointer-events: none;
  user-select: none;
}
input,
textarea {
  width: 100%;
  outline: 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 12px;
  font-size: clamp(15px, 1.5vw, 18px);
}
input:focus + label,
input:valid + label,
textarea:focus + label,
textarea:valid + label {
  font-size: clamp(13px, 1.3vw, 16px);
  color: #777;
  top: -20px;
  transition: all 0.225s ease;
}
.submit-btn {
  background-color: #003459;
  filter: drop-shadow(2px 2px 3px #0003);
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: clamp(16px, 1.6vw, 18px);
  display: block;
  padding: 12px 20px;
  margin: 2px auto;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  transition: 0.2s;
}
.submit-btn:hover {
  transform: scale(1.1, 1.1);
}
.submit-btn:active {
  transform: scale(1.1, 1.1);
  filter: sepia(0.5);
}
@media only screen and (max-width: 800px) {
  h2 {
    font-size: clamp(40px, 10vw, 60px);
  }
}
@media only screen and (max-width: 400px) {
  h2 {
    font-size: clamp(30px, 12vw, 60px);
  }
  .links {
    padding-top: 30px;
  }
  img {
    width: 38px;
    height: 38px;
  }
}
</style>