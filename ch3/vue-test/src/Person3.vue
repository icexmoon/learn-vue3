<template>
    <div class="person">
        姓：<input type="text" v-model="firstName" />
        <br />
        名：<input type="text" v-model="lastName" />
        <br />
        全名：{{ fullName }}
        <br/>
        <button @click="changeFullName">修改全名</button>
    </div>
</template>

<script setup lang="ts" name="Person">
import { ref,computed } from 'vue'
const firstName = ref('zhang')
const lastName = ref('san')
const firstCharUp = (word:string) => {
    console.log('firstCharUp')
    return word.charAt(0).toUpperCase() + word.slice(1)
}
const fullName = computed(() => {
    return firstCharUp(firstName.value) + ' - ' + firstCharUp(lastName.value)
})
const changeFullName = () => {
    fullName.value = 'li-si'
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