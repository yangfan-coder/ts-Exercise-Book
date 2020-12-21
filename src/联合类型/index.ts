// let m5: string | number;

// m5 = 1;
// m5 = '123';

// // 当前的函数接受的值为 字符串或者 number；
// // 返回的是字符串类型
// const arr1 = '12345';
// function getLength(something: string | number): string {
//   return something.toString();
// }

// getLength(arr1);

/* *********注意************* */
// myFavoriteNumber 变成了string 访问他的length属性不会报错
// 但是在25行推断成了munber、访问他的length属性就会报错！

// let myFavoriteNumber: string | number;

// myFavoriteNumber = '12335';

// console.log(myFavoriteNumber.length);

// myFavoriteNumber = 7;
// console.log(myFavoriteNumber.length);
