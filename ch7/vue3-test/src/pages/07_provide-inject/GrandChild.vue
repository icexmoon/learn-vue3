<template>
  <div class="grand-child">
    <h3>我是孙组件</h3>
    <h4>钱:{{ money }}</h4>
    <h4>车:{{ car }}</h4>
    <button @click="changeMoney(-100)">-100</button>
  </div>
</template>

<script setup lang="ts" name="GrandChild">
import { inject } from 'vue';
const { money, changeMoney } = inject<any>('moneyContext')
const car = inject('car')
</script>

<style scoped>
.grand-child {
  background-color: orange;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px black;
}
</style>