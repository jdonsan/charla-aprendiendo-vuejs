<template>
    <panel title="Detalle de la película">
        <subpanel v-if="title" :title="title">
            <div class="movie-poster">
                <img :src="posterComp" :alt="title">
            </div>
            <div class="movie-detail">
                <ul class="movie-genres">
                    <li :key="genre.id" v-for="genre in genres">{{ genre.name }}</li>
                </ul>

                <h4>Sinopsis</h4>
                <p>{{ overview }}</p>

                <h4>Presupuesto</h4>
                <p>{{ budget | currency }}</p>

                <div class="votes">
                    <badge label="Votos" :data="voteCount" />
                    <badge label="Nota" :data="voteAverage" />
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
import posterMixin from '@/mixins/poster';

export default {
    name: 'detail-view',
    mixins: [posterMixin],
    components: {
        Panel,
        Subpanel,
        Badge
    },
    props: ['movieId'],
    data() {
        return {
            title: '',
            overview: '',
            posterPath: '',
            voteAverage: '',
            voteCount: '',
            budget: 0
        }
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            api.getMovieById(this.movieId).then(this.setData);
        },
        setData(movie) {
            this.title = movie.title;
            this.overview = movie.overview;
            this.posterPath = movie.poster_path;
            this.voteAverage = movie.vote_average;
            this.voteCount = movie.vote_count;
            this.budget = movie.budget;
            this.genres = movie.genres;
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_media";
@import "../assets/scss/_colors";

.movie-poster {
  margin-bottom: 1rem;
  text-align: left;
  width: 100%;

  @media (min-width: $screen-md-min) {
    width: 40%;
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

