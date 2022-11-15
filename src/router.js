import { createRouter, createWebHistory } from "vue-router";

import NotFound from "./pages/NotFound.vue";
import PostsList from "./pages/PostsList.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/posts" },
    {
      name: "posts",
      path: "/posts",
      components: { default: PostsList },
    },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
