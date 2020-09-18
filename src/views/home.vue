<template>
  <div class='home'></div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'home',
  title: '',
  components: {},
  computed: {
    ...mapState({
      // showLoader: state => state.vux.showLoader,
    })
  },
  props: {
    Data: {
      type: Object,
      twoWay: true,
      default: () => ({})
    }
  },
  data () {
    return {
      test: ''
    }
  },
  created () {
  },
  updated () {
  },
  mounted () {
  },
  methods: {},
  watch: {},
  destroyed () {
  }
}
</script>

<style scoped lang="less">

</style>
