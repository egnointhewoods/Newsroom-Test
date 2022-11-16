<template>
  <div>
    <the-pagination />
    <post-card
      v-for="post in twentyMovies"
      :key="post.id"
      :title="post.title"
      :author="post.name"
      :id="post.id"
      :userId="post.userId"
    />

    <!-- :to="'/posts/details/' + post.id" -->
    <!--  >
      <p>{{ post.title }}</p>
      <router-link :to="'/users/' + post.userId">
        <h1>{{ post.name }}</h1>
      </router-link>
    </router-link> -->
  </div>
</template>

<script>
import ThePagination from "../components/ThePagination.vue";
import PostCard from "../components/UI/PostCard.vue";

import { useRoute } from "vue-router";
export default {
  components: { ThePagination, PostCard },
  name: "PostsList",
  data() {
    return {
      route: useRoute(),
      twentyMovies2: [],
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    twentyMovies() {
      return this.$store.getters.getTwentyMovies(
        Number(this.route.params.page)
      );
    },
  },
};
</script>
<style scoped>
.post {
  margin: 40px;
  background-color: gray;
}
</style>
