<template>
    <!-- HTML -->
    <h1 id="city">Hello World</h1>
    <Person ref="person"></Person>
    <button @click="showPerson">show person</button>
</template>

<script setup lang="ts" name="App">
import Person from './Person4.vue'
import { ref } from 'vue'
const person = ref()
const showPerson = () => {
    console.log(person.value)
    person.value.showDom()
}
</script>

<style scoped>
/* css 样式 */
body {
    margin: 0;
    background-color: #f8f9fa;
}

.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

h1 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 3.5rem;
    font-weight: 300;
    color: #343a40;
    padding: 20px 40px;
    border: 2px solid #dee2e6;
    border-radius: 8px;
    background: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

h1:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}
</style>