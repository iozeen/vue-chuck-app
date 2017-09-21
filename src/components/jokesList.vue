<template>
  <ul class="joke-list">
    <li v-for="joke in jokes" :key="joke.id">
      <Joke :jokeItem="joke"/>
      <!--<router-link :to="{ name: 'joke', params: { id: joke.id }}">-->
      <!--Edit-->
      <!--</router-link>-->
    </li>
  </ul>
</template>

<script>
  import Joke from './joke.vue';
  import * as types from '../store/types';

  export default {
    name: 'jokesList',
    mounted() {
      this.$store.commit(types.CHANGE_NEW_JOKES_NUM, 0);
    },
    computed: {
      jokes() {
        return this.$store.getters.getJokes;
      }
    },
    components: {
      Joke
    },
  }
</script>

<style>
  .joke-list li {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>