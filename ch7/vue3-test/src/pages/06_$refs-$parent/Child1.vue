<template>
	<div class="child1">
		<h3>子组件1</h3>
		<h4>玩具：{{ toy }}</h4>
		<h4>{{ bookNum }} 本书</h4>
	</div>
</template>

<script setup lang="ts" name="Child1">
import { ref } from 'vue'
const toy = ref('小鸭子')
const bookNum = ref(0)
defineExpose({
	toy, bookNum
})
</script>

<style scoped>
.child1 {
	margin-top: 20px;
	background-color: skyblue;
	padding: 20px;
	border-radius: 10px;
	box-shadow: 0 0 10px black;
}
</style>
