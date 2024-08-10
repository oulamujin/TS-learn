"use strict";
// 联合类型
// 符合其中一种即可
// let phone:number = 12312312313
// 但有时候电话号会有座机号，是字符串的，就可以使用联合类型   number 或者 string都行
// let phone: number | string = "010-808080080";
// const fn1 = function (type: number | boolean): boolean {
// 	return !!type;
// };
// console.log(fn1(true));
// 交叉类型
// 必须符合所有种类
// interface Pople {
// 	name: string;
// 	age: number;
// }
// interface Man {
// 	sex: number;
// }
// const jiaocha = (man: Pople & Man): void => {
// 	console.log(man);
// };
// jiaocha({
// 	name: "aa",
// 	age: 12,
// 	sex: 1,
// });
// 类型断言   <类型>值   值 as 类型 两种写法
// 变量 as 某一个类型 ： 当一个变量有两种及以上类型时，如果使用到其中一个类型的特有属性，可以使用类型断言
// 类型断言可以欺骗ts编辑器，但无法避免运行时的错误  所以不能滥用类型断言
// const fn1 = function (num: number | string): void {
// 	console.log((num as string).length);
// };
// fn1(123456);
// interface A {
// 	run: string;
// }
// interface B {
// 	build: string;
// }
// const fn1 = function (type: A | B): void {
// 	console.log((<A>type).run);
// };
// fn1({
// 	build: "a",
// });
// 直接访问abc 会报错window没有这个属性，但是类型断言为any之后就不报错了，但是还是存在类型错误的
// (window as any).abc = 11
// 返回的还是1 ,类型断言只是起到了不报错的效果，但是还是会存在实际错误
const fn1 = (type) => {
    return type;
};
console.log(fn1(1));
