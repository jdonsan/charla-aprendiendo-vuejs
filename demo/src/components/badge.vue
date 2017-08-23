<template>
    <div class="badge">
        <span>
            <small>{{ label }}</small>
            {{ data }}
        </span>
    </div>
</template>

<script>
export default {
    name: 'badge',
    props: ['label', 'data']
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors';

.badge {
    background: $color-secondary;
    color: $color-basic;
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-right: 0.5rem;

    small {
        width: 100%;
        display: block;
        font-weight: bold;
    }
}
</style>


