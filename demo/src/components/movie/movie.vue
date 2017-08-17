<template>
    <div class="movie">
        <div class="title">
            <h3>{{ title }}</h3>
        </div>
        <img v-if="posterPath" :src="'https://image.tmdb.org/t/p/w185' + posterPath" :alt="title" />
    </div>
</template>
<script>
export default {
    name: 'movie',
    props: ['title', 'posterPath']
}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/_colors';
@import '../../assets/scss/_media';

.movie {
    position: relative;
    width: 180px;
    height: 278px;
    margin: 0.5rem;

    img {
        display: block;
        width: 180px;
        height: 278px;
        margin: 0 auto;
    }

    .title {
        position: absolute;
        display: flex;
        background: rgba(34, 34, 34, 0.7);
        align-items: center;
        justify-content: center;
        width: 180px;
        height: 278px;
        z-index: 2;
        color: $color-basic;
        margin: 0;
        padding: 0.5rem;
        box-sizing: border-box;

        h3 {
            text-align: center;
            font-size: 0.9rem;
        }
    }
}
</style>


