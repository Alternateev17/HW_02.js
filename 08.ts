// 8 Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

let circleLength = +prompt("Введите длину окружности:");

let perimeterSquare =+prompt("Введите периметр квадрата:");

let radius =  circleLength / Math.PI;

let sideSquare = perimeterSquare / 4;

if (radius <= sideSquare / 2) {
    alert("Окружность вписывается в квадрат.");
} else {
    alert("Окружность НЕ впишется в квадрат.");
}