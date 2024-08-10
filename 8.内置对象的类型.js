"use strict";
// 1.ecma Number Date RegExp Error XMLHttprequest
// 2.dom querySelect MouseEvent
// 3.bom promise localstorage location cookie
// 4.案例
// 内置对象
//ECMAScript内置对象
// let b: Boolean = new Boolean(1);
// console.log(b);
// let n: Number = new Number();
// console.log(n);
// let s: String = new String("aaaa");
// console.log(s);
// let d: Date = new Date();
// console.log(d);
// let r: RegExp = new RegExp(/^1/);
// console.log(r);
// let e: Error = new Error("错误");
// // console.log(e);
// DOM 、BOM 的内置对象
// // div 的类型是 HTMLDivElement   也就是说你获取到的是啥元素   HTML(元素名称)Element
// const div = document.querySelector("div");
// // 但有些毫无特殊的标签  HTMLElement  就全部都是这个类型  也可以断言成 Element
// const div1 = document.querySelector("header");
// const div2 = document.querySelector("footer");
// // 当获取到的是集合时  可以使用NodeList   NodeList可以使用forEach去遍历当前的每个节点
// const div3: NodeList = document.querySelectorAll("footer");
// // 当获取到的是动态的，可以使用NodeListOf<类型>  当里面的类型不固定的时候可以使用
// const div4: NodeListOf<HTMLDivElement | HTMLElement> =
// 	document.querySelectorAll("div footer");
// 浏览器的内置对象
// let local: Storage = localStorage;
// let lo: Location = location;
// let cookie: string = document.cookie;
// let promise: Promise<string> = new Promise((resolve) => resolve("1"));
// console.log(cookie);
// promise.then((res) => {
// 	res;
// });
