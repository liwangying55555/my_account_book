
console.log('script start')

setTimeout(() => {
  console.log('setTimeout')
}, 0)

Promise.resolve().then(res => {
  console.log('promise 1')
}).then(res => {
  console.log('promise 2')
})

console.log('script end')

/**
 * 主进程
 * script start
 * script end
 * 
 * 微任务
 * promise 1
 * promise 2
 * 
 * 宏任务
 * setTimeout
 */