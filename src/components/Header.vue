<template>
  <header>
    <div class="container row">
      <!-- Syntatic Sugar for events @click="onClick()" -->
      <button @click="handleToggle" class="nav-toggle">
        <span class="hamburger"></span>
      </button>
      <a class="logo" href="/" alt="logo">
        <div class="nav-logo">
          <img src="https://www.aeontg.com/img/aeontg.png" alt="logo" />
        </div>
      </a>
      <nav class="nav" :class="{ navVisible: isActive }">
        <ul class="nav__list nav__list--primary">
          <NavLink linkText="About" />
          <NavLink linkText="Services" />
          <NavLink linkText="Portfolio" />
          <NavLink linkText="Contact" />
        </ul>
        <ul class="nav__list nav__list--secondary">
          <Button text="Free Guide" iconName="info-circle" />
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import Button from "./Button"
import NavLink from "./NavLink.vue"

export default {
  name: "Header",
  props: {
    linkText: String,
  },
  components: {
    NavLink,
    Button,
  },
  data() {
    return {
      isActive: true,
    }
  },
  methods: {
    handleToggle() {
      this.isActive = !this.isActive
    },
  },
}
</script>

<style scoped>
.container {
  width: 80%;
  max-width: 1100px;
  margin: 0 auto;
  /* added for nav-toggle positioning */
  position: relative;
}

header {
  background: #222;
  padding: 1em 2em;
  text-align: center;
}

.nav {
  width: 100%;
}
.logo {
  height: 30px;
}
.nav-logo {
  height: 30px;
  width: 110px;
  padding-top: 8px;
}

.nav-toggle {
  cursor: pointer;
  border: 0;
  width: 3em;
  height: 3em;
  padding: 0em;
  border-radius: 50%;
  background: #f9971c;
  color: white;
  transition: opacity 250ms ease;

  position: absolute;
  right: 0;
}

.nav-toggle:focus,
.nav-toggle:hover {
  opacity: 0.75;
}

.hamburger {
  width: 50%;
  position: relative;
}

.hamburger,
.hamburger::before,
.hamburger::after {
  display: block;
  margin: 0 auto;
  height: 3px;
  background: white;
}

.hamburger::before,
.hamburger::after {
  content: "";
  width: 100%;
}

.hamburger::before {
  transform: translateY(-6px);
}

.hamburger::after {
  transform: translateY(3px);
}

.nav {
  visibility: hidden;
  height: 0;
  /* position: absolute; */
  font-size: 1rem;
}

.navVisible {
  visibility: visible;
  height: auto;
  position: relative;
}

.nav__list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav__list--primary {
  margin-bottom: 2em;
}

.nav__item {
  margin-top: 0.75em;
}

.nav__link {
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
}

.nav__link--button {
  padding: 0.25em 0.75em;
  background-color: #fff;
  color: #23424a;
  border-radius: 100px;
}
.nav__link:hover,
.nav__link:focus {
  opacity: 0.65;
}

.logo {
  height: 30px;
}

@media (min-width: 800px) {
  .container {
    width: 100%;
    max-width: 3000px;
  }
  .nav-toggle {
    display: none;
  }

  .nav {
    visibility: visible;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: auto;
    position: relative;
  }

  .nav-logo {
    padding: 0;
  }

  .nav__list {
    display: flex;
    margin: 0;
  }

  .nav__list--secondary {
    margin-left: 20px;
  }

  .nav__item {
    margin: 0 0 0 1.5em;
  }

  .row {
    display: flex;
    justify-content: space-between;
  }

  .hero__text {
    width: 62%;
  }

  .hero__img {
    width: 32%;
    align-self: flex-start;
    margin: 0;
  }

  .primary-content {
    width: 62%;
  }

  .sidebar {
    width: 32%;
  }
}
</style>
