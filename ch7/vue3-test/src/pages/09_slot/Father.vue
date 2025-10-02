<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Category>
        <template #content>
          <ul v-for="item in games" :key="item.id">
            <li>{{ item.name }}</li>
          </ul>
        </template>
        <template #title>
          <h2>热门游戏列表</h2>
        </template>
      </Category>
      <Category>
        <template #content>
          <img :src="imgUrl" alt="">
        </template>
        <template #title>
          <h2>今日美食城市</h2>
        </template>
      </Category>
      <Category>
        <template #content>
          <video :src="videoUrl" controls></video>
        </template>
        <template #title>
          <h2>今日影视推荐</h2>
        </template>
      </Category>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
import Category from './Category.vue'
import { ref, reactive } from 'vue';
let games = reactive([
  { id: 'asgytdfats01', name: '英雄联盟' },
  { id: 'asgytdfats02', name: '王者农药' },
  { id: 'asgytdfats03', name: '红色警戒' },
  { id: 'asgytdfats04', name: '斗罗大陆' }
])
let imgUrl = ref('https://ts1.tc.mm.bing.net/th/id/R-C.939630a19cb4bd26d3ef8f81b1c4a96b?rik=ZaGrZV4qhsqQfg&riu=http%3a%2f%2fn.sinaimg.cn%2fsinacn10%2f213%2fw2048h1365%2f20180324%2fa906-fysnevm4424507.jpg&ehk=DxenTApAqLcUhUCviEQqCiGBL8pXqcWHXRQJD%2fTp7rQ%3d&risl=&pid=ImgRaw&r=0')
let videoUrl = ref('https://www.w3schools.com/html/mov_bbb.mp4')
</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}

.content {
  display: flex;
  justify-content: space-evenly;
}

img,
video {
  width: 100%;
}

h2 {
  background-color: orange;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
}
</style>