<template>
  <div id="app">
    <StoryHome />
  </div>
</template>

<script>
import StoryHome from "@/components/StoryHome.vue";
export default {
  name: "App",
  components: {
    StoryHome
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
}
</style>
