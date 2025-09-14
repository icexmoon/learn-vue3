<template>
  <div class="child">
    <h3>子组件</h3>
	<h4>父组件的 car：{{ car }}</h4>
	<button @click="sendToy(toy)">给父组件发送玩具</button>
  </div>
</template>

<script setup lang="ts" name="Child">
import { ref } from 'vue'
defineProps<{
	car: string
	sendToy: Function
}>()
const toy = ref('奥特曼')
</script>

<style scoped>
	.child{
		background-color: skyblue;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>
