// 9 Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

let firstQuestion = alert("Вокруг чего вращаются планеты? , 1) Земл  2) Вокруг меня, 3) Солнца");

let answer = +prompt("Bедите правильный ответ:");
let arr = [1, 2, 3];
let balls = 0;

let corectAnswer = arr.filter((num) => num == 3);
if (answer == 3) {
  balls += 5;
  alert("Правильный ответ.");
} else {
  alert("Не верный ответ.");
}



let secondQuestion = alert("Какая планета третья от солнса? , 1) Земл  2) Марс, 3) Плутон");

let secondAnswer = +prompt("Bедите правильный ответ:");
let arr_2 = [1, 2, 3];

let corectAnswer_2 = arr_2.filter((num_2) => num_2 == 1);
if (secondAnswer == 1) {
  balls += 5;
  alert("Правильный ответ.");
} else {
  alert("Не верный ответ.");
}

let thirdQuestion = alert("Как называется какрликовая планета? , 1) Юпитер  2) Плутон, 3) Венера");

let thirdAnswer = +prompt("Bедите правильный ответ:");
let arr_3 = [1, 2, 3];

let corectAnswer_3 = arr_3.filter((num_3) => num_3 == 2);
if (thirdAnswer == 2) {
  balls += 5;
  alert("Правильный ответ.");
} else {
  alert("Не верный ответ.");
}

alert(`Количиство набранныч балов: ${balls}`);




