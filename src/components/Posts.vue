<template>
  <div class="hello">
    <div>
      <h1 class="list-header">Sortable Post List</h1>
      <h2 v-if="isLoading" class="empty-state-text">Loading...</h2>
      <h2 v-else-if="error" class="empty-state-text">An error occurred fetching posts</h2>
      <transition-group name="flip-list" tag="ol">
        <li v-for="(post) in posts" v-bind:key="post.id" class="list-items">
          <p class="list-content">
            <font-awesome-icon
              icon="chevron-up"
              class="chevron chevron-up"
              v-on:click="up(post.id)"
            />
            <font-awesome-icon
              icon="chevron-down"
              class="chevron chevron-down"
              v-on:click="down(post.id)"
            />
            Post {{ post.id }}
          </p>
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Posts',
  methods: {
    up(index) {
      this.$store.commit('up', index);
    },
    down(index) {
      this.$store.commit('down', index);
    },
  },
  computed: {
    posts() {
      return this.$store.getters.posts;
    },
    isLoading() {
      return this.$store.getters.isLoading;
    },
    error() {
      return this.$store.getters.error;
    },
  },
  created() {
    // dispatch action get posts
    this.$store.dispatch('getPosts');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  li:nth-last-child(1) .chevron-down {
    display: none;
  }

  li:nth-last-child(1) .chevron-up {
    top: -5px;
  }

  li:nth-child(1) .chevron-up {
    display: none;
  }

  li:nth-child(1) .chevron-down {
    left: 2px;
    top: 5px;
  }

  .list-content,
  .list-header {
    text-align: left;
  }

  .list-header {
    margin-left: 50px;
    color: #fff;
  }

  .chevron {
    color: #9370DB;
  }

  .chevron-up {
    display: block;
    top: -35px;
    float: right;
    position: relative;
    cursor: pointer;
  }

  .chevron-down {
    display: block;
    top: 35px;
    left: 20px;
    cursor: pointer;
    float: right;
    position: relative;
  }

  .flip-list-move {
    transition: transform 1s;
  }
</style>

<style>
  .list-items {
    list-style-type: none;
    position: relative;
    font-size: 1.5rem;
    padding: 10px;
    margin-bottom: 15px;
    background: #ffffff;
    color: #505050;
    width: 600px;
    border-radius: 10px;
  }

  .empty-state-text {
    margin: 0 auto;
    color: #fff;
  }
</style>
