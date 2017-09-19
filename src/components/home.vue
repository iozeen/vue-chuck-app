<template>
  <div id="home">
    <h3>Favourite Chuck jokes list</h3>
    <Joke :jokeItem="joke" :random="true"/>
  </div>
</template>

<script>
  import Joke from './joke.vue';
  import { RANDOM_JOKE } from '../store/types';

  export default {
    name: 'home',
    created(){
      this.$store.dispatch(RANDOM_JOKE);
    },
    computed: {
      joke(){
        return this.$store.getters.randomJoke;
      }
    },
    components: {
      Joke
    }
  }
</script>

<style>
  #home {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h3{
    font-family: Courier, sans-serif;
    padding: 10px 0 20px;
  }

</style>