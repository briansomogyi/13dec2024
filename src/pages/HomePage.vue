<script setup>
import NavMenu from '../components/NavMenu.vue';
import router from '../router';
function nextPage() {
    router.push('/media');
}
</script>

<template>
    <NavMenu />
    HomePage
    <button @click="nextPage">Next</button>
</template>