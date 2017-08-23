<template>
	<div class="container">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'container'
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/_media';

.container {
	margin: 0 0.5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 0;

	@media (min-width: $screen-md-min) {
		max-width: 992px;
		margin: 0 auto;
	}
}
</style>