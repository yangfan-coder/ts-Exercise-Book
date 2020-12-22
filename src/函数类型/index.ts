// function sum(x: number, y: number): number {
//   return x + y;
// }
// /* 正确 */
// sum(1, 2);

/* 错误 */
// sum(1, 2, 3);
// sum(1);

// interface SearchFunc {
//   (source: string, subString: string): boolean;
// }

// let mySearch: SearchFunc;

// mySearch = function (source: string, subString: string) {
//   return false;
// };

// function buildName(firstName: string, lastName?: string) {
//   return `${firstName}===${lastName}`;
// }
// let tomat = buildName('111', '222');

/* 函数重载 */

function reverse(x: number): number;
function reverse(x: string): number;

function reverse(x: string | number): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('');
  }
}
