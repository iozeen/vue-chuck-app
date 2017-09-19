<template>
  <div id="app">
    <Navigation/>
    <router-view></router-view>
  </div>
</template>

<script>
  import Navigation from './components/navigation.vue';
  import * as types from './store/types';

  export default {
    name: 'app',
    components: {
      Navigation
    },
    mounted() {
      this.$store.dispatch(types.LOAD_JOKES_LIST);
    }
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    font-family: Verdana, sans-serif;
    box-sizing: border-box;
  }

  ul {
    list-style-type: none;
    width: 100%;
  }

  #app {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
</style>
