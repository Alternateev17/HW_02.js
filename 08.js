// 8 Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.
var circleLength = +prompt("Введите длину окружности:");
var perimeterSquare = +prompt("Введите периметр квадрата:");
var radius = circleLength / Math.PI;
var sideSquare = perimeterSquare / 4;
if (radius <= sideSquare / 2) {
    alert("Окружность вписывается в квадрат.");
}
else {
    alert("Окружность НЕ впишется в квадрат.");
}
