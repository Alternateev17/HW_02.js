// 7 Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

let sum = +prompt("Введите сумму к оплате:");

if (sum >= 200 && sum <= 300) {
  alert(`Цена со скидкой 3%: ${(sum / 100) * 3 - sum} грн.`);

} else if (sum >= 300 && sum <= 500) {
  alert(`Цена со скидкой 5%: ${(sum / 100) * 5 - sum} грн.`);

} else if (sum > 500) {
  alert(`Цена со скидкой 7%: ${(sum / 100) * 7 - sum} грн.`);
  
} else {
  alert("Скидка не предусмотрена.");
}
