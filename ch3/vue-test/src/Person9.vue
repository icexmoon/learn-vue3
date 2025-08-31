<template>
    <div class="person">
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <h2>车1：{{ person.cars.c1 }}</h2>
        <h2>车2：{{ person.cars.c2 }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changeC1">修改第一辆车</button>
        <button @click="changeC2">修改第二辆车</button>
        <button @click="changeCars">修改所有车辆</button>
    </div>
</template>

<script setup lang="ts" name="Person">
import { reactive, watch } from 'vue'
const person = reactive({
    name: '张三',
    age: 18,
    cars: {
        c1: '保时捷',
        c2: '法拉利'
    }
})
const changeName = () => {
    person.name += '~'
}
const changeAge = () => {
    person.age += 1
}
const changeC1 = () => {
    person.cars.c1 += '~'
}
const changeC2 = () => {
    person.cars.c2 += '~'
}
const changeCars = () => {
    person.cars = {
        c1: '保时捷~',
        c2: '法拉利~'
    }
}
watch([() => person.age, () => person.cars], (newValue, oldValue) => {
    console.log(newValue, oldValue)
}, {deep: true})
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