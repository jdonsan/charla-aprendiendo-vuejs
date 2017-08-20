<template>
	<div id="app" class="app">
		<app-header></app-header>
		<app-container>
			<router-view></router-view>
		</app-container>
	</div>
</template>

<script>
import AppHeader from '@/components/navbar.vue';
import AppContainer from '@/components/container.vue';

export default {
	name: 'app',
	components: {
		AppHeader,
		AppContainer
	}
};
</script>

<style lang="scss">
@import '../assets/scss/main';

.app {
	font-family: 'Lato';
}

body {
	background: #eee;
}
</style>
