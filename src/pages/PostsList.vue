<template>
  <div>
    <router-link
      v-for="post in posts"
      :key="post.id"
      class="post"
      :to="'/posts/details/' + post.id"
    >
      <p>{{ post.title }}</p>
      <router-link :to="'/users/' + post.userId">
        <h1>{{ post.name }}</h1>
      </router-link>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "PostsList",
  computed: {
    posts() {
      return this.$store.state.posts;
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
