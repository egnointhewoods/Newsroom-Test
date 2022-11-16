import { createRouter, createWebHistory } from "vue-router";

import NotFound from "./pages/NotFound.vue";
import ErrorPage from "./pages/ErrorPage.vue";

import PostsList from "./pages/PostsList.vue";
import PostDetails from "./pages/PostDetails.vue";
import UserDetails from "./pages/UserDetails.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/posts/1" },
    {
      name: "posts",
      path: "/posts/:page",
      components: { default: PostsList },
    },
    {
      name: "postDetails",
      path: "/posts/details/:id",
      components: { default: PostDetails },
    },
    {
      name: "userDetauls",
      path: "/users/:id",
      components: { default: UserDetails },
    },
    {
      name: "error",
      path: "/error",
      components: { default: ErrorPage },
    },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
