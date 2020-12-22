let body: HTMLElement = document.body;

let allDiv: NodeList = document.querySelectorAll('div');

/* ts 重写了 addEventListener的方法 不存在targetCurrent*/
// document.addEventListener('click', function (e) {
//   console.log(e.targetCurrent);
// });
