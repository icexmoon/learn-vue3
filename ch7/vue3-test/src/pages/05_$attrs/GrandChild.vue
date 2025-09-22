<template>
	<div class="grand-child">
		<h3>孙组件</h3>
		<p>a: {{a}}</p>
		<p>b: {{b}}</p>
		<p>c: {{c}}</p>
		<p>x: {{x}}</p>
		<p>y: {{y}}</p>
		<button @click="sendMsg('hello')">发送信息</button>
	</div>
</template>

<script setup lang="ts" name="GrandChild">
defineProps(["a","b","c","x","y","sendMsg"])
</script>

<style scoped>
	.grand-child{
		margin-top: 20px;
		background-color: orange;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px black;
	}
</style>