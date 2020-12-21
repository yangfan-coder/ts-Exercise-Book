// 定义布尔值的类型的变量
var isDone = false;
// 定义数值的类型的变量
var mun = 6;
// 定义字符串的类型的变量
var TomName = 'Tom';
// 定义undefined的类型的变量
var u = undefined;
// 定义null的类型的变量
var n = null;
// 返回空值
function showName1() { }
// 返回布尔值
function showName2() {
    return true;
}
// 返回字符串
function showName3() {
    return '123';
}
/* *********值得注意************ */
// undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
var mun1 = u;
var mun2 = n;
var string1 = u;
var string2 = n;
