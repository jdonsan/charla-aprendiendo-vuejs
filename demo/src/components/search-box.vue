<template>
    <form class="search-box" @submit.prevent="search">
        <input type="text" placeholder="Ej. Cinema Paradiso" v-model="query" />
        <button>Buscar</button>
    </form>
</template>

<script>
export default {
    name: 'search-box',
    props: {
        value: { type: String, default: '' }
    },
    data() {
        return {
            query: this.value
        }
    },
    methods: {
        search() {
            this.$emit('search', this.query);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors';

$color-light-darken: darken($color-light, 15%);

.search-box {
    display: flex;
    height: 3rem;

    button,
    input {
        &:focus {
            outline: none;
        }
    }

    input {
        width: 100%;
        padding: 0 0.5rem;
        border: 1px solid $color-basic-2;
        border-right: 1px solid $color-light;
    }

    button {
        padding: 0 2rem;
        background: $color-light-darken;
        color: $color-basic;
        font-weight: bold;
        border: 1px solid $color-light-darken;

        &:hover {
            cursor: pointer;
            background: $color-light;
            border: 1px solid $color-light;
        }
    }
}
</style>

