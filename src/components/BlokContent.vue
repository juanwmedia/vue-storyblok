<template>
  <!-- Content -->
  <article v-editable="blok" class="section">
    <h2 class="subtitle">{{ blok.title }}</h2>
    <input
      type="search"
      v-model="search"
      class="search"
      :placeholder="blok.searchText"
    />

    <!-- Cats 🙀 -->
    <section class="cats">
      <template v-for="cat in searchResult">
        <component
          :is="require(`@/components/${cat.component}.vue`).default"
          :blok="cat"
          :key="cat._uid"
        ></component>
      </template>
    </section>
  </article>
</template>

<script>
export default {
  name: "BlokContent",
  data() {
    return {
      search: ""
    };
  },
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  computed: {
    searchResult() {
      return this.blok.cats.filter(cat => cat.name.includes(this.search));
    }
  }
};
</script>

<style scoped>
.section {
  padding: 2rem;
  flex-grow: 1;
}

.subtitle {
  text-align: center;
}

.search {
  padding: 0.5rem;
  width: 100%;
  margin-bottom: 2rem;
  font-size: 1rem;
}

.cats {
  display: grid;
  gap: 2rem;
  grid:
    repeat(auto-fill, minmax(25vh, 1fr))
    / repeat(auto-fill, minmax(25vw, 1fr));
  grid-auto-rows: minmax(25vh, 1fr);
}
</style>
