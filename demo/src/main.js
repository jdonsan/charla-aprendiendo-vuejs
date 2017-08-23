import Vue from 'vue';
import App from './layouts/app.vue';
import Vue2Filters from 'vue2-filters'
import router from './router';

Vue.use(Vue2Filters);
Vue.config.productionTip = false;

new Vue({
	el: '#app',
	router,
	template: '<app/>',
	components: { App }
});
