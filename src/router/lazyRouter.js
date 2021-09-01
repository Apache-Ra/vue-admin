'use strict'
export default viewPath => {
  return resolve => {
    require(['@/views/' + viewPath + '.vue'], component => {
      resolve(component)
    })
  }
}
/**
 *  示例
 */
// import { Toast } from 'vant'
// export default viewPath => {
//   return resolve => {
//     const ld = Toast.loading({
//       duration: 0,
//       forbidClick: true,
//       loadingType: 'spinner'
//     })
//     require(['@/views/' + viewPath], component => {
//       ld.clear()
//       resolve(component)
//     })
//   }
// }
