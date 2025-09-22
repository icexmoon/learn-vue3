<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>钱：{{ money }}</h4>
    <h4>车：{{ car }}</h4>
    <Child />
  </div>
</template>

<script setup lang="ts" name="Father">
import Child from './Child.vue'
import { ref, reactive, provide } from 'vue'
const money = ref(1000)
const car = reactive({
  brand: '奔驰',
  price: 5000
})
const changeMoney = (moneyDiff: number) => {
  money.value += moneyDiff
}
// 将数据提供给后代组件
provide('moneyContext', { money, changeMoney })
provide('car', car)
</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
</style>