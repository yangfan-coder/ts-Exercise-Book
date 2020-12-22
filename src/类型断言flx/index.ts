/* 需要重新 梳理一下类型断言 */

// interface Cat {
//   name: string;
//   run(): void;
// }

// interface Fish {
//   name: string;
//   swim(): void;
// }

// function getName(animal: Cat | Fish) {
//   return animal.name;
// }

/* 错误 */
// function isFish(animal: Cat | Fish) {
//   if (typeof animal.swim === 'function') {
//     return true;
//   }
//   return false;
// }
/* 正确  这样就可以解决访问 animal.swim 时报错的问题了*/

// function isFish(animal: Cat | Fish) {
//   if (typeof (animal as Fish).swim === 'function') {
//     return true;
//   }
//   return false;
// }

// (window as any).foo = 1;
