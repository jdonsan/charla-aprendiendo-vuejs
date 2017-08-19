<template>
    <form class="search-box" @submit.prevent="search">
        <input type="text" placeholder="Ej. Cinema Paradiso" v-model="query" />
        <button>Buscar</button>
    </form>
</template>
<script src="./search-box.js"></script>
<style src="./search-box.scss" lang="scss" scoped></style>

