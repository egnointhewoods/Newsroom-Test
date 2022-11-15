<template>
  <div>
    <h1>{{ user.name }}</h1>
    <h2>{{ user.username }}</h2>
    <h2>{{ user.email }}</h2>
    <h2>{{ user.phone }}</h2>
    <p v-for="post in userPosts" :key="post.id">{{ post.id }}</p>
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
      user: [],
      userPosts: [],
    };
  },
  mounted() {
    const userURL = `https://jsonplaceholder.typicode.com/users/${this.route.params.id}`;
    axios
      .get(userURL)
      .then((returnVal) => {
        console.log(returnVal.data);
        this.user = returnVal.data;
        console.log(this.user.address.street);
      })
      .catch((e) => {
        this.state.error = e.message;
        console.log(e);
      });

    const postsByUserURL = `https://jsonplaceholder.typicode.com/users/${this.route.params.id}/posts`;
    axios
      .get(postsByUserURL)
      .then((returnVal) => {
        console.log(returnVal.data);
        this.userPosts = returnVal.data;
      })
      .catch((e) => {
        this.state.error = e.message;
        console.log(e);
      });
  },
};
</script>
<style scoped></style>
