<template>
  <div class="history-container">
    <div>
      <h1 class="history-header">List of actions committed</h1>
      <transition-group name="fade" tag="ol">
        <li v-for="(h, index) in history" v-bind:key="getPostId(index)" class="list-items">
          <p class="list-content">
            Moved post {{ getPostId(index) }} from index {{ getFromIndex(index) }} to index {{ getToIndex(index) }}
            <button v-on:click="timeTravel(index)" class="time-travel-button">Time Travel</button>
          </p>
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
  .history-container {
    height: 700px;
    overflow-y: scroll;
  }

  .history-header {
    margin: 15px;
  }

.time-travel-button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline;
  font-size: 16px;
  cursor: pointer;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
