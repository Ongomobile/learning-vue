<template>
  <!-- Syntatic Sugar for events @click="onClick()" -->
  <button @click="showAlert" :style="{ background: color, padding: setPadding }" class="btn">
    <fa :icon="iconName" /> {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    color: String,
    iconName: String,
    setPadding: String,
  },
  methods: {
    showAlert() {
      // Use sweetalert2
      this.$swal.fire({
        title: "Download ultimate conversions guide",
        imageUrl: "https://res.cloudinary.com/dnpje4e34/image/upload/v1639258215/shopping-cart800_btjyqp.jpg",
        imageWidth: 400,
        imageHeight: 266,
        imageAlt: "Custom image",
        html: `<div class="swal-form-wrapper">
          <form action="" method="post">
            <label class="swal-label" for="name">Name</label>
            <input class="swal-input"required name="name" id="name"placeholder="Enter Name" type="text">
            <label class="swal-label"for="email">Email</label>
            <input class="swal-input" required id="email" name="email"required placeholder="Enter Name" type="email">
          </form>
        </div>`,
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText: "Send me the free guide",
        focusConfirm: false,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      })
    },
  },
}
</script>
<style scoped>
button {
  padding: 0.25em 0.75em;
  background-color: #fff;
  color: #23424a;
  border-radius: 100px;
  text-transform: uppercase;
}
</style>
