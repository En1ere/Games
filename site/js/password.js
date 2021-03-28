'use strict';


function arrayConcat() {
    let arr_num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let arr_symb = ['!', '@', '#', '$', '%', '&', '?', '-', '+', '=', '~'];
    let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    let allSymbolsArr = arr_num.concat(arr_symb, arr_en, arr_EN);
    return allSymbolsArr;
};

function randomNumber() {
    return parseInt(Math.random() * arrayConcat().length);
};

function write(text) {
    document.getElementById("info").innerHTML = text;
}

function hide(id) {
    document.getElementById(id).style.display = "none";
}

function show(id) {
    document.getElementById(id).style.display = "block";
}

function generate() {
    let passLength = document.getElementById("passLength").value;
    if (passLength >= 1) {
        let password = [];

        for (let i = 0; i < passLength; i++) {
            let n = randomNumber();
            password.push(arrayConcat()[n]);
        }
        write(`Ваш пароль: ${password.join('')}`);
    } else {
        write('Необходимо ввести длину пароля!');
    }
};
