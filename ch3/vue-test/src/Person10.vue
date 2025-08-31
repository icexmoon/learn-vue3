<template>
    <div class="person">
        <h2>水位:{{ height }}</h2>
        <h2>水温:{{ temp }}</h2>
        <button @click="changeHeight">提高水位</button>
        <button @click="changeTemp">提高水温</button>
    </div>
</template>

<script setup lang="ts" name="Person">
import { ref, watch } from 'vue'
const temp = ref(0)
const height = ref(0)
const changeHeight = () => {
    height.value += 10
}
const changeTemp = () => {
    temp.value += 10
}
watch([height, temp], (newValue, oldValue) => {
    const [newHeight, newTemp] = newValue
    if (newHeight > 100 || newTemp > 50) {
        console.log('水温或水位已经达到阈值')
    }
})
</script>

<style scoped>
.person {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.5rem;
    font-weight: 300;
    color: #343a40;
    padding: 20px 40px;
    border: 2px solid #dee2e6;
    border-radius: 8px;
    background: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}
</style>