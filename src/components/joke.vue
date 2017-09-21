<template>
  <div class="joke">
    <div class="joke-icon">
      <img :src="jokeItem.icon_url"/>
    </div>
    <div class="joke-content">
      <div class="joke-category">
        {{random ? '#random: ' : ''}}{{jokeItem.category ? jokeItem.category[0] : 'no category'}}
        <div>
          <router-link :to="{ name: 'joke', params: { id: jokeItem.id }}" v-if="!random&&!search" class="edit">
            <icon name="pencil"></icon>
          </router-link>

          <a @click="addJoke(jokeItem)" v-if="search||random" class="add"><icon name="plus"></icon></a>
          <a @click="deleteJoke(jokeItem.id)" v-if="!random&&!search" class="delete"><icon name="trash"></icon></a>
        </div>
      </div>
      <div class="joke-text">{{jokeItem.value}}</div>
    </div>
  </div>
</template>

<script>
  import * as types from '../store/types';
  import { mapGetters } from 'vuex';
  import * as Icon from 'vue-awesome';

  export default {
    name: 'joke',
    props: ['jokeItem', 'random', 'search'],
    methods: {
      addJoke(joke) {
        return this.$store.commit(types.ADD_JOKE, joke);
      },
      deleteJoke(jokeId) {
        this.$emit('onDelete');
        return this.$store.commit(types.DELETE_JOKE, jokeId);
      }
    },
    components:{
      'icon': Icon
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
    position: relative;
  }

  .joke-category {
    padding: 10px;
    border: 1px solid #d1d5da;
    color: #586069;
    font-weight: bold;
    background: #f6f8fa;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .joke-text {
    padding: 10px;
    border: 1px solid #d1d5da;
    border-top: none;
  }

  .right {
    position: absolute;
  }


  a {
    text-decoration: none;
    color: #586069;
    cursor: pointer;
    padding: 5px;
    margin: 0 10px;
    transition: all .2s;
  }

  a.edit:hover{
    color: #00b0ff;
  }

  a.add:hover{
    color: #00c853;
  }

  a.delete:hover{
    color: #e53935;
  }

</style>