// 6 Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: EUR,  EUR или AZN, и получает в ответ соответствующую сумму.
var dolars = +prompt("Введите сумму:");
var EUR = 0.84;
var AZN = 0.5;
var eurSum = dolars * EUR;
var aznSum = dolars * AZN;
if (confirm("Конвертировать в EUR ?")) {
    alert(eurSum);
}
if (confirm("Конвертировать в AZN ?")) {
    alert(aznSum);
}
