# TS类型定义

## 1. 对象解构入参类型定义

```ts
function getTotal({ one, two }: { one: number, two: number }): number {
  return one + two
}
```

## 2. 对象混合类型定义

```ts
const arr: (string | number)[] = ['1', 2, 0]
```

## 3. 类型别名

+ `type` 类型别名
+ `interface` 接口
+ `class` 类
+ 均可做对象的类型定义

> 类型别名可以直接给类型，比如`string`，而接口必须代表对象。

```ts
type ObjByType = {
  name: string
  age: number
}

class ObjByClass {
  name: string
  age: number
}

interface ObjByInterface {
  name: string
  age: number
  sex?: string
  [keys: string]: any
}

const list : ObjByInterface[] = [
  {name: '小红', age: 18}
]
```

## 4. 接口、类可以相互继承

+ 类使用关键字`implements`继承接口类型
+ 接口继承本身依旧是关键字`extends`

```ts
interface Origin {
  name: string
  age: number
}

class Obj implements Origin {
  name = 'who'
  age = 10
  birth = '2020-01-01'
}

interface Obj2 extends Obj {
  sex?: 'M' | 'F' | ''
}

```

+ 类重写、继承自己本身
  
```ts
class OriginClass {
  name = 'who'
  say() {
    return 'who are you'
  }
}

class Obj extends OriginClass {
  say() {
    return 'I birth with you'
  }
}
```
