<script setup>
import ButtonClick from "./components/ButtonClick.vue"
import HelloWorld from "./components/HelloWorld.vue"
</script>

<template>
    <HelloWorld greeting="Hello World!" />
    <HelloWorld greeting="Do you like Vue ?" />
    <ButtonClick v-for="i in Array(10)" />
</template>