'use strict'
export default function extendUtil () {
  const length = arguments.length
  let target = arguments[0] || {}
  if (typeof target !== 'object' && typeof target !== 'function') {
    target = {}
  }
  if (length === 1) {
    target = this
  }
  for (let i = 1; i < length; i++) {
    const source = arguments[i]
    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key]
      }
    }
  }
  return target
}
