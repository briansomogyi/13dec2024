<script setup>
defineProps(['labelInput', 'currency', 'disabled', 'total'])
const emit = defineEmits(['inputValue'])

function eventHandler(event) {
    emit('inputValue', event.target.value)
}

</script>

<template>
    <label for="valoare">{{ labelInput }}</label><br />
    <input type="text" id="valoare" :disabled="disabled" :value="total" @input="eventHandler"><span>{{ currency
        }}</span>
</template>