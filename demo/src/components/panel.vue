<template>
	<main class="panel">
		<h2>{{ title }}</h2>
		<slot></slot>
	</main>
</template>

<script>
export default {
	name: 'panel',
	props: ['title']
}
</script>

<style lang="scss" scoped>
.panel {
	width: 100%;

	h2 {
		font-weight: lighter;
		margin: 1rem 0 1.5rem;
	}
}
</style>

