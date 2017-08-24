<template>
    <panel title="Detalle de la película">
        <subpanel v-if="movie" :title="movie.title">
            <div class="movie-poster">
                <img :src="posterComp" :alt="movie.title">
            </div>
            <div class="movie-detail">
                <ul class="movie-genres">
                    <li :key="genre.id" v-for="genre in movie.genres">{{ genre.name }}</li>
                </ul>

                <h4>Sinopsis</h4>
                <p>{{ movie.overview }}</p>

                <h4>Presupuesto</h4>
                <p>{{ movie.budget | currency }}</p>

                <div class="votes">
                    <badge label="Votos" :data="movie.vote_count" />
                    <badge label="Nota" :data="movie.vote_average" />
                </div>
            </div>
        </subpanel>
    </panel>
</template>

<script>
import Panel from '@/components/panel';
import Subpanel from '@/components/subpanel';
import Badge from '@/components/badge';
import api from '@/api';
import noPoster from '../assets/img/nophoto.jpg';

export default {
    name: 'detail-view',
    components: {
        Panel,
        Subpanel,
        Badge
    },
    props: ['movieId'],
    data() {
        return {
            movie: null
        }
    },
    created() {
        this.fetchData();
    },
    computed: {
        posterComp: function () {
            return !!this.movie.poster_path
                ? 'https://image.tmdb.org/t/p/w300' + this.movie.poster_path
                : noPoster;
        }
    },
    methods: {
        fetchData() {
            api.getMovieById(this.movieId).then(movie => this.movie = movie);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_media';
@import '../assets/scss/_colors';

.movie-poster {
    margin-bottom: 1rem;
    text-align: left;
    width: 100%;

    @media (min-width: $screen-md-min) {
        width: 40%
    }
}

.movie-detail {
    @media (min-width: $screen-md-min) {
        width: 60%;
    }
}

.movie-genres {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;

    li {
        display: inline-block;
        margin: 0 0.5rem 0.5rem 0;
        padding: 0.5rem 1rem;
        background: $color-light;
        color: $color-basic;
        font-weight: bold;
    }
}

.votes {
    display: flex;
    padding: 0.5rem 0;
}
</style>

