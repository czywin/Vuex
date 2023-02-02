<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <!-- <h3>当前计数器的值为：{{ $store.state.count }}</h3> -->
        <h3>{{ $store.getters.showcount }}</h3>
        <button @click="btnHandler1">+1</button>
        <button @click="btnHandlern">+N</button>
        <button @click="btnHandler2">+1 async</button>
        <button @click="btnHandler3">+N async</button>
    </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    // commit 的作用就是调用mutations中的某个函数
    btnHandler1 () {
      this.$store.commit('add')
    },
    btnHandlern () {
      this.$store.commit('addN', 3)
    },
    // dispatch 的作用就是调用actions中的某个异步操作（函数）
    btnHandler2 () {
      this.$store.dispatch('addAsync')
    },
    btnHandler3 () {
      this.$store.dispatch('addNAsync', 5)
    }
  }
}
</script>
