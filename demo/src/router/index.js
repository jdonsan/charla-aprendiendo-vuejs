import Vue from 'vue';
import Router from 'vue-router';
import ViewHome from '@/components/view-home/view-home.vue';
import ViewAbout from '@/components/view-about/view-about.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: ViewHome
    },
    {
      path: '/about',
      name: 'about',
      component: ViewAbout
    }
  ]
})
