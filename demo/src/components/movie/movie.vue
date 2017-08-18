<template>
    <div class="movie">
        <div class="votes">
            <span v-if="voteCount !== 0">{{ voteAverage }}</span>
            <span v-else>--</span>
        </div>
        <div class="title">
            <h3>{{ title }}</h3>
        </div>
        <img v-if="posterPath" :src="'https://image.tmdb.org/t/p/w300' + posterPath" :alt="title" />
        <img v-else src="../../assets/img/nophoto.jpg" :alt="title" />
    </div>
</template>
<script>
export default {
    name: 'movie',
    props: ['title', 'posterPath', 'voteAverage', 'voteCount']
}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/_colors';
@import '../../assets/scss/_media';

$movie-width: 250px;
$movie-height: 400px;

.movie {
    position: relative;
    margin: 0.5rem;
    background: #222;
    width: $movie-width;
    height: $movie-height;
    box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.75); 

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
        background: $color-primary; // rgba(34, 34, 34, 0.7);
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

        h3 {
            text-align: center;
            font-size: 0.9rem;
        }
    }
}
</style>


