// interface  重名  重合
// interface  任意key
// interface  ? readonly
// interface  接口继承
// interface  定义函数类型


// 重名  重合
// 注意：不能多属性，也不能少属性
// interface A {
//     name: string,
//     age: number
// }
// interface A {
//     Ikun: string
// }

// // 相当于
// // interface A {
// //     name: string
// //     age: number
// //     Ikun: string
// // }

// const a: A = {
//     name: 'a',
//     age: 88,
//     Ikun: 'b',
// }



// 任意 key  
// 用于除了固定的几个属性，如name,age特别声明之外，其他属性不知道有多少，不知道具体是啥类型，就用 [propName:string]: any 描述，代表无论多少个，无论啥属性都可以
// interface A {
//     name: string
//     age: number
//     [propName:string]: any
// }

// const a:A = {
//     name: 'a',
//     age: 1,
//     s: 'a',
// }



// ? readonly
// ? 可选 :  给可写可不写的属性加上，之后如果没有这个属性也不会报错
// readonly 只读 :  有些属性是不能被改变的，加上只读，如果发生改变就会报错
// interface A {
//     readonly id: number
//     name: string
//     age?: number
//     readonly cb: ()=> boolean
// }

// const a:A = {
//     id: 1,
//     name: 'a',
//     cb: () => {
//         return false
//     }
// }

// // 可以正常调用
// a.cb() 
// // 但不可以进行改变
// a.cb = ()=> {return 123}



// 接口继承   使用 extends 可以继承多个接口
// interface A extends B {
//     readonly id: number
//     name: string
//     age?: number
//     readonly cb: ()=> boolean
// }

// interface B {
//     xxx: string
// }

// const a:A = {
//     id: 1,
//     name: 'a',
//     xxx: 'b',
//     cb: () => {
//         return false
//     }
// }



// 定义函数类型
interface Fn {
    (name: string): number[]
}

const fn:Fn = function (name: string) {
    return [1];
}