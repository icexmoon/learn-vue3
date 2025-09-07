import { reactive, onMounted } from "vue";
export default () => {
  const list = reactive<number[]>([]);
  const addList = () => {
    list.push(list.length + 1);
  };
  onMounted(() => {
    addList();
    addList();
    addList();
  });
  return { list, addList };
};
