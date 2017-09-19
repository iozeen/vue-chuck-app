<template>
  <ul class="joke-list">
    <li v-for="joke in jokes">
      <Joke :jokeItem="joke"/>
        <!--<router-link :to="{ name: 'joke', params: { id: joke.id }}">-->
          <!--Edit-->
        <!--</router-link>-->
    </li>
  </ul>
</template>

<script>
  import Joke from './joke.vue';

  export default {
    name: 'jokesList',
    computed: {
      jokes() {
        return this.$store.getters.getJokes;
      }
    },
    components: {
      Joke
    }
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