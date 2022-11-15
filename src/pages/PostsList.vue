<template>
  <div>
    <router-link
      :v-if="loaded"
      v-for="post in posts"
      :key="post"
      class="post"
      :to="'/posts/' + post.id"
    >
      <p>{{ post.title }}</p>
      <router-link :to="'/users/' + post.userId">
        <h1>{{ post.name }}</h1>
      </router-link>
      <!-- <h1 @click="logIt($event, post.userId)">{{ post.name }}</h1> -->
    </router-link>
  </div>
</template>

<script>
export default {
  name: "PostsList",
  data() {
    return {
      loaded: false,
      offers: [],
    };
  },
  methods: {
    logIt(event, argument) {
      console.log(argument);
      event?.preventDefault();
      event?.stopPropagation();
    },
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  mounted() {
    this.$store.dispatch("fetchPosts");
  },
};
</script>
<style scoped>
.post {
  margin: 40px;
  background-color: gray;
}
</style>
