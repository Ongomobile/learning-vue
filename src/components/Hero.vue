<template>
  <div class="hero__wrapper" :style="{ backgroundImage: `url(${imgUrl})` }">
    <div class="hero__container">
      <div class="hero__text">
        <h1 class="hero__headline">{{ headlineText }}</h1>
        <hr />
        <p class="hero__subheadline">{{ subheadlineOne }} <br />{{ subheadlineTwo }}</p>
      </div>
      <div class="hero__btn--wrapper">
        <Button text="Free Guide" iconName="info-circle" color="#f8971d" setPadding=".75em 1.5em" textColor="#fff" />
      </div>
    </div>
  </div>
</template>
<script>
import Button from "./Button"
export default {
  name: "Hero",
  components: {
    Button,
  },
  props: {
    headlineText: String,
    subheadlineOne: String,
    subheadlineTwo: String,
    imgUrl: String,
  },
}
</script>
<style scoped>
.hero__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-size: cover;
  font-family: "Open-sans", sans-serif;
}

.hero__container {
  max-width: 820px;
}

.hero__text {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #fff;
}

.hero__subheadline {
  font-family: "Merriweather", sans-serif !important;
  font-size: 1.5rem;
}

.hero__btn--wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 45px;
}

.hero__headline {
  font-family: "Open-sans", sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 2rem;
}

hr {
  margin-top: 18px;
  margin-bottom: 29px;
  width: 50px;
  border-color: #f8971d;
  border-width: 2px;
}

.hero__subheadline {
  font-family: inherit;
}

@media (min-width: 800px) {
  .hero__headline {
    font-size: 3.5rem;
  }

  .hero__wrapper {
    height: 100vh;
  }
}
</style>
