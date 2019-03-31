<template>
  <div id="app">
    <Posts />
    <History/>
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* background-color:#eeeeee; */
  background-image:
    linear-gradient(
      171deg,
      #9370DB,
      #9370DB 25%,
      #eeeeee 25%,
      #eeeeee 75%,
      #eeeeee 75%
    );
}
</style>
