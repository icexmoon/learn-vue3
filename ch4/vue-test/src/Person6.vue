<template>
  <div class="person">
    <p>{{ msg }}</p>
    <ul>
      <li v-for="person in persons" :key="person.id">
        {{ person.name }}
      </li>

    </ul>
  </div>
</template>

<script setup lang="ts" name="Person">
import { type PersonList } from '@/types';
import { withDefaults } from 'vue';
const props = withDefaults(defineProps<{
  msg?: string;
  persons: PersonList;
}>(), {
  msg: () => 'hello world',
})
console.log(props.msg)
</script>

<style scoped>
.person {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
  color: #343a40;
  padding: 20px 40px;
  border: 2px solid #dee2e6;
  border-radius: 8px;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}
</style>