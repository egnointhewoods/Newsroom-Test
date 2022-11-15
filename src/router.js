import { createRouter, createWebHistory } from "vue-router";

import NotFound from "./pages/NotFound.vue";
import PostsList from "./pages/PostsList.vue";
import PostDetails from "./pages/PostDetails.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/posts" },
    {
      name: "posts",
      path: "/posts",
      components: { default: PostsList },
    },
    {
      name: "postDetails",
      path: "/posts/details/:id",
      components: { default: PostDetails },
    },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
