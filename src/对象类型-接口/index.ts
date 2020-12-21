// Interfaces 变量的形状必须和接口的形状保持一致。接口名称首字母大写

// interface Person {
//   name: string;
//   age: number;
// }

/* 正确 */
// let tom: Person = {
//   name: 'Tom',
//   age: 35,
// };

/* 错误：不能缺少属性 */
// let tom: Person = {
//   name: 'Tom',
// };

/* 错误：多属性也不行 */
// let tom: Person = {
//   name: 'Tom',
//   age: 33,
//   gender:'222'
// };

/* 可选属性 */
// interface Person {
//   name: string;
//   age?: number;
// }

/* 正确 */
// let tom: Person = {
//   name: 'Tom',
// };

/* 正确 */
// let tom: Person = {
//   name: 'Tom',
//   age: 111,
// };

/* 错误：多属性也不行 */

// let tom: Person = {
//   name: 'Tom',
//   age: 111,
//   gender: '1',
// };

/* 任意属性 */

// 一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型：
// interface Person {
//   name: string;
//   age?: number;
//   [propName: string]: string | number;
// }

// let tom: Person = {
//   name: 'Tom',
//   age: 111,
//   aaa: '1',
// };

/* 只读属性 readonly */

// interface Person {
//   readonly name: string;
//   age?: number;
//   [propName: string]: string | number;
// }

// let tom: Person = {
//   name: 'Tom',
// };
// // 不能赋值
// tom.name = '1122';
