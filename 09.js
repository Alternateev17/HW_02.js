// 9 Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.
var firstQuestion = alert("Вокруг чего вращаются планеты? , 1) Земл  2) Вокруг меня, 3) Солнца");
var answer = +prompt("Bедите правильный ответ:");
var arr = [1, 2, 3];
var balls = 0;
var corectAnswer = arr.filter(function (num) { return num == 3; });
if (answer == 3) {
    balls += 5;
    alert("Правильный ответ.");
}
else {
    alert("Не верный ответ.");
}
var secondQuestion = alert("Какая планета третья от солнса? , 1) Земл  2) Марс, 3) Плутон");
var secondAnswer = +prompt("Bедите правильный ответ:");
var arr_2 = [1, 2, 3];
var corectAnswer_2 = arr_2.filter(function (num_2) { return num_2 == 1; });
if (secondAnswer == 1) {
    balls += 5;
    alert("Правильный ответ.");
}
else {
    alert("Не верный ответ.");
}
var thirdQuestion = alert("Как называется какрликовая планета? , 1) Юпитер  2) Плутон, 3) Венера");
var thirdAnswer = +prompt("Bедите правильный ответ:");
var arr_3 = [1, 2, 3];
var corectAnswer_3 = arr_3.filter(function (num_3) { return num_3 == 2; });
if (thirdAnswer == 2) {
    balls += 5;
    alert("Правильный ответ.");
}
else {
    alert("Не верный ответ.");
}
alert("\u041A\u043E\u043B\u0438\u0447\u0438\u0441\u0442\u0432\u043E \u043D\u0430\u0431\u0440\u0430\u043D\u043D\u044B\u0447 \u0431\u0430\u043B\u043E\u0432: " + balls);
// for (let i = 0; i < arr.length; i++) {
//     if (arr[2] == answer) {
//         balls += 5;
//          alert("Правильный ответ.");
//     } else {
//         alert("Ответ не верный.");
//     }
// }
