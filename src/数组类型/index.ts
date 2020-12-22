/* 正确 */
// let arr1: number[] = [1, 2, 3, 4];

// /* 正确 泛型*/
// let arr1: Array<number> = [1, 2, 3, 4];
// let arr2: Array<string> = ['1', ' 2', '3', '4'];

/* 报错 */
// let arr1: number[] = ['1', 2, 3, 4];

/* 报错 */
// let arr1: number[] = [1, 2, 3, 4];

// arr1.push('1')

// interface NumberArray {
//   [index: number]: number;
// }

// let fibo: NumberArray = [1, 2, 3, 4, 5];

// function sum() {
//   let args: {
//     [index: number]: number;
//     length: number;
//     callee: Function;
//   } = arguments;
// }

// IArguments 是 TypeScript 中定义好了的类型
// function sum() {
//   let args: IArguments = arguments;
// }

// 实际表示的就是以下：

// function sum() {
//   let args: {
//     [index: number]: number;
//     length: number;
//     callee: Function;
//   } = arguments;
// }
