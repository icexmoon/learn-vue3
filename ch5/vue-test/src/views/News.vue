<template>
  <div class="news">
    <ul>
      <li v-for="news in newsList">
        <button @click="showNewsDetail(news)">新闻详情</button>
        <RouterLink :to="{ name: 'xiangqing', query: news }">{{ news.title }}</RouterLink>
      </li>
    </ul>
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
interface News {
  id: number
  title: string
  content: string
}
const newsList = ref<News[]>([
  { id: 1, title: '头条新闻', content: '以色列轰炸卡塔尔' },
  { id: 2, title: '科技新闻', content: '网传Windows更新补丁损坏硬盘' },
  { id: 3, title: '震惊', content: '江南皮革厂倒闭了' }
])
const router = useRouter()
const showNewsDetail = (news: News) => {
  // router.push(`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`)
  router.push({
    path: '/news/detail',
    query: { ...news }
  })
}
</script>

<style scoped>
/* 新闻 */
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.news ul {
  margin-top: 30px;
  list-style: none;
  padding-left: 10px;
}

.news li>a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967E;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}

.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>