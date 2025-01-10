<script setup>
import NavMenu from '../components/NavMenu.vue';
import router from '../router';
function nextPage() {
    router.push('/shop');
}
</script>

<template>
    <NavMenu />
    Media Page
    <button @click="nextPage">Next</button>
</template>