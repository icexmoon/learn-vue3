<template>
    <div class="person">
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button id="btnShowPhone" @click="showPhone">查看手机号</button>
        <button ref="btnChangeName" @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改对象</button>
    </div>
</template>

<script lang="ts" name="Person456" setup>
import { ref,onMounted } from 'vue'
const btnChangeName = ref()
onMounted(()=>{
    console.log(person)
    const btnShowPhone = document.getElementById('btnShowPhone')
    console.log('btnShowPhone',btnShowPhone)
    console.log('btnChangeName',btnChangeName.value)
})
const person = ref({
    name: '张三',
    age: 18,
    phone: '123213123'
})
console.log(person)
const showPhone = () => {
    alert(person.value.phone)
}
const changeName = () => {
    person.value.name = '王五'
}
const changeAge = () => {
    person.value.age += 1
}
const changePerson = () => {
    person.value = { name: '王五', age: 20, phone: '5555555' }
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