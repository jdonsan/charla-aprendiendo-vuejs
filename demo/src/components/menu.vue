<template>
    <ul class="menu">
        <li>
            <router-link to="/">Home</router-link>
        </li>
        <li>
            <router-link to="/about">Acerca de</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'menu'
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/_media';
@import '../assets/scss/_colors';

.menu {
    display: none;
    list-style: none;
    margin: 0;
    padding: 0;

    @media (min-width: $screen-md-min) {
        display: block;
        margin: -0.5rem 0;

        li,
        a {
            display: inline-block;
        }

        a {
            color: $color-basic;
            text-decoration: none;
            padding: 1.5rem 1rem;

            &:hover {
                cursor: pointer;
                background: $color-light;
                color: $color-primary;
            }
        }
    }
}
</style>

