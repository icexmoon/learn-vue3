<template>
    <!-- HTML -->
    <Person ref="person" :persons="persons"></Person>
</template>

<script setup lang="ts" name="App">
import Person from './Person6.vue'
import { reactive } from 'vue';
import {type PersonList} from '@/types'
const persons = reactive<PersonList>([{
    id: 1,
    name: '张三',
    age: 18
},{
    id: 2,
    name: '李四',
    age: 19
},
{
    id: 3,
    name: '王五',
    age: 20
}])
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