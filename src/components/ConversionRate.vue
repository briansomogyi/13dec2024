<script setup>
const props = defineProps(["changeAmount"])
const emit = defineEmits(["doConversion"])

import { ref, watch } from "vue";

const conversionRate = ref(4.9750)
const rateCollor = ref('gray');

watch(() => props.changeAmount, (newValue, oldValue) => {
    console.log("newValue", newValue)
    if (Number(newValue) > 100000) {
        conversionRate.value = 4.9780
        rateCollor.value = 'red'
    } else {
        if (Number(newValue) > 10000) {
            conversionRate.value = 4.9770
            rateCollor.value = 'blue'
        } else {
            if (Number(newValue) > 1000) {
                conversionRate.value = 4.9760
                rateCollor.value = 'yellow'
            } else {
                if (Number(newValue) > 100) {
                    conversionRate.value = 4.9750
                    rateCollor.value = 'green'
                } else {
                    conversionRate.value = 4.9740
                    rateCollor.value = 'gray'
                }
            }
        }
    }

    emit("doConversion", conversionRate.value)
})
</script>

<template>
    <div class="conversion-value" :style="'background-color: ' + rateCollor + ';'">
        {{ conversionRate }}
    </div>
</template>

<style>
.conversion-value {
    display: flex;
    justify-content: center;
    align-self: middle;
    margin: 2rem 0;
    padding: 0.5rem;
    background-color: grey;
    border-color: black;
    border-radius: 2rem;
    border-width: 2px;
}
</style>