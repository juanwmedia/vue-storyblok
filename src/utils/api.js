import StoryblokClient from "storyblok-js-client";

const storyapi = new StoryblokClient({
  accessToken: process.env.VUE_APP_TOKEN
});

export default storyapi;
