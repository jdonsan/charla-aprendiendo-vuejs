<template>
    <div class="panel">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'panel'
}
</script>
<style lang="scss" scoped>
.panel {
    margin-top: 1rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
</style>

