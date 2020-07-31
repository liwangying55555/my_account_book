// 链式调用经典案例
// then返回一个promise函数，具体有没有返回值取决于callback是否具有返回值
// then(callback) callback仅作为一个回调函数 可以是普通函数
// 链式传参

// 我开始了
// a
// a-b
// b
// c

function begin () {
  return new Promise(((resolve, reject) => {
    console.log('我开始了')
    resolve()
  }))
}

function a () {
  console.log('a')
  return 'a-b'
}

function b (val) {
  console.log(val)
  console.log('b')
}

function c () {
  console.log('c')
}

begin()
  .then(a)
  .then(b)
  .then(c)