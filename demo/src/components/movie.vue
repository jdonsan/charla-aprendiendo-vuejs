<template>
    <router-link class="movie" :to="{ name: 'movie-detail', params: { movieId: id }}">
        <span class="votes">{{ voteAverageComp }}</span>
        <img :src="posterComp" :alt="title" />
        <h3 class="title">{{ title }}</h3>
    </router-link>
</template>

<script>
import noPoster from '../assets/img/nophoto.jpg';

export default {
    name: 'movie',
    props: ['title', 'posterPath', 'voteAverage', 'voteCount', 'id'],
    computed: {
        voteAverageComp: function () {
            return this.voteCount === 0 ? '--' : this.voteAverage;
        },
        posterComp: function () {
            return !!this.posterPath
                ? 'https://image.tmdb.org/t/p/w300' + this.posterPath
                : noPoster;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors';

$movie-width: 250px;
$movie-height: 400px;

.movie {
    position: relative;
    margin: 0.5rem;
    background: #222;
    width: $movie-width;
    height: $movie-height;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.75);
    transition: 0.2s;

    &:hover {
        box-shadow: 0px 2px 40px 0px rgba(0, 0, 0, 0.75);
        margin-top: 0.2rem;
        cursor: pointer;
    }

    img {
        display: block;
        width: 100%;
        height: $movie-height;
        margin: 0 auto;
    }

    .votes {
        position: absolute;
        right: 0;
        width: 3rem;
        height: 3rem;
        background: $color-light;
        color: $color-basic;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.1rem;
        font-weight: bold;
    }

    .title {
        position: absolute;
        display: flex;
        background: $color-primary;
        align-items: center;
        justify-content: center;
        height: 3rem;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 2;
        color: $color-basic;
        margin: 0;
        padding: 0.5rem;
        box-sizing: border-box;
        opacity: 0.8;
        text-align: center;
        font-size: 0.9rem;
    }
}
</style>


