import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    projects: []
  },
  actions: {
    LOAD_PROJECT_LIST: function ({ commit }) {
        axios.get('https://api.chucknorris.io/jokes/search?query=games').then((response) => {
          commit('SET_PROJECT_LIST', { list: response.data.result })
        }, (err) => {
          console.log(err);
        })
    }
  },
  mutations: {
    SET_PROJECT_LIST: (state, { list }) => {
      state.projects = list;
      console.log('FIRED:', state.projects);
    }
  },
  getters: {
    openProjects: state => {
      return state.projects;
    }
  }
});

export default store;