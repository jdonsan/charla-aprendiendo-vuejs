<template>
    <panel title="Tu película favorita">
        
    </panel>
</template>

<script>
import Panel from '@/components/panel';
import Movie from '@/components/movie';
import axios from 'axios';

export default {
    name: 'detail-view',
    components: {
        Panel
    },
    props: ['movieId'],
    data() {
        return {
            movie: null
        }
    },
    created () {
        this.fetchData();
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData () {
            const url =`https://api.themoviedb.org/3/movie/${this.movieId}?api_key=c0604ef7ca06da2a0c0f7796b107eab3&language=es-ES`;
            axios.get(url)
                .then(response => response.data)
                .then(movie => this.movie = movie);
        }
  }
}
</script>

