import CONFIG from '@/config';
import axios from 'axios';

function getMovies(query, page = 1) {
    return axios.get(getEndpoint(query, page)).then(response => response.data);

    function getEndpoint(query, page) {
        return [
            CONFIG.URL,
            '/search/movie?',
            'api_key=' + CONFIG.API_KEY,
            '&language=es-ES',
            '&query=' + query,
            '&page=' + page,
            '&include_adult=false'
        ].join('');
    }
}

function getMovieById(id) {
    return axios.get(getEndpoint(id)).then(response => response.data);

    function getEndpoint(id) {
        return [
            CONFIG.URL,
            '/movie',
            '/' + id,
            '?api_key=' + CONFIG.API_KEY,
            '&language=' + CONFIG.LENGUAGE
        ].join('');
    }
}

export default { getMovies, getMovieById };