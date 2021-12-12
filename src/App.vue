<template>
  <div>
    <Header />
    <Hero
      headlineText="Let's Conquer The World"
      subheadlineOne="Think of us as Q, and you, 007 - our favorite thing is giving you the tools to sell more, do more, and be more"
      imgUrl="https://www.aeontg.com/img/header.jpg"
    />
  </div>
</template>

<script>
import Header from "./components/Header"
import Hero from "./components/Hero"

export default {
  name: "App",
  components: {
    Header,
    Hero,
  },
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html:lang(en) body {
  font-family: "Open-sans", sans-serif;
}
/* CSS reset */
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html,
body {
  height: 100%;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

#root {
  isolation: isolate;
}
/* End reset */

html:lang(en) .container {
  width: 80%;
  max-width: 1100px;
  margin: 0 auto;
  /* added for nav-toggle positioning */
  position: relative;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}

/* SweetAlert styles */
.swal2-confirm.swal2-styled {
  background-color: #f8971d !important;
  color: #000 !important;
}

#swal2-title {
  font-size: 1.4em;
}

.swal-form-wrapper {
  margin: 0 auto;
  max-width: 300px;
  font-family: inherit;
}

.swal-label {
  display: inline-block;
  font-size: 0.9em;
  padding: 0 0 4px 4px;
  font-weight: 600;
  text-transform: uppercase;
  color: inherit;
  width: 100%;
  text-align: left;
}

.swal-input {
  margin-bottom: 16px;
  padding: 8px;
  font-size: 20px;
  color: #0b0728;
  border-radius: 4px;
  border: 1px solid #8c899c;
  width: 100%;
}
</style>
