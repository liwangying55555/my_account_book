// 闭包方法的使用

/**
 * 记录入参和输出结果，提高性能
 */
const memoryfn = (fn) => {
    const memoryList = {};
    console.log(memoryList)
    return arg => memoryfn[arg] || (memoryList[arg] = fn(arg))
}

let factorial = memoryfn((n) => {
    if (n === 0) {
        return 1
    }
    return n * factorial(n - 1)
})

factorial(10)

