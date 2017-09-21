<template>
  <div id="nav">
    <router-link to="/" class="nav-link" active-class="active" exact>Home</router-link>
    <router-link to="/jokes" active-class="active" class="nav-link list">
      <div>Favourite jokes</div>
      <div id="number" :class="{active: items}">{{items}}</div>
    </router-link>
    <router-link to="/search" active-class="active" class="nav-link">Search</router-link>
  </div>
</template>

<script>
  export default {
    computed: {
      items(){
        return this.$store.getters.getNewItems;
      }
    }
  }
</script>
<style>
  #nav {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    font-size: 16px;
    margin-bottom: 10px;

  }

  a {
    text-decoration: none;
  }

  .nav-link {
    padding: 20px;
    border-bottom: 1px solid #d1d5da;
    transition: all .2s;
    color: #858d97;
    position: relative;
  }

  .nav-link.list {
    display: flex;
  }

  .nav-link:hover {
    border-bottom: 1px solid #a0a4a8;
    color: #2f363e;
  }

  .nav-link.active {
    border-bottom: 1px solid #a0a4a8;
    color: #2f363e;
  }

  #number {
    min-width: 10px;
    padding: 0 5px;
    opacity: 0;
    transition: all .3s;
    position: absolute;
    top: 10px;
    right: 0;
    font-size: 12px;
  }

  #number.active {
    opacity: 1;
  }
</style>