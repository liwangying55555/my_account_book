// 洋葱圈原理compose函数
module.exports = function compose (...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce(function reducer (a, b) {
    return function nextWrapper (...args) {
      return a(b(...args))
    }
  })
}