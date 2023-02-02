import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  getters: {
  },
  mutations: {
    add (state) {
      state.count++
    },
    addN (state, N) {
      state.count += N
    },
    sub (state) {
      state.count--
    },
    subN (state, N) {
      state.count -= N
    }
  },
  actions: {
  },
  modules: {
  }
})
