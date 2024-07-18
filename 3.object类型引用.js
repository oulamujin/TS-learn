"use strict";
// Object 是原型链的顶端，所以其他类型的赋值是可以正常赋值的
// const a:Object = 123
// const a1:Object = '123'
// const a2:Object = []
// const a3:Object = {}
// const a4:Object = () => 123
// 可以使用object将引用类型给筛选出来
// const a:object = 123        // 错误   原始类型
// const a1:object = '123'     // 错误   原始类型
// const a2:object = true     // 错误   原始类型
// const a3:object = []        // 正确
// const a4:object = {}        // 正确
// const a5:object = () => 123 // 正确
// 空对象  字面量模式
// const a:{} = 123
// const a1:{} = '123'
// const a2:{} = []
// const a3:{} = {}
// const a4:{} = () => 123
// 和 Object 是一样的效果，但是在赋值完成之后是不能进行增加的
// const b:{} = {name: 1}
// b.age = 2
