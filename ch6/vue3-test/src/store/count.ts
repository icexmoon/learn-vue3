import { defineStore } from "pinia";
export const useCountStore = defineStore("count", {
  actions: {
    increment(step: number) {
      this.sum = this.sum + step;
    },
  },
  state: () => {
    return {
      sum: 0,
      name: "zhangsan",
      age: 18,
      address: "beijing",
    };
  },
  getters: {
    double: (state) => state.sum * 2,
    bigSum(): number {
      return this.sum * 1000;
    },
  },
});
