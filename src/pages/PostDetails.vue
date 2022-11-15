<template>
  <div>
    <p>{{ post?.id }}</p>
    <p>{{ post?.name }}</p>
    <p>{{ post?.title }}</p>
    <p>{{ post?.body }}</p>
    <hr />
  </div>
</template>

<script>
import { useRoute } from "vue-router";

import axios from "axios";

export default {
  name: "PostsList",
  data() {
    return {
      route: useRoute(),
    };
  },
  computed: {
    post() {
      return this.$store.state.posts[this.route.params.id];
    },
  },
  mounted() {
    const route = useRoute();
    const commentsURL = `https://jsonplaceholder.typicode.com/posts/${route.params.id}/comments/`;
    axios
      .get(commentsURL)
      .then((returnVal) => {
        console.log(returnVal);
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>
<style scoped></style>
