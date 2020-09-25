'use strict'
export default function extend () {
  let length = arguments.length
  let target = arguments[0] || {}
  if (typeof target != 'object' && typeof target != 'function') {
    target = {}
  }
  if (length == 1) {
    target = this
  }
  for (let i = 1; i < length; i++) {
    let source = arguments[i]
    for (let key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key]
      }
    }
  }
  return target
}


