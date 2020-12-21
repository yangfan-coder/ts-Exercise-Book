// 在 TypeScript 中，我们使用 : 指定变量的类型，: 的前后有没有空格都可以。
function sayHello(person: string) {
  return 'Hello' + person;
}
var user = 'Tom';
let result = sayHello(user);

console.log(result);
