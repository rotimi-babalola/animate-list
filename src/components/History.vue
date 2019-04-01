<template>
  <div class="history-container">
    <div class="parent">
        <div class="header-container">
          <h1>List of actions committed</h1>
        </div>
        <p v-if="history.length === 0" class="empty-history-text">
          No actions have been committed
        </p>
        <transition-group name="fade" tag="ol">
          <li
            v-for="(h, index) in history"
            v-bind:key="getPostId(index)"
            class="list-items list-items__history">
            <p class="list-content">
              Moved post {{ getPostId(index) }} from index
              {{ getFromIndex(index) }} to index {{ getToIndex(index) }}
              <button
                v-on:click="timeTravel(index)"
                class="time-travel-button"
              >Time Travel</button>
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
    getPostId(index) {
      return this.$store.getters.history[index].post[0].id;
    },
    getFromIndex(index) {
      return this.$store.getters.history[index].from;
    },
    getToIndex(index) {
      return this.$store.getters.history[index].to;
    },
    timeTravel(index) {
      this.$store.commit('timeTravel', index);
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
  width: 700px;
  overflow-y: scroll;
  display: flex;
}

ol {
  overflow-y: scroll;
  height: 450px;
  margin-top: 30px;
}

.list-items__history {
  width: 570px;
  border-bottom: 1px solid #D3D3D3;
  border-radius: 0px;
  margin-bottom: 0px;
}

li:nth-last-child(1).list-items__history {
  border-bottom: none;
}

.parent {
  background-color: #f5f5f5;
  margin-top: 30px;
  width: 650px;
}

.header-container {
  background-color: #fff;
  padding-top: 20px;
  padding-bottom: 10px;
}

.time-travel-button {
  background-color: #66FF00;
  border: none;
  color: #000;
  border-radius: 3px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline;
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
