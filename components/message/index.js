/**
 *   全局信息提示层面
 * 
 * 
 **/
import vue from 'vue'
import messageModule from './message.vue'

const DOM = vue.extend(messageModule)
export default function message ({ text, type, duration = 3000 }) {
  const messageDOM = new DOM({
    el: document.createElement('div'),
    data () {
      return {
        // 是否显示
        isShow: true,
        // 文本内容
        text: text,
        // 类型
        type: type
      }
    }
  })
  // 添加节点
  document.body.appendChild(messageDOM.$el)

  // 过渡时间
  setTimeout(() => {
    messageDOM.$el.setAttribute('class', 'message animated slideOutUp error')
    messageDOM.$el.remove()
    messageDOM.isShow = false
  }, duration)
}
