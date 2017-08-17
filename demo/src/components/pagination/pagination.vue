<template>
    <div class="pagination" v-if="totalPages !== 1">
        <button @click="goToPage(-1)">Anterior</button>
        <label>{{ page }}</label>
        <button @click="goToPage(1)">Posterior</button>
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
.pagination {
    width: 100%;
    text-align: center;
    padding: 0.5rem;
    margin: 0.5rem;
}
</style>


