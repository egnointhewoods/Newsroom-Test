<template>
  <div
    v-if="detailed"
    class="social-container"
    style="
      width: 700px;
      margin: 50px auto;
      z-index: 1;
      height: auto;
      padding: 20px 10px;
    "
  >
    <div class="left">
      <div class="pic">
        <router-link
          :to="'/users/' + userId"
          style="text-decoration: none; color: inherit"
        >
          <h1>F</h1>
        </router-link>
      </div>
    </div>

    <div class="right">
      <div class="top-wrapper">
        <router-link
          :to="'/users/' + userId"
          style="text-decoration: none; color: inherit"
        >
          <h3 class="handle" style="padding: 10px">{{ author }}</h3>
        </router-link>
      </div>

      <div class="mid-wrapper">
        <div>
          <h3>{{ title }}</h3>
          <p style="padding: 20px">{{ body }}</p>
          <div style="display: flex; justify-content: flex-end">
            <div>
              <p>About The Author</p>
              <router-link
                :to="'/users/' + userId"
                style="text-decoration: none; color: inherit"
              >
                <h3>{{ author }}</h3>
                <h4>{{ authorEmail }}</h4>
              </router-link>
            </div>
          </div>
          <div>
            <h4>Comments:</h4>
            <div
              v-for="comment in comments"
              :key="comment.id"
              style="text-align: start; padding-top: 20px"
            >
              <p>
                {{ comment.name }}
              </p>
              <p style="color: black; font-weight: 700">
                - {{ comment.email }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    v-else
    class="social-container"
    style="width: 700px; margin: 50px auto; z-index: 1"
  >
    <div class="left">
      <div class="pic">
        <router-link
          :to="'/users/' + userId"
          style="text-decoration: none; color: inherit"
        >
          <h1>F</h1>
        </router-link>
      </div>
    </div>

    <div class="right">
      <div class="top-wrapper">
        <router-link
          :to="'/users/' + userId"
          style="text-decoration: none; color: inherit"
        >
          <h3 class="handle">{{ author }}</h3>
        </router-link>
      </div>

      <div class="mid-wrapper">
        <router-link
          :to="'/posts/details/' + id"
          style="text-decoration: none; color: inherit"
        >
          <p>{{ title }}</p>
        </router-link>
      </div>
      <div class="bottom-wrapper">
        <router-link
          :to="'/posts/details/' + id"
          style="text-decoration: none; color: inherit"
        >
          <div class="like button">Post Details</div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PostsList",

  props: {
    title: String,
    body: String,
    author: String,
    authorEmail: String,
    id: Number,
    userId: Number,
    comments: Object,
    detailed: Boolean,
  },
};
</script>
<style scoped>
/* Learning flexbox*/
.social-container {
  border-radius: 0.5em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 3em;
  width: 40em;
  height: 10em;
  font-family: helvetica;
  /*FLEXXX*/
  display: flex;
  flex-direction: col;
}
/*LEFT COLUMN OF THE TWEET*/
.left {
  flex: 1;
  order: 1;
}
.pic {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 4em;
  width: 4em;
  margin: 1.5em;
  background-color: #4267b2;
  border-radius: 1em;
  transition: 0.25s linear;
}

.pic > h1 {
  color: white;
}
/*RIGHT COLUMN OF THE TWEET*/
.right {
  /*PARENT FLEX INFO*/
  flex: 4;
  order: 2;
  /*CHILD FLEX*/
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-left: 1em;
  margin-right: 1em;
}

/*TOP PART OF THE TWEET. HANDLE TIME CREATED*/
.top-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  order: 1;
}
.handle {
  order: 1;
  opacity: 0.7;
  font-size: 1.3em;
}
.handle:hover {
  color: black;
}
.time {
  order: 2;
  opacity: 0.3;
}

/*Middle PART OF THE TWEET. CONTENT*/
.mid-wrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: ;
  order: 2;
  border-bottom: 1px solid lightgrey;
}
/*BOTTOM PART OF TWEET*/
.bottom-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  order: 3;
  padding: 0.3em;
}

/* Other styles */
.pic:hover {
  transform: scale(1.025);
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.button {
  border-radius: 12px;
  color: black;
  padding: 7px 10px;
  transition: all 0.1s linear;
  cursor: pointer;
}

.like:hover {
  background-color: gray;
  color: white;
}

@media (max-width: 800px) {
  .social-container {
    width: 600px !important;
  }
}
@media (max-width: 650px) {
  .social-container {
    width: 100% !important;
  }
}
@media (max-width: 465px) {
  div .left {
    display: none;
  }
}
</style>
