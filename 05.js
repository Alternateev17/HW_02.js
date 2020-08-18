// 5 Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
// let number = +prompt("Введите трехзначное число:");
// let toStr = number.toString();
// let arr = [];
// for (let i = 0; i < toStr.length; i++) {
//   arr.push(toStr[i]);
// }
// if (arr[0] && arr[1] == arr[3] && arr[4]) {
//   console.log("Полиндром");
// } else {
//   console.log("Не полиндром");
// }
var number = +prompt("Введите пятизначное число число:");
var firstNum = (number / 1000).toFixed();
var secondNum = (number % 1000).toFixed();
var firstNumRight = (number / 100).toFixed();
var secondNumRight = (number % 100).toFixed();
if (firstNum == secondNumRight) {
    alert("Полиндром.");
}
else {
    alert("Не Полиндром.");
}
console.log(firstNum);
console.log(secondNumRight);
