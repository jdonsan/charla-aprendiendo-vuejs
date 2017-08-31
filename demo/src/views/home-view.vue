<template>
	<panel title="Busca tu película favorita">
		<search-box @search="searchMovie" />
		<subpanel v-if="movies" :title="'Se han encontrado ' + movies.total_results + ' resultados'">
            <movie 
				v-for="movie in movies.results" 
				:key="movie.id"
                :id="movie.id" 
				:title="movie.title" 
				:posterPath="movie.poster_path" 
				:voteAverage="movie.vote_average"
				:voteCount="movie.vote_count"
			 />
			<pagination 
				:page="movies.page" 
				:totalPages="movies.total_pages"
				@page="searchMovieByPage" 
			/>
		</subpanel>
		<error v-else-if="error" :message="error.message" />
	</panel>
</template>

<script>
import SearchBox from '@/components/search-box';
import Panel from '@/components/panel';
import Error from '@/components/error';
import Subpanel from '@/components/subpanel';
import Pagination from '@/components/pagination';
import Movie from '@/components/movie';
import api from '@/api';

const components = {
    SearchBox,
    Panel,
    Error,
    Subpanel,
    Pagination,
    Movie
};

const data = function () {
    return {
        movies: null,
        error: null,
        query: ''
    }
}

const methods = {    
    searchMovie(query, page) {
        this.resetData();
        this.query = query;

        api.getMovies(query, page)
            .then(movies => this.movies = movies)
            .catch(error => this.error = error);
    },
    searchMovieByPage(page) {
        this.searchMovie(this.query, page);
    },
    resetData() {
        this.movies = null;
        this.error = null;
    }
}

export default {
    name: 'home-view',
    components,
    data,
    methods
}
</script>
