<template>
  <div class="content">
    <template v-for="item in story.content.body">
      <component
        :is="require(`@/components/${item.component}.vue`).default"
        :blok="item"
        :key="item._uid"
      ></component>
    </template>
  </div>
</template>

<script>
import storyapi from "@/utils/api.js";
export default {
  name: "Home",
  created() {
    if (window.storyblok) {
      window.storyblok.init({
        accessToken: process.env.VUE_APP_TOKEN
      });
      window.storyblok.on("change", () => {
        this.getStory("home", "draft");
      });
      window.storyblok.pingEditor(() => {
        if (window.storyblok.isInEditor()) {
          this.getStory("home", "draft");
        } else {
          this.getStory("home", "published");
        }
      });
    } else {
      this.getStory("home", "published");
    }
  },
  data() {
    return {
      story: {
        content: {
          body: []
        }
      },
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
  methods: {
    async getStory(slug, version) {
      const { data } = await storyapi.get("cdn/stories/" + slug, {
        version: version
      });
      this.story = data.story;
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
</style>
