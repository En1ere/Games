'use strict';

let score = 0;
let riddleArray = [
    {
        riddle: 'Что можно увидеть с закрытыми глазами?',
        answer: ["сон", "сновидение"],
    },
    {
        riddle: 'Какой болезнью никто не болеет на суше?',
        answer: ["морской", "укус акулы"],
    },
    {
        riddle: 'Какой конь не ест овса?',
        answer: ["шахматный", "мертвый"],
    },
    {
        riddle: 'Зимой и летом - одним цветом?',
        answer: ["ель", "елка", "ёлка"],
    },
    {
        riddle: 'Не огонь, а жжется?',
        answer: ["крапива", "лед"],
    },
    {
        riddle: 'Без рук, без топоренка, построена избенка?',
        answer: ["гнездо"],
    },
];

function init() {
    let riddleTextArray = riddleArray.map(el => {
        return el.riddle
    });
    riddleTextArray.forEach(el => {
        let indexEl = riddleTextArray.indexOf(el) + 1;
        document.querySelector('.game__body-riddles').insertAdjacentHTML('beforeend',
            `<div class="game__body-riddle">
            <p class="game__body-riddle-text">${el}</p>
            <input type="text" class="user__answer" id="userAnswer${indexEl}"><i
            class="fas fa-check game__body-riddles-icons correct__answer hidden"
            id="correct__answer${indexEl}"></i><i
            class="fas fa-times game__body-riddles-icons wrong__answer hidden"
            id="wrong__answer${indexEl}"></i>
        </div>`);
    })
}
function listenerClose() {
    document.querySelector('.fa-window-close').addEventListener('click', (el) => {
        el.target.parentNode.parentNode.classList.add('hidden');
    });
}
function hide(id) {
    document.querySelector(id).classList.add('hidden');
}
function show(id) {
    document.querySelector(id).classList.remove('hidden');
}
function hideIcons() {
    document.querySelectorAll('.game__body-riddles-icons').forEach(el => {
        el.classList.add('hidden');
    })
}
function showCorrectIcon(answerId) {
    document.querySelector('#' + answerId).classList.remove('hidden');
}
function showWrongIcon(answerId) {
    document.querySelector('#' + answerId).classList.remove('hidden');
}
function restart() {
    score = 0;
    document.querySelectorAll('.user__answer').forEach(el => {
        el.value = '';
    });
    hide('#buttonAgain');
    show('#buttonStart');
    insertTextResult('');
    hideIcons();
    unblockInputs();
    hideCorrectAnswers();
}
function insertTextResult(textContent) {
    document.querySelector('.game__body-riddles-modal-text').innerText = textContent;
}
function showModalResult() {
    document.querySelector('.modal__black-screen').classList.remove('hidden');
    listenerClose();
}
function closeModalResult() {
    document.querySelector('.modal__black-screen').classList.add('hidden');
}
function blockInputs(userAnswerNum, userAnswerValue) {
    let answersList = document.querySelectorAll('input');
    answersList[userAnswerNum].setAttribute('readonly', 'readonly');
    answersList[userAnswerNum].setAttribute('value', userAnswerValue);

}
function unblockInputs() {
    document.querySelectorAll('input').forEach(el => {
        el.removeAttribute('readonly');
        el.removeAttribute('value');
    })
}
function showCorrectAnswers(userAnswerNum) {
    let answerAreas = document.querySelectorAll('.game__body-riddle-answer');
    answerAreas[userAnswerNum].insertAdjacentText('beforeend', 'Показать ответ');
    // `${riddleArray[userAnswerNum].answer}`
}
function hideCorrectAnswers() {
    document.querySelectorAll('.game__body-riddle-answer').forEach(el => {
        el.textContent = '';
    })
}
function checkAnswer() {
    let userAnswersList = document.querySelectorAll('.user__answer');
    let correctAnswers = document.querySelectorAll('.correct__answer');
    let wrongAnswers = document.querySelectorAll('.wrong__answer');

    for (let i = 0; i < riddleArray.length; i++) {
        let currentScore = score;
        for (let n = 0; n < riddleArray[i].answer.length; n++) {
            if (userAnswersList[i].value.toLowerCase() == riddleArray[i].answer[n]) {
                score++;
                break;
            }
        }
        if (currentScore === score) {
            showWrongIcon(wrongAnswers[i].getAttribute('id'))
        } else {
            showCorrectIcon(correctAnswers[i].getAttribute('id'))
        }
        blockInputs([i], userAnswersList[i].value);
    }

}
function checkAnswers() {

    checkAnswer();

    if (score === riddleArray.length) {
        showModalResult();
        insertTextResult(`Великолепно! Вы отгадали все загадки!`);
        show('#buttonAgain');
        show('.game__body-riddles-modal');
        hide('#buttonStart');
    } else if ((score <= 4 && score >= 2) || (score <= 24 && score >= 22) || (score <= 34 && score >= 32) || (score <= 44 && score >= 42)) {
        showModalResult();
        insertTextResult(`Вы отгадали ${score} загадки`);
        show('#buttonAgain');
        show('.game__body-riddles-modal');
        hide('#buttonStart');
    } else if (score === 1 || score === 21 || score === 31 || score === 41 || score === 51) {
        showModalResult();
        insertTextResult(`Вы отгадали ${score} загадку`);
        show('#buttonAgain');
        show('.game__body-riddles-modal');
        hide('#buttonStart');
    } else if ((score >= 5 && score <= 20) || (score >= 25 && score <= 30) || (score >= 35 && score <= 40) || (score >= 45 && score <= 50)) {
        showModalResult();
        insertTextResult(`Вы отгадали ${score} загадок`);
        show('#buttonAgain');
        show('.game__body-riddles-modal');
        hide('#buttonStart');
    } else if (score === 0) {
        showModalResult();
        insertTextResult('Вы не отгадали ни одной загадки!');
        show('#buttonAgain');
        show('.game__body-riddles-modal');
        hide('#buttonStart');
    };

}
init();