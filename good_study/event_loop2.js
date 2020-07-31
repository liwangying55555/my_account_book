console.time('MacroTask')
console.time('MainTask')

setTimeout(() => {
  console.timeEnd('MacroTask')
}, 0)

Promise.resolve().then(res => {
  console.log('MicroTask Promise 1')
}).then(res => {
  console.log('MicriTask Promise 2')
})

let maxVal = 10000
let container = []

for (let i = 0; i < maxVal; i++) {
  container.push(i)
}

console.timeEnd('MainTask')


