<template>
  <pagination
    v-model="page"
    :records="listings.total"
    :per-page="listings.per_page"
    @paginate="paginate"
    :options="listings.options"
  />
</template>

<script>
import Pagination from "v-pagination-3";
import { useRouter } from "vue-router";
export default {
  name: "ThePagination",
  components: {
    Pagination,
  },
  data() {
    return {
      page: 1,
      router: useRouter(),
      listings: {
        total: 100,
        per_page: 20,
      },
    };
  },
  methods: {
    paginate(e) {
      // alert(e);
      this.router.push("/posts/" + e);
    },
  },
};
</script>
<style scoped>
li {
  display: inline;
}
</style>
