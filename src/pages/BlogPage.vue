<script setup>
import NavMenu from '../components/NavMenu.vue';
import router from '../router';
function nextPage() {
    router.push('/getQuote');
}
</script>

<template>
    <NavMenu />
    Blogs Page
    <button @click="nextPage">Next</button>
</template>