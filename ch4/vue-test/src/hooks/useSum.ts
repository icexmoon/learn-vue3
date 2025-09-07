import { ref } from "vue";
export default () => {
  const sum = ref(0);
  const add = () => {
    sum.value++;
  };
  return { sum, add };
};
