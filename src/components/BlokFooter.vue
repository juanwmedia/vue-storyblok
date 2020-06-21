<template>
  <!-- Footer -->
  <footer
    v-editable="blok"
    class="footer"
    :style="`background-color:${blok.backgroundColor} `"
  >
    <h4 :style="`color:${blok.color}`">{{ blok.title }}</h4>
  </footer>
</template>

<script>
export default {
  name: "BlokFooter",
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.footer {
  text-align: center;
  background-color: lightgray;
  padding: 0.5rem;
  height: 4.5rem;
}
</style>
