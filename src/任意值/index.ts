let n: string = 'hello';
n = '7';

// 任意值
let m: any = 123;
m = '1111';
m = false;

// 任意值的属性和方法§ 只编译、不执行
let anyThing: any = 'Tom';

anyThing.setName('1223');
anyThing.setName111('1223');
// console.log(anyThing.myName);
