<template>
	<div class="father">
		<h3>父组件</h3>
		<!-- <Child :a="a" :b="b" :c="c" v-bind="{ x: 100, y: 200 }" /> -->
		<Child :a="a" :b="b" :c="c" :x="100" :y="200" :sendMsg="getMsg"/>
	</div>
</template>

<script setup lang="ts" name="Father">
import Child from './Child.vue'
import { ref } from 'vue'
const a = ref(1)
const b = ref(2)
const c = ref(3)
function getMsg(msg: string){
	console.log(msg)
}
</script>

<style scoped>
.father {
	background-color: rgb(165, 164, 164);
	padding: 20px;
	border-radius: 10px;
}
</style>
