import Vue from "vue";
import App from "./App.vue";
import StoryblokVue from "storyblok-vue";

Vue.config.productionTip = false;

Vue.use(StoryblokVue);

new Vue({
  render: h => h(App)
}).$mount("#app");
