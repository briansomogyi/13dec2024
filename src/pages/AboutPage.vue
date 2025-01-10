<script setup>
import NavMenu from '../components/NavMenu.vue';
import router from '../router';
function nextPage() {
    router.push('/blog');
}
</script>

<template>
    <NavMenu />
    About Page
    <button @click="nextPage">Next</button>
</template>