<template>
  <div class="joke-container">
    <div v-if="joke" class="joke">
      <div class="joke-icon">
        <img :src="joke.icon_url"/>
      </div>
      <div class="joke-content">
        <div class="joke-category" v-if="!triggerCategory">
          <span>{{joke.category[0]}}</span>
          <div>
            <a @click="toggleCategory" class="edit">
              <icon name="pencil"></icon>
            </a>
          </div>
        </div>
        <div class="joke-category" v-if="triggerCategory">
          <input type="text" :value="joke.category[0]" @change="editCategory">
          <a @click="toggleCategory" class="edit">
            <icon name="pencil"></icon>
          </a>
        </div>
        <div class="joke-text" v-if="!triggerValue">{{joke.value}}
          <a @click="toggleValue" class="edit">
            <icon name="pencil"></icon>
          </a>
        </div>
        <div class="joke-text" v-if="triggerValue">
          <textarea
            type="text"
            :value="joke.value"
            @change="editValue"
            maxlength="400"
            id="text-area"
          >{{joke.value}}</textarea>
          <a @click="toggleValue" class="edit">
            <icon name="pencil"></icon>
          </a>
        </div>
      </div>
    </div>
    <div v-else>Loading</div>
  </div>
</template>

<script>
  import * as types from '../store/types';
  import { mapState, mapActions } from 'vuex';
  import * as Icon from 'vue-awesome';

  export default {
    name: 'editJoke',
    data() {
      return {
        triggerCategory: false,
        triggerValue: false
      }
    },
    created() {
      this.loadJoke();
    },
    computed: {
      joke() {
        return this.$store.getters.getLoadedJoke;
      },
      jokes() {
        return this.$store.getters.getJokes;
      }
    },
    watch: {
      joke() {
        if (!this.joke) {
          this.loadJokes();
          this.loadJoke();
        }
        return this.$store.getters.getLoadedJoke;
      }
    },
    methods: {
      loadJoke() {
        return this.$store.dispatch(types.LOAD_JOKE, this.$route.params.id);
      },
      loadJokes() {
        return this.$store.dispatch(types.LOAD_JOKES_LIST);
      },
      editJoke(joke) {
        this.$store.commit(types.EDIT_JOKE, joke);
      },
      editCategory(e) {
        this.joke.category[0] = e.target.value;
      },
      toggleCategory() {
        this.triggerCategory = !this.triggerCategory;
      },
      editValue(e) {
        this.joke.value = e.target.value;
      },
      toggleValue() {
        this.triggerValue = !this.triggerValue;
      }
    },
    components: {
      'icon': Icon
    }
  }

</script>

<style scoped>
  .joke-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .joke {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 800px;
  }

  .joke-content {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .joke-category {
    padding: 10px;
    border: 1px solid #d1d5da;
    color: #586069;
    font-weight: bold;
    background: #f6f8fa;
    display: flex;
  }

  .joke-text {
    padding: 10px;
    border: 1px solid #d1d5da;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #text-area {
    resize: none;
    width: 100vh;
    height: 100px;
    padding: 5px;
  }

  #save-btn {
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    margin: 10px;
    cursor: pointer;
    background: #b2ff59;
    transition: all .3s;
    padding: 10px;
    outline: none;
  }

  #save-btn:hover {
    background: #7ecb20;
  }

  a {
    cursor: pointer;
    transition: all .2s;
    padding: 5px;
    margin: 0 10px;
  }

  a.edit:hover {
    color: #00b0ff;
  }

</style>