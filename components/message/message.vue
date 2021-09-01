<template>
    <div class='message animated slideInDown' :class="type">
        <span class="icon"></span>
        <span class="text">{{text}}</span>
    </div>
</template>

<script>
export default {
  name: 'message',
  title: '',
  components: {},
  computed: {},
  data () {
    return {}
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
    .message {
        width: 400px;
        height: 40px;
        position: absolute;
        left: 0;
        right: 0;
        top: 10%;
        margin: 0 auto;
        text-align: center;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }

    .message {
        display: inline-block;
        border-radius: 4px;
        background: #FFF;
        color: #000
    }

    .message .icon, .text {
        display: inline-block
    }

    .message .icon {
    }

    .message .text {
        height: 40px;
        line-height: 40px;
        padding: 0 20px;
        font-size: 12px;
    }

    .info {
        background: #00aaee;
        color: #FFF;
    }

    .success {
        background: #00ee6b;
        color: #FFF;
    }

    .warning {
        background: #eea300;
        color: #FFF;
    }

    .error {
        background: orangered;
        color: #FFF;
    }
</style>
