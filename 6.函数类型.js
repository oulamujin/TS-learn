"use strict";
// 1.函数定义类型和返回值 | 箭头函数定义类型和返回值
// 2.函数默认的参数 | 函数可选参数
// 3.参数是一个对象如何定义
// 4.函数this类型
// 5.函数重载
// 1.函数定义类型和返回值 | 箭头函数定义类型和返回值
// function add(a: number, b: number): number {
// 	return a + b;
// }
// const add = (a: number, b: number): number => a + b;
// console.log(add(1,2));
// 2.函数默认的参数 | 函数可选参数
// 默认参数和可选参数不能共存
// function add(a: number = 10, b?: number): number {
// 	if (b) {
// 		return a + b;
// 	}
// 	return a;
// }
// console.log(add(1));
// 3.参数是一个对象如何定义
// interface User {
// 	name: string;
// 	age: number;
// }
// function add(user: User): User {
// 	return user;
// }
// console.log(add({ name: "a", age: 1 }));
// 4.函数this类型
// interface Obj {
// 	name: number[];
// 	age: (num: number) => void;
// }
// // ts 中可以定义this 的类型，在js中无法使用  必须是第一个参数定义this的类型
// const obj: Obj = {
// 	name: [1, 2, 3],
// 	age(this: Obj, num: number) {
// 		this.name.push(num);
// 	},
// };
// obj.age(4);
// console.log(obj.name);
// 5.函数重载
const user = [1, 2, 3];
function findNum(ids) {
    if (typeof ids === "number") {
        return user.filter((v) => v === ids);
    }
    else if (Array.isArray(ids)) {
        user.push(...ids);
        return user;
    }
    else {
        return user;
    }
}
console.log(findNum());
