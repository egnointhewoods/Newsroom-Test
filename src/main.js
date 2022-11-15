import { createApp } from "vue";
import { createStore } from "vuex";
import axios from "axios";
import App from "./App.vue";
import router from "./router.js";
import { useRoute } from "vue-router";

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
              .then((returnVal) => {
                post.name = returnVal.data.name;
              })
              .catch((e) => {
                this.state.error = e.message;
                console.log(e);
              });
          }

          setTimeout(() => {
            commit("setPostsData", res.data);
          }, 1400);
        })
        .catch((e) => {
          this.state.error = e.message;
          console.log(e);
        });
    },
    fetchComments({ commit }) {
      const route = useRoute();
      const commentsURL = `https://jsonplaceholder.typicode.com/posts/${route.params.id}/comments/`;
      console.log(route.params);
      axios
        .get(commentsURL)
        .then((res) => {
          commit("setCommentsData", res.data);
        })
        .catch((e) => {
          this.state.error = e.message;
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
    setCommentsData(state, commentsData) {
      state.comments = commentsData.map((comments) => {
        return {
          postId: comments.postId,
          id: comments.id,
          name: comments.name,
          email: comments.email,
          body: comments.body,
        };
      });
    },
  },
});

const app = createApp(App);

app.use(store);
app.use(router);
app.mount("#app");
