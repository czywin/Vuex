import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  getters: {
    showcount (state) {
      return '当前计数器的值为' + state.count
    }
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
    // 可以将context看成是new出来的store示例对象
    addAsync (context) {
      setTimeout(() => {
        context.commit('add')
      }, 1000)
    },
    addNAsync (context, step) {
      setTimeout(() => {
        context.commit('addN', step)
      })
    },
    subAsync (context) {
      setTimeout(() => {
        context.commit('sub')
      }, 1000)
    },
    subNAsync (context, step) {
      setTimeout(() => {
        context.commit('subN', step)
      }, 1000)
    }
  },
  modules: {
  }
})
