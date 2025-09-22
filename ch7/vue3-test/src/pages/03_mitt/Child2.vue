<template>
  <div class="child2">
    <h3>子组件2</h3>
	<h4>玩具：{{ toy }}</h4>
	<button @click="emitter.emit('send-toy', toy)">发送玩具</button>
  </div>
</template>

<script setup lang="ts" name="Child2">
import { ref } from 'vue'
import { emitter } from '@/utils/emitter';
const toy = ref('奥特曼')
</script>

<style scoped>
	.child2{
		margin-top: 50px;
		background-color: orange;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>