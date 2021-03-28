'use strict';

let answer = parseInt(Math.random() * 100);
let tryCount = 0;
let maxTryCount = 7;

function readInt() {
    return +document.getElementById("userAnswer").value;
}

function restart() {
    tryCount = 0;
    document.getElementById("userAnswer").value = '';
    show("button");
    hide("buttonAgain");
    write("Угадайте число от 0 до 100 за семь попыток<br>Введите ответ ниже:");
    show("userAnswer");
}

function write(text) {
    document.getElementById("info").innerHTML = text;
}

function hide(id) {
    document.getElementById(id).style.display = "none";
}

function show(id) {
    document.getElementById(id).style.display = "inline";
}

function guess() {
    tryCount++;

    var userAnswer = readInt();
    if (userAnswer == answer) {
        write("<b>Поздравляю, вы угадали!</b>");
        hide("button");
        hide("userAnswer");
        show('buttonAgain');
    } else if (tryCount >= maxTryCount) {
        write("Вы проиграли<br>Правильный ответ: " + answer);
        hide("button");
        hide("userAnswer");
        show('buttonAgain');
    } else if (userAnswer > answer) {
        write("Ой, вы ввели слишком большое число!<br>Попробуйте ввести число поменьше. Введите число от 1 до 100");
    } else if (userAnswer < answer) {
        write("Ой, вы ввели слишком маленькое число!<br>Попробуйте ввести число побольше. Введите число от 1 до 100");
    }
}
