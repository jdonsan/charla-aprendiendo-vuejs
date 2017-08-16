<template>
    <div class="search-box">
        <input type="text" placeholder="Indica una película" v-model="query" />
        <button @click="search">Buscar</button>
    </div>
</template>
<script src="./search-box.js"></script>
<style src="./search-box.scss" lang="scss" scoped></style>

