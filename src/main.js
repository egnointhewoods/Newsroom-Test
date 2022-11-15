import { createApp } from "vue";
import { createStore } from "vuex";
import axios from "axios";
import App from "./App.vue";
import router from "./router.js";

const store = createStore({
  namespaced: true,
  actions: {
    fetchPosts({ commit }) {
      const postsURL = "https://jsonplaceholder.typicode.com/posts";
      axios
        .get(postsURL)
        .then((res) => {
          for (let i = 0; i < res.data.length; i++) {
            const post = res.data[i];
            const userURL = `https://jsonplaceholder.typicode.com/users/${post.userId}`;
            axios
              .get(userURL)
              .then((res) => {
                post.name = res.data.name;
              })
              .catch((e) => {
                console.log(e);
              });
          }
          setTimeout(() => {
            commit("setPostsData", res.data);
          }, 1200);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },

  mutations: {
    setPostsData(state, postData) {
      state.posts = postData.map((posts) => {
        return {
          userId: posts.userId,
          title: posts.title,
          body: posts.body,
          id: posts.id,
          name: posts.name,
        };
      });
    },
  },
});

const app = createApp(App);

app.use(store);
app.use(router);

app.mount("#app");
