<template>
    <!-- HTML -->
    <h1>Hello World</h1>
    <Person></Person>
</template>

<script lang="ts">
// 导入组件
import Person from './Person11.vue'
// TS 或 js
export default {
    name: 'App',
    components: { Person }, // 注册组件
}
</script>

<style scoped>
/* css 样式 */
body {
    margin: 0;
    background-color: #f8f9fa;
}

.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

h1 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 3.5rem;
    font-weight: 300;
    color: #343a40;
    padding: 20px 40px;
    border: 2px solid #dee2e6;
    border-radius: 8px;
    background: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

h1:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}
</style>