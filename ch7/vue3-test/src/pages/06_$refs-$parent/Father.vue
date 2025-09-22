<template>
	<div class="father">
		<h3>父组件</h3>
		<button @click="changeC1Toy">修改儿子1的玩具</button>
		<button @click="changeAllChildrenBookNum($refs)">修改所有儿子的书本数目</button>
		<h4>{{ drinkNum }} 瓶酒</h4>
		<Child1 ref="c1" />
		<Child2 ref="c2" />
	</div>
</template>

<script setup lang="ts" name="Father">
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'
import { ref } from 'vue'
const drinkNum = ref(100)
const c1 = ref()
const changeC1Toy = () => {
	c1.value.toy = '变形金刚'
}
const changeAllChildrenBookNum = (refs: {[key:string]:any}) => {
	for (let key in refs) {
		refs[key].bookNum += 1
	}
}
defineExpose({
	drinkNum
})
</script>

<style scoped>
.father {
	background-color: rgb(165, 164, 164);
	padding: 20px;
	border-radius: 10px;
}

.father button {
	margin-bottom: 10px;
	margin-left: 10px;
}
</style>
