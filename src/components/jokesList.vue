<template>
  <div>
    <ul>
      <li v-for="item in projects">{{item}}</li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'jokesList',
    computed: mapState([
      'projects'
    ])
  }
</script>