<template>
  <div>
    <div>{{jokeItem.category}}</div>
    <div>{{jokeItem.value}} </div>
    <img src=""/>
  </div>
</template>

<script>
  export default {
    name: 'joke',
    props: ['jokeItem']
  }

</script>