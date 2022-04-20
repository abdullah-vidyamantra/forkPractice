import { defineStore } from 'pinia'
export const useStore = defineStore("main", {
  state: () => ({
    counter: 1,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,

    doubleCountPlusOne() {
      return this.doubleCount + 1;
    },
  },
  actions: {
    increment() {
      this.counter++
    },
    randomizeCounter() {
      this.counter = Math.round(100 * Math.random())
    },
  },
});
