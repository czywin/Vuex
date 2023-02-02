<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <h3>当前计数器的值为：{{ $store.state.count }}</h3>
        <button @click="btnHandler1">+1</button>
        <button @click="btnHandlern">+N</button>
    </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    btnHandler1 () {
      this.$store.commit('add')
    },
    btnHandlern () {
      this.$store.commit('addN', 3)
    }
  }
}
</script>
