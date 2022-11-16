<template>
  <div class="text-center">
    <v-pagination
      @click="logIt"
      v-model="page"
      :length="5"
      :total-visible="5"
    ></v-pagination>
  </div>
</template>
<script>
import { useRouter } from "vue-router";

export default {
  data() {
    return {
      page: 1,

      router: useRouter(),
    };
  },
  methods: {
    logIt() {
      this.router.push("/posts/" + this.page);
    },
  },
};
</script>
