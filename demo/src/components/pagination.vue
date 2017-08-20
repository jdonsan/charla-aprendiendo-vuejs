<template>
    <div class="pagination" v-if="totalPages !== 1">
        <button v-if="page !== 1" @click="goToPage(-1)">&#60;</button>
        <label>{{ page }}</label>
        <button v-if="page !== totalPages" @click="goToPage(1)">&#62;</button>
    </div>
</template>

<script>
export default {
    name: 'pagination',
    props: ['page', 'totalPages'],
    methods: {
        goToPage(next) {
            this.$emit('page', this.page + next);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors';

.pagination {
    width: 100%;
    text-align: center;
    padding: 0.5rem;
    margin: 0.5rem;

    button {
        width: 3rem;
        height: 3rem;
        border: 0;
        background: $color-light;
        color: $color-basic;
        font-weight: bold;

        &:hover {
            cursor: pointer;
        }
    }

    label {
        width: 3rem;
        display: inline-block;
    }
}
</style>


