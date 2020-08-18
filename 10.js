// 10 Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.
var year = +prompt("Введите год:");
// let month = +prompt("Введите месяц:");
// let day = +prompt("Введите день:");
var date = new Date(year);
var yearDate = date.getFullYear();
// let monthDate = date.getMonth();
// let dayDate = date.getDay();
var calc = yearDate;
if (yearDate) {
    yearDate += yearDate;
}
console.log(calc);
