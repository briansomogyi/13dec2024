<script setup>
defineProps(['greeting'])
</script>
<template>
    <p>{{ greeting }}</p>
</template>
<style>
p {
    color: red;
    font-weight: bold;
}
</style>