<template>
  <header>
    <div class="header-text">
      <h1>
        <span id="photography"> Hannah Dalwai</span> Fullstack developer <br />
      </h1>

      <a href="#about"
        ><i
          id="landingi"
          class="bx bx-chevrons-down bx-fade-down-hover bx-lg"
        ></i>
      </a>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}
input,
textarea,
button,
select,
img,
span,
a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  outline: 0;
}
#landingi {
  color: white;
}
/*Hero Image*/
header {
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.315)),
    url("https://i.postimg.cc/yNVWMtGR/mountains-1412683-1280.png");
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.header-text {
  width: 500px;
  text-align: center;
}
header h1 {
  margin-bottom: 10px;
  font-family: League Spartan, sans-serif;
  font-weight: 500;
  font-size: 45px;
  color: white;
}
#photography {
  font-size: 60px;
  letter-spacing: 0.5px;
}
header p {
  margin-bottom: 20px;
  font-family: "Open Sans", Helvetica, sans-serif;
  color: white;
  font-size: 18px;
}
header button {
  border: 2px solid white;
  color: white;
  font-family: "Roboto", Segoe UI, calibri, Helvetica, serif;
  padding: 10px;
  font-size: 18px;
  width: 160px;
  border-radius: 500px;
  cursor: pointer;
  background-color: transparent;
  transition: all 0.2s ease-in-out;
}
@media screen and (max-width: 676px) {
  .header-text {
    width: 95%;
    text-align: center;
  }
}
@media screen and (max-width: 601px) {
  #photography {
    font-size: 45px;
  }
  header h1 {
    font-size: 30px;
  }
  header p {
    font-size: 15px;
    width: 85%;
    display: block;
    margin: auto;
    margin-bottom: 20px;
  }
  header button {
    font-size: 16px;
    width: 140px;
  }
}
@media screen and (max-width: 460px) {
  #photography {
    font-size: 35px;
  }
  header h1 {
    font-size: 28px;
  }
}
/*Hero Image*/
</style>
