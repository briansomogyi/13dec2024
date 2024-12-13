<script setup>
import { ref } from "vue";
const props = defineProps(["startCount"])
const clicks = ref(props.startCount);
function countClicks() {
  clicks.value++;
}
</script>

<template>
  <button type="button" @click="countClicks">Count {{ clicks }}</button>
</template>