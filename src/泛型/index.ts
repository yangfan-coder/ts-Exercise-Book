/*  泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。*/
// function createArray(length: number, value: any): Array<any> {
//   let result = [];

//   for (let i = 0; i < length; i++) {
//     result.push(value);
//   }

//   return result;
// }

/* 我们在函数名后添加了 <T>，其中 T 用来指代任意输入的类型，在后面的输入 value: T 和输出 Array<T> 中即可使用了 */
// function createArray<T>(length: number, value: T): Array<T> {
//   let result: T[] = [];
//   for (let i = 0; i < length; i++) {
//     result[i] = value;
//   }
//   return result;
// }

// let res = createArray(4, '11');
// console.log(res);

// function swap<T, U>(tuple: [T, U]): [T, U] {
//   return [tuple[0], tuple[1]];
// }

// swap([1, '2']);

/* 错误 */
// function logg<T>(arg: T): T {
//   console.log(arg.length);
//   return arg;
// }

/* 正确：进行泛型约束 */
// interface Lengthwise {
//   length: number;
// }

// function log<T extends Lengthwise>(arg: T): T {
//   return arg;
// }
// log('1');
