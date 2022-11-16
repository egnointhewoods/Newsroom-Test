<template>
  <div class="userDetails">
    <h1>Name: {{ user.name }}</h1>
    <h2>Username: {{ user.username }}</h2>
    <h2>Email: {{ user.email }}</h2>
    <h2>Phone: {{ user.phone }}</h2>
    <br />
    <h2>{{ user.name }}'s Posts:</h2>

    <post-card
      v-for="userPosts in userPosts"
      :key="userPosts.id"
      :title="userPosts.title"
      :author="userPosts.name"
      :id="userPosts.id"
      :userId="userPosts.userId"
    />
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import axios from "axios";
import PostCard from "../components/UI/PostCard.vue";
export default {
  components: { PostCard },
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
<style scoped>
.userDetails {
  text-align: start;
  margin: 50px 200px;
}
@media (max-width: 1050px) {
  .userDetails {
    margin: 50px 150px !important;
  }
}
@media (max-width: 900px) {
  .userDetails {
    margin: 50px 20px !important;
  }
}
</style>
