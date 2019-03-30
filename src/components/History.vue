<template>
  <div class="history-container">
    <div>
      <h1 class="history-header">List of actions committed</h1>
      <transition-group name="fade" tag="ol">
        <li v-for="(h, index) in history" v-bind:key="getPostId(index)">
          <p class="list-content">
            Moved post {{ getPostId(index) }} from index {{ getFromIndex(index) }} to index {{ getToIndex(index) }}
          </p>
          <button v-on:click="timeTravel(index)">Time Travel</button>
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'History',
  methods: {
    getPostId: function (index) {
      return this.$store.getters.history[index].post[0].id;
    },
    getFromIndex: function(index) {
      return this.$store.getters.history[index].from;
    },
    getToIndex: function(index) {
      return this.$store.getters.history[index].to;
    },
    timeTravel: function(index) {
      this.$store.commit('timeTravel', index);
    }
  },
  computed: {
    history: function() {
      return this.$store.getters.history;
    },
  }
}
</script>

<style scoped>
  .history-header {
    margin: 15px;
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
  width: auto;
  border-bottom: 2px red;
  border-radius: 10px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
