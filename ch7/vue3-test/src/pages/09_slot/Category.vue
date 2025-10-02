<template>
    <div class="category">
      <slot name="title">默认名称</slot>
      <slot name="content">默认内容</slot>
    </div>
</template>
<script setup lang="ts" name="Category">
  defineProps(['title'])
</script>
<style scoped>
  .category {
    width: 200px;
    height: 300px;
    background-color: skyblue;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
  h2 {
    background-color: orange;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
  }
</style>