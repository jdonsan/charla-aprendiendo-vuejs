<template>
	<app-main title="Busca tu película favorita">
		<search-box value="Cinema Paradiso" @search="searchMovie"></search-box>
		<div v-if="movies">
			<label>{{movies}}</label>
		</div>
		<div v-else>
			<h3>Selecciona una película</h3>
		</div>
	</app-main>
</template>
<script src="./view-home.js"></script>
