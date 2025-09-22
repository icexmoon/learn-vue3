<template>
  <div class="father">
    <h3>父组件</h3>
    <!-- <MyInput :modelValue="msg" @update:modelValue="msg = $event"/> -->
    <!-- <MyInput v-model="msg"/> -->
    <h4>用户名：{{ username }}</h4>
    <h4>密码：{{ password }}</h4>
    <MyInput v-model:username="username" v-model:password="password"/>
  </div>
</template>

<script setup lang="ts" name="Father">
import MyInput from "./MyInput.vue"
import { ref } from "vue"
// const msg = ref('hello')
const username = ref('root')
const password = ref('123456')
</script>

<style scoped>
.father {
  padding: 20px;
  background-color: rgb(165, 164, 164);
  border-radius: 10px;
}
</style>
