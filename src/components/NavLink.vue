<template>
  <li class="nav__item">
    <a href="#" class="nav__link">{{ linkText }}</a>
  </li>
</template>

<script>
export default {
  name: "NavLink",
  props: {
    linkText: String,
  },
}
</script>

<style scoped>
.nav__item {
  margin-top: 0.75em;
}

.nav__link {
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
}

@media (min-width: 800px) {
  .nav__item {
    margin: 0 0 0 1.5em;
  }
}
</style>
