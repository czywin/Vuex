<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <h3>当前计数器的值为：{{ count }}</h3>
        <button @click="btnHandler2">-1</button>
        <button @click="btnHandlerN">-N</button>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['count'])
  },
  methods: {
    ...mapMutations(['sub', 'subN']),
    btnHandler2 () {
      this.sub()
    },
    btnHandlerN () {
      this.subN(3)
    }
  }
}
</script>
