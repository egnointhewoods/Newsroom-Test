<template>
  <router-view></router-view>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "App",
  data() {
    return {
      router: useRouter(),
    };
  },
  mounted() {
    this.$store.dispatch("fetchPosts");

    setTimeout(() => {
      if (this.$store.state.error) {
        console.log("yea dude");
        this.router.push("/error");
      }
    }, 500);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
