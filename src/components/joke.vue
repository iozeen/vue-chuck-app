<template>
  <div class="joke">
    <div class="joke-icon">
      <img :src="jokeItem.icon_url"/>
    </div>
    <div class="joke-content">
      <div class="joke-category">
        {{random ? '#random: ' : ''}}{{jokeItem.category ? jokeItem.category[0] : 'no category'}}

        <router-link :to="{ name: 'joke', params: { id: jokeItem.id }}" v-if="!random">
          Edit
        </router-link>

        <button @click="addJoke(jokeItem)" v-if="search">Add</button>
      </div>
      <div class="joke-text">{{jokeItem.value}} </div>
    </div>
  </div>
</template>

<script>
  import * as types from '../store/types';
  import { mapGetters } from 'vuex';

  export default {
    name: 'joke',
    props: ['jokeItem', 'random', 'search'],
    methods: {
      addJoke(joke) {
        return this.$store.commit(types.ADD_JOKE, joke);
      }
    }
  }

</script>



<style scoped>
  .joke {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 800px;
    margin-bottom: 10px;
    font-size: 14px;
  }

  .joke-content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .joke-category {
    padding: 10px;
    border: 1px solid #d1d5da;
    color: #586069;
    font-weight: bold;
    background: #f6f8fa;
  }

  .joke-text {
    padding: 10px;
    border: 1px solid #d1d5da;
    border-top: none;
  }

</style>