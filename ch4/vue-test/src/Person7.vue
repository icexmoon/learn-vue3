<template>
  <div class="person">
    <h1>{{ sum }}</h1>
    <button @click="add">sum++</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
console.log("创建前")
const sum = ref(0)
const add = () => {
  sum.value++
}
onBeforeMount(() => {
  console.log("挂在前")
})
onMounted(() => {
  console.log("挂载后")
})
onBeforeUpdate(() => {
  console.log("更新前")
})
onUpdated(() => {
  console.log("更新后")
})
onBeforeUnmount(() => {
  console.log("卸载前")
})
onUnmounted(() => {
  console.log("卸载后")
})
console.log("创建后")
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