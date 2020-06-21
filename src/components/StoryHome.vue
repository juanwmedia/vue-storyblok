<template>
  <div class="content">
    <!-- Header -->
    <header class="header">
      <h1 class="header__title">Black Cat Rescue 😸</h1>
    </header>

    <!-- Content -->
    <article class="section">
      <h2 class="subtitle">Latets cats on adoption</h2>
      <input
        type="search"
        v-model="search"
        class="search"
        placeholder="Search for cats..."
      />

      <!-- Cats 🙀 -->
      <section class="cats">
        <div
          class="cat"
          v-for="(cat, index) in searchResult"
          :key="index"
          :style="`background-image:url(${cat.image})`"
        >
          <h3 class="cat__name">{{ cat.name }}</h3>
        </div>
      </section>
    </article>

    <!-- Footer -->
    <footer class="footer">
      <h4>Copyright 2020</h4>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      search: "",
      cats: [
        {
          image:
            "https://www.animalfriends.co.uk/app/uploads/2018/10/31102444/why-isnt-anyone-adopting-black-cats.jpg",
          name: "Guizmo"
        },
        {
          image:
            "https://images.unsplash.com/photo-1503431128871-cd250803fa41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          name: "Nino"
        },
        {
          image:
            "https://images.unsplash.com/photo-1497910091122-9f8a7746eb33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          name: "Panther"
        },
        {
          image:
            "https://images.unsplash.com/photo-1568995430555-091fd9226ed3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          name: "Romeo"
        },
        {
          image:
            "https://images.unsplash.com/photo-1562009910-830d74050500?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          name: "Chocolate"
        },
        {
          image:
            "https://images.unsplash.com/photo-1516399779-1480b4f76df6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          name: "Dark"
        }
      ]
    };
  },
  computed: {
    searchResult() {
      return this.cats.filter(cat => cat.name.includes(this.search));
    }
  }
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header {
  text-align: center;
  padding: 1rem;
  color: white;
  background-color: black;
}

.header__title {
  font-weight: 300;
}

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

.footer {
  text-align: center;
  background-color: lightgray;
  padding: 0.5rem;
  height: 4.5rem;
}
</style>
