<template>
	<app-main title="Busca tu película favorita">
		<search-box :value="queryDefault" @search="searchMovie"></search-box>
	</app-main>
</template>

<style src ="./view-home.scss" lang="scss" scoped></style>
<script src="./view-home.js"></script>
