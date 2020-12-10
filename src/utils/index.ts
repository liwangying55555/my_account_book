/**
 * 金额换算 分 -> 元 
 * @param price 金额 单位分
 * @param num 保留小数位 = 2
 */
export function dealPrice(price: number | string, num: number = 2) {
  price = price * 1
  return (price / 100).toFixed(num)
}