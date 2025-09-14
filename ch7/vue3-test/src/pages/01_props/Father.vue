<template>
	<div class="father">
		<h3>父组件</h3>
		<h4 v-if="childToy">子组件的玩具：{{ childToy }}</h4>
		<Child :car="car" :sendToy="getToy" />
	</div>
</template>

<script setup lang="ts" name="Father">
import Child from './Child.vue'
import { ref } from 'vue'
const car = ref('宝马')
const childToy = ref('')
function getToy(toy: string) {
	childToy.value = toy
}
</script>

<style scoped>
.father {
	background-color: rgb(165, 164, 164);
	padding: 20px;
	border-radius: 10px;
}
</style>