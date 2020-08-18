// 3 Запросить у пользователя трехзначное и число и проверить, есть ли в нем одинаковые цифры.
// let number = +prompt("Введите трехзначное число:");
// let str = number.toString();
// for (let i = 0; i < str.length; i++) {
//   if (str[0] == str[1] || str[0] == str[2]) {
//     alert("Есть совпадение");
//   } else if (str[1] == str[2] || str[1] == str[0]) {
//     alert("Есть совпадение");
//   } else if (str[2] == str[1] || str[2] == str[0]) {
//     alert("Есть совпадение");
//   } else {
//     alert("Совпадений нет");
//   }
// }
var num = +prompt("Введите трехзначное число:");
var num_1 = ~~(num / 100);
var num_2 = (num % 100);
var num_3 = ~~(num_2 / 10);
var num_4 = (num_2 % 10);
if (num_1 == num_3 || num_1 == num_4 || num_3 == num_4) {
    alert("Есть совпадения");
}
else {
    alert("Совпадений нет");
}
