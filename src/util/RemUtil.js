'use strict'
export default function () {
  const deviceWidth = document.documentElement.clientWidth
  // window.remWindowWith = deviceWidth
  document.documentElement.style.fontSize = deviceWidth / 19.2 + 'px'
  document.body.style.fontSize = '0.14rem'
  // 屏幕大小变换时
  window.onresize = function () {
    const deviceWidth = document.documentElement.clientWidth
    // window.remWindowWith = deviceWidth
    document.documentElement.style.fontSize = deviceWidth / 19.2 + 'px'
    document.body.style.fontSize = '0.14rem'
  }
}
