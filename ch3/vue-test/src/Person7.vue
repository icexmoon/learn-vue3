<template>
    <div class="person">
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改整个人</button>
    </div>
</template>

<script setup lang="ts" name="Person">
import { reactive, watch } from 'vue'
const person = reactive({
    name: '张三',
    age: 18
})
const changeName = () => {
    person.name += '~'
}
const changeAge = () => {
    person.age += 1
}
const changePerson = () => {
    Object.assign(person, {
        name: '王五',
        age: 20
    })
}
watch(person, (newValue, oldValue) => { 
    console.log('oldValue', oldValue)
    console.log('newValue', newValue)
},{deep: false})
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