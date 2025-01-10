<script setup>
import { ref } from "vue";
import ButtonClick from "./components/ButtonClick.vue"
import HelloWorld from "./components/HelloWorld.vue"
import InputConversie from "./components/InputConversie.vue";
import ConversionRate from "./components/ConversionRate.vue";

const total = ref(0);
const changeAmount = ref(0);

function inputAmount(value) {
    changeAmount.value = value;
    // total.value = value * 4.9750;
}

function conversion(rate) {
    console.log("conversion", rate);
    total.value = changeAmount.value * rate;
}
</script>

<template>
    <!-- <ButtonClick v-for="buttons in Array(5)" /> -->
    <!-- <ButtonClick :startCount="7" /> -->
    <!-- <ButtonClick :startCount="5" /> -->
    <!-- <ButtonClick :startCount="3" /> -->
    <br>
    <div class="conversion-line">
        <InputConversie :labelInput="'Suma pe care dorești sa o schimbi'" :currency="'EUR'" :disabled="false"
            @inputValue="inputAmount" />
        <ConversionRate :changeAmount="changeAmount" @doConversion="conversion" />
        <InputConversie :labelInput="'Valoare'" :currency="'RON'" :disabled="true" :total="total" />
    </div>
</template>

<style scoped>
.conversion-line {
    display: flex;
}
</style>