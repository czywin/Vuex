<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <!-- <h3>当前计数器的值为：{{ count }}</h3> -->
        <h3>{{ showcount }}</h3>
        <button @click="btnHandler2">-1</button>
        <button @click="btnHandlerN">-N</button>
        <button @click="btnHandler1">-1 Async</button>
        <button @click="btnHandler3">-N Async</button>
    </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    // 通过mapState函数将全局数据count映射成当前组件的计算属性
    ...mapState(['count']),
    // 通过mapGetters函数将所需getter映射成当前组件的计算属性
    ...mapGetters(['showcount'])
  },
  methods: {
    // 通过mapMutations函数将mutation中的函数映射成该组件的相应方法，该组件就可以直接通过this关键字调用
    ...mapMutations(['sub', 'subN']),
    ...mapActions(['subAsync', 'subNAsync']),
    btnHandler2 () {
      this.sub()
    },
    btnHandlerN () {
      this.subN(3)
    },
    btnHandler1 () {
      this.subAsync()
    },
    btnHandler3 () {
      this.subNAsync(5)
    }
  }
}
</script>
