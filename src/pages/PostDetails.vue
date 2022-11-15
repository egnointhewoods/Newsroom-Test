<template>
  <div v-if="author && comments">
    <p>{{ post.title }}</p>
    <p>{{ post.body }}</p>
    <p>By</p>
    <h1>{{ author.name }}</h1>
    <h2>{{ author.email }}</h2>
    <hr />
    <button>Show More</button>
    <p v-for="comment in comments" :key="comment.id">{{ comment.name }}</p>
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
      author: [],
    };
  },
  computed: {
    post() {
      return this.$store.state.posts[this.route.params.id];
    },
    comments() {
      return this.$store.state.comments;
    },
  },
  mounted() {
    this.$store.dispatch("fetchComments");
    const authorURL = `https://jsonplaceholder.typicode.com/users/${this.route.params.id}`;
    axios
      .get(authorURL)
      .then((returnVal) => {
        console.log(returnVal.data);
        this.author = returnVal.data;
      })
      .catch((e) => {
        this.state.error = e.message;
        console.log(e);
      });
  },
};
</script>
<style scoped></style>
