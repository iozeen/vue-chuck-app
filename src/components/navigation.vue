<template>
  <div id="nav">
    <router-link to="/" class="nav-link" active-class="active" exact>Home</router-link>
    <router-link to="/jokes" active-class="active" class="nav-link">Favourite jokes</router-link>
    <router-link to="/search" active-class="active" class="nav-link">Search</router-link>
  </div>
</template>

<style>
  #nav{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    font-size: 16px;
    margin-bottom: 10px;
  }

  a{
    text-decoration: none;
  }

  .nav-link {
    padding: 20px;
    border-bottom: 1px solid #d1d5da;
    transition: all .2s;
    color: #858d97;
  }

  .nav-link:hover{
    border-bottom: 1px solid #a0a4a8;
    color: #2f363e;
  }

  .nav-link.active{
    border-bottom: 1px solid #a0a4a8;
    color: #2f363e;
  }
</style>