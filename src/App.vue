<script setup>
import { ref } from "vue";
import ButtonClick from "./components/ButtonClick.vue"
import HelloWorld from "./components/HelloWorld.vue"
import InputConversie from "./components/InputConversie.vue";

const total = ref(0);
function conversion(value) {
    total.value = value * 4.9750;
}
</script>

<template>
    <!-- <ButtonClick v-for="buttons in Array(5)" /> -->
    <!-- <ButtonClick :startCount="7" /> -->
    <!-- <ButtonClick :startCount="5" /> -->
    <!-- <ButtonClick :startCount="3" /> -->
    <br>
    <InputConversie :labelInput="'Suma pe care dorești sa o schimbi'" :currency="'EUR'" :disabled="false"
        @inputValue="conversion" />
    <br />
    <InputConversie :labelInput="'Valoare'" :currency="'RON'" :disabled="true" :total="total" />
</template>