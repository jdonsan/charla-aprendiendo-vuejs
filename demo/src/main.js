import Vue from 'vue';
import App from './layouts/app.vue';
import router from './router';
import filters from './plugins/filters';

Vue.use(filters);
Vue.config.productionTip = false;

new Vue({
	el: '#app',
	router,
	template: '<app/>',
	components: { App }
});
