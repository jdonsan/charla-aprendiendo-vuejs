import SearchBox from '@/components/search-box/search-box.vue';
import AppMain from '@/components/app-main/app-main.vue';
import axios from 'axios';

export default {
    name: 'view-home',
    components: {
        AppMain,
        SearchBox
    },
    data() {
        return {
            movies: null
        }
    },
    methods: {
        createURL(query) {
            return [
                'https://api.themoviedb.org/3/search/movie?',
                'api_key=c0604ef7ca06da2a0c0f7796b107eab3',
                '&language=es-ES',
                '&query=' + query,
                '&page=1',
                '&include_adult=false'
            ].join('');
        },
        searchMovie(query) {
            axios.get(this.createURL(query))
                .then((movies) => this.movies = movies)
                .catch();
        }
    }
}