<template>
    <div class="subpanel">
        <h3>{{ title }}</h3>
        <div class="subpanel-container">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'panel',
    props: ['title']
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors';

.subpanel {
    h3 {
        font-weight: lighter;
        margin: 1rem 0 2rem 0;
        padding: .5rem 0;
        border-bottom: 1px solid $color-basic-2;
        color: $color-basic-2;
    }

    .subpanel-container {
        margin-top: 1rem;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
}
</style>

