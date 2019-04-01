<template>
  <div id="app">
    <div class="container">
      <Posts />
      <History/>
    </div>
  </div>
</template>

<script>
import Posts from './components/Posts.vue';
import History from './components/History.vue';

export default {
  name: 'app',
  components: {
    Posts,
    History,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: fit-content;
  padding: 10px;
  background-image:
    linear-gradient(
      171.2deg,
      #9370DB,
      #9370DB 25%,
      #eeeeee 25%,
      #eeeeee 75%,
      #eeeeee 75%
    );
}

.container {
  display: grid;
  grid-template-columns: 700px 1fr;
  grid-column-gap: 100px;
  padding: 20px;
}
</style>
