<template>
  <div class="history-container">
    <div class="parent">
      <div class="header-container">
        <h1>List of actions committed</h1>
      </div>
      <p v-if="history.length === 0" class="empty-history-text">No actions have been committed</p>
      <transition-group name="fade" tag="ol">
        <li v-for="(h, index) in history" :key="h.key" class="list-items list-items__history">
          <p class="list-content">
            Moved post {{ h.postId }} from index
            {{ h.from }} to index {{ h.to }}
            <button
              v-on:click="timeTravel(index)"
              class="time-travel-button"
            >Time Travel</button>
          </p>
        </li>
      </transition-group>
      <button
        v-if="history.length > 0"
        v-on:click="reset()"
        class="time-travel-button"
      >Initial State</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'History',
  methods: {
    timeTravel(index) {
      this.$store.commit('timeTravel', index);
    },
    reset() {
      this.$store.commit('reset');
    },
  },
  computed: {
    history() {
      return this.$store.getters.history;
    },
  },
};
</script>

<style scoped>
.history-container {
  height: 650px;
  overflow-y: scroll;
  display: flex;
}

ol {
  overflow-y: scroll;
  height: 450px;
}

.list-items__history {
  width: 570px;
  border-bottom: 1px solid #d3d3d3;
  border-radius: 0px;
  margin-bottom: 0px;
}

li:nth-last-child(1).list-items__history {
  border-bottom: none;
}

.parent {
  background-color: #f5f5f5;
  width: 650px;
}

.header-container {
  background-color: #fff;
  padding-top: 20px;
  padding-bottom: 10px;
}

.time-travel-button {
  background-color: #66ff00;
  border: none;
  color: #000;
  border-radius: 3px;
  padding: 15px 32px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.empty-history-text {
  color: #000;
  font-size: 25px;
  margin: 100px auto;
}
</style>
