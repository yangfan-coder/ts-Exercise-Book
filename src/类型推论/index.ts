// TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论。

// let mun = 7;
// mun = '123';

// 编译：
// let mun:number = 7;
// mun = '123'

// 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：
let mun;
mun = 7;
mun = false;
