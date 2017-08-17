import SearchBox from '@/components/search-box/search-box.vue';
import AppMain from '@/components/app-main/app-main.vue';
import PanelError from '@/components/panel-error/panel-error.vue';
import Panel from '@/components/panel/panel.vue';
import Pagination from '@/components/pagination/pagination.vue';
import Movie from '@/components/movie/movie.vue';
import axios from 'axios';

const components = {
    AppMain,
    SearchBox,
    PanelError,
    Panel,
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
    createURL(query, page) {
        return [
            'https://api.themoviedb.org/3/search/movie?',
            'api_key=c0604ef7ca06da2a0c0f7796b107eab3',
            '&language=es-ES',
            '&query=' + query,
            '&page=' + page,
            '&include_adult=false'
        ].join('');
    },
    searchMovie(query, page = 1) {
        this.resetData();
        this.query = query;

        axios.get(this.createURL(query, page))
            .then(response => response.data)
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
    name: 'view-home',
    components,
    data,
    methods
}