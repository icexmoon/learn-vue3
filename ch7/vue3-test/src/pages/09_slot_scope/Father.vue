<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Game>
        <template v-slot="scope">
          <ul>
            <li v-for="g in scope.games" :key="g.id">
              {{ g.name }}
            </li>
          </ul>
        </template>
      </Game>

      <Game>
        <template v-slot="scope">
          <ol>
            <li v-for="g in scope.games" :key="g.id">
              {{ g.name }}
            </li>
          </ol>
        </template>
      </Game>

      <Game>
        <template #default="{games}">
          <h3 v-for="g in games" :key="g.id">{{ g.name }}</h3>
        </template>
      </Game>

    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
  import { generateCodeFrame } from 'vue/compiler-sfc';
import Game from './Game.vue'
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
  img,video {
    width: 100%;
  }
</style>