<script setup>
import NavMenu from '../components/NavMenu.vue';
import router from '../router';
function nextPage() {
    router.push('/');
}
</script>

<template>
    <NavMenu />
    Get a Quote Page
    <button @click="nextPage">Next</button>
</template>