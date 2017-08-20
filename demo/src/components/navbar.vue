<template>
    <header class="navbar">
        <app-container>
            <h1>Codenares Paradiso</h1>
            <app-menu></app-menu>
        </app-container>
    </header>
</template>

<script>
import AppContainer from '@/components/container';
import AppMenu from '@/components/menu';

export default {
    name: 'navbar',
    components: {
        AppContainer,
        AppMenu
    }
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors';

.navbar {
    background: $color-primary;
    color: $color-basic;
    box-shadow: 0px 0px 26px -3px rgba(34, 34, 34, 1);

    h1 {
        margin: 0;
        padding: 0;
        font-size: 1.5rem;
    }
}
</style>


