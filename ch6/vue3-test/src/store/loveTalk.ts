import { defineStore } from "pinia";
import axios from "axios";
import { nanoid } from "nanoid";

// export const useLoveTalkStore = defineStore("loveTalk", {
//   actions: {
//     async getLoveTalk() {
//       // 发请求，下面这行的写法是：连续解构赋值+重命名
//       let {
//         data: { content: title },
//       } = await axios.get("http://api.uomg.com/api/rand.qinghua?format=json");

//       // 把请求回来的字符串，包装成一个对象
//       let obj = { id: nanoid(), title };
//       // 放到数组中
//       this.talkList.unshift(obj);
//     },
//   },
//   state: () => {
//     let talkList = []
//     // 如果本地存储中有，从本地存储加载数据
//     const storedTalkList = localStorage.getItem("talkList")
//     if (storedTalkList) {
//       talkList = JSON.parse(storedTalkList);
//     }
//     else{
//         // 如果没有，就使用默认数据
//         talkList = [
//           { id: "ftrfasdf01", title: "今天你有点怪，哪里怪？怪好看的！" },
//           { id: "ftrfasdf02", title: "草莓、蓝莓、蔓越莓，今天想我了没？" },
//           { id: "ftrfasdf03", title: "心里给你留了一块地，我的死心塌地" },
//         ];
//     }
//     return { talkList };
//   },
// });
import { reactive } from "vue";
export const useLoveTalkStore = defineStore("loveTalk", () => {
  let talkListData = []
  if (localStorage.getItem("talkList")) {
    talkListData = JSON.parse(localStorage.getItem("talkList") || "");
  } else {
    talkListData = [
      { id: "ftrfasdf01", title: "今天你有点怪，哪里怪？怪好看的！" },
      { id: "ftrfasdf02", title: "草莓、蓝莓、蔓越莓，今天想我了没？" },
    ]
  }
  const talkList = reactive<{ id: string; title: string }[]>(talkListData);
  async function getLoveTalk() {
    let {
      data: { content: title },
    } = await axios.get("http://api.uomg.com/api/rand.qinghua?format=json");

    // 把请求回来的字符串，包装成一个对象
    let obj = { id: nanoid(), title };
    // 放到数组中
    talkList.unshift(obj);
  }
  return { talkList,getLoveTalk };
});
