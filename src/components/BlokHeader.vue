<template>
  <!-- Header -->
  <header
    v-editable="blok"
    class="header"
    :style="`background-color:${blok.backgroundColor} `"
  >
    <h1 class="header__title" :style="`color:${blok.color}`">
      {{ blok.title }}
    </h1>
  </header>
</template>

<script>
export default {
  name: "BlokHeader",
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.header {
  text-align: center;
  padding: 1rem;
  color: white;
  background-color: black;
}

.header__title {
  font-weight: 300;
}
</style>
