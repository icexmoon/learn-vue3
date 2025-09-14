<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in loveTalkStore.talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
import { useLoveTalkStore } from '@/store/loveTalk'
const loveTalkStore = useLoveTalkStore()
loveTalkStore.$subscribe(() => {
  // 数据发生变化时将数据保存到本地存储
  localStorage.setItem('talkList', JSON.stringify(loveTalkStore.talkList))
})
// 方法
async function getLoveTalk() {
  await loveTalkStore.getLoveTalk()
}
</script>

<style scoped>
.talk {
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>