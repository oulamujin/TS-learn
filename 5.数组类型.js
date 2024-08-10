"use strict";
// 定义一个数组类型，有两种方法
// number[]
// const arr:number[] = [1,2,3]
// Array<number>   这种叫做泛型
// const arr:Array<number> = [1,2,3]
// 如何定义对象数组
// 使用interface
// interface X {
//     name: string
//     age?: number
// }
// const arr:X[] = [{name:'a',age: 1},{name:'b'}]
// 二维数组
// const arr:number[][] = [[1],[2],[3]]
// const arr1:Array<Array<number>> = [[1],[2],[3]]
// 数组类型是大杂烩
// const arr:any[] = [1,'a',true,{}]
// 数量有限可以用元组
// const arr1:[number,string,boolean,object] = [1,'a',true,{}]
// 数组在函数中的用法
function a(...args) {
    // console.log(args);
    // 还有一个关键字  arguments  这是一个类数组
    console.log(arguments);
    // const a:any[] = arguments  这样会报错，因为没有数组特有的方法
    const a = arguments;
}
a('1', '2');
