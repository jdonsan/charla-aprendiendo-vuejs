<template>
	<div class="error">
		<h3>{{ message }}</h3>
	</div>
</template>

<script>
export default {
	name: 'error',
	props: ['message']
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors';

.error {
	background: $color-basic-2;
	text-align: center;
	padding: 0.5rem;
	border-radius: 5px;
	margin: 1rem 0;

	h3 {
		font-size: 0.9rem;
		font-weight: lighter;
		color: $color-secondary;
	}
}
</style>

