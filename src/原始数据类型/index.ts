// 定义布尔值的类型的变量
let isDone: boolean = false;

// 定义数值的类型的变量
let mun: number = 6;

// 定义字符串的类型的变量
let TomName: string = 'Tom';

// 定义undefined的类型的变量
let u: undefined = undefined;

// 定义null的类型的变量
let n: null = null;

// 返回空值
function showName1(): void {}

// 返回布尔值
function showName2(): boolean {
  return true;
}

// 返回字符串
function showName3(): string {
  return '123';
}

/* *********值得注意************ */
// undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：

let mun1: number = u;
let mun2: number = n;

let string1: string = u;
let string2: string = n;

// 而 void 类型的变量不能赋值给 number 类型的变量[报错]

// let v: void;
// let mun3: munber = v;
