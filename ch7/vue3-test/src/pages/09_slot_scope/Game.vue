<template>
  <div class="game">
    <h2>{{ title }}</h2>
    <slot :games="games" :title="title"></slot>
  </div>
</template>

<script setup lang="ts" name="Game">
import { reactive, ref } from 'vue'
let games = reactive([
  { id: 'asgytdfats01', name: '英雄联盟' },
  { id: 'asgytdfats02', name: '王者农药' },
  { id: 'asgytdfats03', name: '红色警戒' },
  { id: 'asgytdfats04', name: '斗罗大陆' }
])
let title = ref('游戏列表')
</script>

<style scoped>
.game {
  width: 200px;
  height: 300px;
  background-color: skyblue;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

h2 {
  background-color: orange;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
}
</style>