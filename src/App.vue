<template>
  <div id="app">
    <Navigation />
    <router-view></router-view>
  </div>
</template>

<script>
  import Navigation from './components/navigation.vue';

  export default {
    name: 'app',
    components: {
      Navigation
    },
    mounted() {
      this.$store.dispatch('LOAD_PROJECT_LIST');
    }
  }
</script>

<style>
</style>
