<template>
  <div class="hello">
    <div>
      <h1 class="list-header">Sortable Post List</h1>
      <transition-group name="flip-list" tag="ol">
        <li v-for="(post, index) in posts" v-bind:key="post.id">
          <p class="list-content">
            <font-awesome-icon icon="chevron-up" class="chevron-up" v-on:click="up({ index, postId: post.id })"/>
            <font-awesome-icon icon="chevron-down" class="chevron-down" v-on:click="down({ index, postId: post.id })"/>
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
    up: function(index) {
      this.$store.commit("up", index);
    },
    down: function(index) {
      this.$store.commit("down", index);
    }
  },
  computed: {
    posts: function() {
      return this.$store.getters.posts;
    }
  },
  created() {
    // dispatch action get posts
    this.$store.dispatch("getPosts");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  padding: 0;
}
li {
  margin: 0 10px;
  list-style-type: none;
  position: relative;
  font-size: 1.5rem;
  padding: 15px;
  margin-bottom: 15px;
  background: #d3d3d3;
  color: #fff;
  width: 600px;
  border-radius: 10px;
}
li:nth-last-child(1) p .chevron-down {
  display: none;
}

li:nth-last-child(1) p .chevron-up {
  top: -5px;
}

li:nth-child(1) p .chevron-up {
  display: none;
}

li:nth-child(1) p .chevron-down {
  left: 2px;
  top: 5px;
}

a {
  color: #42b983;
}

.list-content,
.list-header {
  text-align: left;
}

.list-header {
  margin-left: 50px;
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
