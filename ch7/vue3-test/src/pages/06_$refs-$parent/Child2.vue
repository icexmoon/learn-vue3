<template>
	<div class="child2">
		<h3>子组件2</h3>
		<h4>{{ bookNum }}本书</h4>
		<button @click="drink($parent)">喝父亲的酒</button>
	</div>
</template>

<script setup lang="ts" name="Child2">
import { ref } from 'vue'
const bookNum = ref(0)
const drink = (parent: any) => {
	parent.drinkNum--
}

defineExpose({
	bookNum
})
</script>

<style scoped>
.child2 {
	margin-top: 20px;
	background-color: orange;
	padding: 20px;
	border-radius: 10px;
	box-shadow: 0 0 10px black;
}
</style>
