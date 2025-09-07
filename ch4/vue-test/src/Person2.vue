<template>
    <div class="person">
        <h1>中国</h1>
        <h2 ref="city">北京</h2>
        <h3>大兴区</h3>
        <button @click="showDom">显示dom元素</button>
    </div>
</template>

<script setup lang="ts" name="Person">
import { ref } from 'vue'
const city = ref()
const showDom = () => {
    console.log(city.value)
}

defineExpose({
    showDom
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