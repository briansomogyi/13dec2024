<script setup>
import NavMenu from '../components/NavMenu.vue';
import router from '../router';
function nextPage() {
    router.push('/aboutpage');
}
</script>

<template>
    <NavMenu />
    Shop Page
    <button @click="nextPage">Next</button>
</template>