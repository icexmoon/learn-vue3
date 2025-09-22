<template>
  <div class="child">
    <h3>子组件</h3>
	<button @click="emit('send-toy', '奥特曼')">发送小玩具</button>
  </div>
</template>

<script setup lang="ts" name="Child">
const emit = defineEmits(['send-toy'])
</script>

<style scoped>
	.child{
		margin-top: 10px;
		background-color: rgb(76, 209, 76);
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>