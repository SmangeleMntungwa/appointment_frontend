<template>
  <form action="https://formspree.io/f/myylzlqv" method="POST">
    <h1>Contact Me</h1>
    <div>
      <label for="name">Your Name: </label>
      <input type="text" name="name" id="name" placeholder="Full name" />
    </div>
    <div>
      <label for="email">Your email:</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="email@domain.com"
      />
    </div>
    <div>
      <label for="number">Your email:</label>
      <input type="tel" name="number" id="number" placeholder="012 345 6789" />
    </div>
    <div>
      <label for="message">Your message:</label>
      <textarea
        name="message"
        id="message"
        placeholder="Your message"
      ></textarea>
    </div>

    <!-- your other form fields go here -->

    <button type="submit">Send</button>
  </form>
</template>

<script></script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(https://postimg.cc/qNd0J4bc);
  background-size: cover;
  background-position: center;
}

form {
  background: rgba(15, 15, 15, 0.865);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  border-radius: 10px;
  padding: 5% 10%;
  display: flex;
  flex-direction: column;
  color: rgb(252, 244, 244);
  font-family: sans-serif;
}

label {
  display: none;
}

input,
textarea,
button {
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  border-radius: 10px;
  border: none;
  padding: 10px;
  margin-bottom: 20px;
}

div,
input,
textarea,
button {
  width: 100%;
}

h1 {
  text-transform: uppercase;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
}

button {
  color: white;
  text-transform: uppercase;
}

input::placeholder,
textarea::placeholder {
  color: white;
  font-family: sans-serif;
}
</style>