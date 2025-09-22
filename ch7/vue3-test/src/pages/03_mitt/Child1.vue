<template>
	<div class="child1">
		<h3>子组件1</h3>
	</div>
</template>

<script setup lang="ts" name="Child1">
import { emitter } from '@/utils/emitter'
import { onUnmounted } from 'vue';
emitter.on('send-toy', (value: any) => {
	console.log('子组件1接收 toys:', value)
})
onUnmounted(() => {
	emitter.off('send-toy')
})
</script>

<style scoped>
.child1 {
	margin-top: 50px;
	background-color: skyblue;
	padding: 10px;
	box-shadow: 0 0 10px black;
	border-radius: 10px;
}

.child1 button {
	margin-right: 10px;
}
</style>