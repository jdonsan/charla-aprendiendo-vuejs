import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '@/views/home-view.vue';
import AboutView from '@/views/about-view.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})
