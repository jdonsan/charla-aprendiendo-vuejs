<template>
	<app-main title="Busca tu película favorita">
		<search-box @search="searchMovie" />
		<panel v-if="movies">
			<movie v-for="movie in movies.results" :key="movie.id" :title="movie.title" :posterPath="movie.poster_path" />
			<pagination :page="movies.page" :totalPages="movies.total_pages" @page="searchMovieByPage" />
		</panel>
		<panel-error v-else-if="error" :message="error.message" />
	</app-main>
</template>
<script src="./view-home.js"></script>
