<template>
  <div
    v-editable="blok"
    class="cat"
    :style="`background-image:url(${blok.image.filename})`"
  >
    <h3 class="cat__name">{{ blok.name }}</h3>
  </div>
</template>

<script>
export default {
  name: "BlokCat",
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.cat {
  background-size: cover;
  background-position: center;
  border-radius: 1rem;
  border: 3px solid;
  position: relative;
}

.cat__name {
  font-weight: normal;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.3rem;
  text-align: center;
}
</style>
