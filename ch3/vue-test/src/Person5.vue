<template>
    <div class="person">
        {{ total }}
        <br></br>
        <button @click="totalIncrease">点我+1</button>
    </div>
</template>

<script setup lang="ts" name="Person">
import { ref,watch } from 'vue'
const total = ref(0)
const totalIncrease = () => {
    total.value += 1
}
const stopWatch = watch(total, (newValue, oldValue) => {
    console.log(newValue, oldValue)
    if (newValue > 10) {
        stopWatch()
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