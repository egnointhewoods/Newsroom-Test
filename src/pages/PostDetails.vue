<template>
  <div v-if="author && comments">
    <PostCard
      :title="post.title"
      :body="post.body"
      :author="author.name"
      :authorEmail="author.email"
      :comments="comments"
      :userId="author.id"
      :detailed="true"
    />
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import axios from "axios";
import PostCard from "@/components/UI/PostCard.vue";
export default {
  name: "PostsList",
  data() {
    return {
      route: useRoute(),
      author: [],
      post: [],
    };
  },
  components: { PostCard },

  computed: {
    comments() {
      return this.$store.state.comments;
    },
  },
  mounted() {
    this.$store.dispatch("fetchComments");
    const postURL = `https://jsonplaceholder.typicode.com/posts/${this.route.params.id}`;
    axios
      .get(postURL)
      .then((returnVal) => {
        console.log(returnVal.data);
        this.post = returnVal.data;
        const authorURL = `https://jsonplaceholder.typicode.com/users/${returnVal.data.userId}`;
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
      })
      .catch((e) => {
        this.state.error = e.message;
        console.log(e);
      });
  },
};
</script>
<style scoped></style>
