'use strict'

/**
 * 数组求和
 * @param array
 * @returns {number|*}
 * @constructor
 */
export function SUM (array = []) {
  const len = array.length
  if (len === 0) {
    return 0
  } else if (len === 1) {
    return array[0]
  } else {
    return array[0] + SUM(array.slice(1))
  }
}

/**
 * @param array
 * @param point
 * @returns {*}
 * @constructor
 */
export function FILTER (array = [], point = '0') {
  for (let i = 0; i < array.length; i++) {
    const item = array[i]
    for (let j = 0; j < item.val.length; j++) {
      if (JSON.stringify(item.val[j]) === JSON.stringify(point)) {
        return item.key
      }
    }
  }
}

/**
 * 返回数组中的最大值
 * @param array
 * @returns {any}
 * @constructor
 */
export function MAX (array = []) {
  let max = JSON.parse(array[0])
  for (let i = 0; i < array.length - 1; i++) {
    max = max < JSON.parse(array[i + 1]) ? JSON.parse(array[i + 1]) : max
  }
  return max
}

/**
 * 返回数组中的最小值
 * @param array
 * @returns {any}
 * @constructor
 */
export function MIN (array = []) {
  let min = JSON.parse(array[0])
  for (let i = 0; i < array.length - 1; i++) {
    min = min > JSON.parse(array[i + 1]) ? JSON.parse(array[i + 1]) : min
  }
  return min
}

/**
 * 数组中最大值和最小值（用于柱状图，折线图刻度值）
 * @param array
 * @returns {{min: number, max: number}}
 * @constructor
 */
export function MAX_MIN (array = []) {
  let max = array[0]
  let min = array[0]
  for (let i = 0; i < array.length - 1; i++) {
    max = max < array[i + 1] ? array[i + 1] : max
    min = min > array[i + 1] ? array[i + 1] : min
  }
  max = Math.ceil(max)
  min = Math.floor(min)
  // 坐标轴纵向座标刻度为6
  // const itemScale = max / 6
  // 最大值
  // max = (typeof max === Number) ? max : parseInt(max)
  // min = (typeof min === Number) ? min : parseInt(min)
  // max = (max + itemScale).toFixed(0)
  // min = (min-itemScale<0)?0:(min-itemScale).toFixed(0)
  return { max, min }
}

/**
 * 数组排序
 * @param array
 * @param attribute
 * @param order
 * @returns {*[]}
 * @constructor
 */
export function SORT (array = [], attribute = '', order = '') {
  function compare (attribute) {
    if (order === undefined) {
      order = 1
    } else {
      order = (order) ? 1 : -1
    }

    return function (a, b) {
      a = a[attribute]
      b = b[attribute]
      if (a < b) {
        return order * -1
      }
      if (a > b) {
        return order * 1
      }
      return 0
    }
  }
  return array.sort(compare(attribute))
}
