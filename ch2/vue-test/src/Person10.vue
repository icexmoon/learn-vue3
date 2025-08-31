<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
    </div>
</template>

<script lang="ts" name="Person456" setup>
import { reactive,toRef } from 'vue'
const person = reactive({
    name: '张三',
    age: 18
})
let name = toRef(person, 'name')
let age  = toRef(person, 'age')

const changeName = () => {
    name.value += '~'
    console.log(name.value, person.name)
}
const changeAge = () => {
    age.value += 1
}
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