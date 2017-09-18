<template>
  <div>
    <input type="text" placeholder="What are you looking for?" v-model="query">
    <button type="button" @click="search()" v-if="!loading">Search!</button>
    <button type="button" disabled="disabled" v-if="loading">Searching...</button>
    <div class="alert alert-danger" role="alert" v-if="error">
      <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
      {{ error }}
    </div>
    <ul>
      <li v-for="joke in jokes">{{joke.value}}</li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        jokes: [],
        loading: false,
        error: false,
        query: ''
      }
    },
    methods: {
      search: function () {
        console.log(this.query);
        // Clear the error message.
        this.error = '';
        // Empty the products array so we can fill it with the new products.
        this.products = [];
        // Set the loading property to true, this will display the "Searching..." button.
        this.loading = true;

        // Making a get request to our API and passing the query to it.
        axios.get('https://api.chucknorris.io/jokes/search?query=' + this.query).then((response) => {
          // If there was an error set the error message, if not fill the products array.
          response.data.total === 0 ? this.error = response.data.result : this.jokes = response.data.result;
          // The request is finished, change the loading to false again.
          this.loading = false;
          // Clear the query.
          this.query = '';
        });
      }
    }
  }
</script>