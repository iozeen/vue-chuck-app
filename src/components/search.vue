<template>
  <div id="search-container">
    <div id="search-nav">
      <input type="text" placeholder="Chuck joke with word..." v-model="query">
      <button type="submit" @click="search" v-if="!loading">Search!</button>
      <div class="alert alert-danger" role="alert" v-if="error">
        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
        {{ error }}
      </div>
    </div>
    <div v-if="getError">{{getError}}</div>
    <div v-if="getNoJokes">Sorry, there are no jokes that contain given word!</div>
    <ul class="joke-list">
      <li v-for="joke in searchList">
        <Joke :jokeItem="joke" :search="true"/>
        <!--<button @click="addJoke(joke)">Add</button>-->
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios';
  import Joke from './joke.vue';
  import * as types from '../store/types';

  export default {
    data() {
      return {
        loading: false,
        error: false,
        query: '',
        err: ''
      }
    },
    components: {
      Joke
    },
    computed: {
      searchList() {
        return this.$store.getters.getSearchList;
      },
      getError() {
        return this.$store.getters.getError;
      },
      getNoJokes() {
        return this.$store.getters.getNoJokes;
      }
    },
    methods: {
//      search: function () {
//        console.log(this.query);
//        // Clear the error message.
//        this.error = '';
//        // Empty the products array so we can fill it with the new products.
//        this.products = [];
//        // Set the loading property to true, this will display the "Searching..." button.
//        this.loading = true;
//
//        // Making a get request to our API and passing the query to it.
//        axios.get('https://api.chucknorris.io/jokes/search?query=' + this.query).then((response) => {
//          // If there was an error set the error message, if not fill the products array.
//          response.data.total === 0 ? this.error = response.data.result : this.jokes = response.data.result;
//          // The request is finished, change the loading to false again.
//          this.loading = false;
//          // Clear the query.
//          this.query = '';
//        });
//      }
      search() {
        if (this.query !== '')
          return this.$store.dispatch(types.SEARCH_JOKES_LIST, this.query);
      },
    }
  }
</script>

<style>
  #search-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .joke-list li {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input, button {
    padding: 10px;
  }

  #search-nav {
    margin: 10px 0 20px;
  }
</style>