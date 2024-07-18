// any 任意类型  unknown 不知道的类型
// 1. top type 顶级类型 any unknown
// 2. Object
// 3. Number String Boolean
// 4. number string boolean
// 5.  1      'aaa'   false 
// 6. never
// unknown 只能赋值给自身 或者是 any
// unknown 没有办法读任何属性，方法也不可以调用
// unknown 比 any 更加安全


// any 类型是可以任意赋值的
// let a: any = 1
// let b: number = 5

// a = b
// b = a

// unknown 类型不可以，只能赋值给 any 或者 unknown
// let a: unknown = 1
// let b: number = 5

// a = b
// b = a


// unknown 没有办法读任何属性，方法也不可以调用

// const a:unknown = {a: true, open: () => 123 }
// a.a
// a.open

// const a:any = {a: true, open: () => 123 }
// a.a
// a.open()

// console.log(a.a , a.open());
