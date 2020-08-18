// 6 Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: EUR,  EUR или AZN, и получает в ответ соответствующую сумму.

let dolars = +prompt("Введите сумму:");

const  EUR = 0.84;
const AZN = 0.5;

let eurSum = dolars * EUR;
let aznSum = dolars * AZN;


if (confirm("Конвертировать в EUR ?") ) {
    alert(eurSum);
}
if(confirm("Конвертировать в AZN ?")) {
    alert(aznSum);
}