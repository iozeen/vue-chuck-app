import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store/store';


import App from './App.vue';
import Home from './components/home.vue';
import JokesList from './components/jokesList.vue';
import Joke from './components/joke.vue';
import Search from './components/search.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/jokes', component: JokesList },
  { path: '/jokes/:id', component: Joke },
  { path: '/search', component: Search },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  components: {
    App
  }
})
