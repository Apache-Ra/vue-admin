<template>
  <section id="app">
    <transition :name="transitionName" appear tag="section">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition :name="transitionName" appear tag="section">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </section>
</template>
<script>
export default {
  name: 'App',
  components: {},
  data () {
    return {
      transitionName: ''
    }
  },
  watch: {
    $route (to, from) {
      const vue = this
      if (to.meta.index > from.meta.index) {
        vue.transitionName = 'slide-left'
      } else {
        vue.transitionName = 'slide-right'
      }
    }
  }
}
</script>
<style lang="less">
  @import "assets/style/public";
  @import "assets/style/animate";
</style>
