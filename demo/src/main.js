import Vue from 'vue';
import App from './components/layout/app/app.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
	el: '#app',
	router,
	template: '<app/>',
	components: { App }
});
