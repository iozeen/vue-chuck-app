import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import * as types from './types';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    jokes: [],
    searchList: [],
    error: '',
    noJokes: false,
    loadedJoke: {},
    randomJoke: {}
  },
  actions: {
    [types.RANDOM_JOKE]: function ({ commit }) {
      axios.get('https://api.chucknorris.io/jokes/random').then((response) => {
        commit(types.RANDOM_JOKE, { joke: response.data });
      }, (err) => {
        commit(types.ERROR, err);
      });
    },
    [types.LOAD_JOKES_LIST]: function ({ commit }) {
      axios.get('https://api.chucknorris.io/jokes/search?query=games').then((response) => {
        if (response.data.total === 0) {
          commit(types.NO_JOKES);
        } else {
          let list = response.data.result.map(item => {
            if (item.category === null) {
              item.category = ['no category'];
            }
            return item;
          });
          console.log(list);
          commit(types.SET_JOKES_LIST, { list: list.slice(0, 20) });
        }
      }, (err) => {
        commit(types.ERROR, err);
      });
    },
    [types.LOAD_JOKE]: function ({ commit }, jokeId) {
      commit(types.LOAD_JOKE, jokeId);
    },
    [types.SEARCH_JOKES_LIST]: function ({ commit }, query) {
      axios.get('https://api.chucknorris.io/jokes/search?query=' + query).then((response) => {
        if (response.data.total === 0) {
          commit(types.NO_JOKES);
        } else {
          let list = response.data.result.map(item => {
            if (item.category === null) item.category = ['no category'];
            return item;
          });
          commit(types.SEARCH_JOKES_LIST, { list: list.slice(0, 20) });
        }
      }, (err) => {
        commit(types.ERROR, err);
      });
    },
    [types.DELETE_JOKE]: function({commit}, jokeId){
      commit(types.DELETE_JOKE, jokeId);
    }
  },
  mutations: {
    [types.RANDOM_JOKE]: (state, { joke }) => {
      state.randomJoke = joke;
    },
    [types.SET_JOKES_LIST]: (state, { list }) => {
      state.jokes = list;
      state.error = '';
      state.noJokes = false;
    },
    [types.LOAD_JOKE]: (state, jokeId) => {
      state.loadedJoke = state.jokes[state.jokes.findIndex((item) => item.id === jokeId)];
    },
    [types.SEARCH_JOKES_LIST]: (state, { list }) => {
      state.searchList = list;
      state.error = '';
      state.noJokes = false;
    },
    [types.ADD_JOKE]: (state, joke) => {
      state.searchList.splice(state.searchList.indexOf(joke), 1);
      state.jokes.unshift(joke);
    },
    [types.EDIT_JOKE]: (state, newJoke) => {
      state.jokes = state.jokes.filter(item => {
        if (item.id === newJoke.id) console.log(item.value);
        return item.id !== newJoke.id;
      });
      state.jokes.unshift(newJoke);
    },
    [types.ERROR]: (state, err) => {
      state.error = err;
      state.noJokes = false;
    },
    [types.NO_JOKES]: (state) => {
      state.searchList = [];
      state.noJokes = true;
      state.error = '';
    },
    [types.DELETE_JOKE]: (state, jokeId) => {
      state.jokes.splice(state.jokes.findIndex((item) => item.id === jokeId),1);
    }
  },
  getters: {
    getJokes: state => {
      return state.jokes;
    },
    getJokeById: (state) => {
      return id => state.jokes.find(joke => {
        return joke.id === id;
      });
    },
    getSearchList: (state) => {
      return state.searchList;
    },
    getError: (state) => {
      return state.error;
    },
    getNoJokes: (state) => {
      return state.noJokes;
    },
    getLoadedJoke: (state) => {
      return state.loadedJoke;
    },
    randomJoke: (state) => {
      return state.randomJoke;
    }
  }
});

export default store;