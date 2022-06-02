'use strict';

//Загадывание случайного числа от 1 до 100
let start;


const randomNumber = function () {
  start = confirm("Угадай число от 1 до 100");

  function guessNumber() {
    let num = Math.floor(Math.random() * 100) + 1;
    let answer;

    console.log(num);

    const isNumber = function (num) {
      return !isNaN(parseFloat(num)) && isFinite(num);
    };

    function check() {
      if (answer > num) {
        alert("Загаданное число меньше");
        question();
      } else if (answer < num) {
        alert("Загаданное число больше");
        question();
      } else if (isNumber(answer) === false) {
        alert("Введи число!");
        question();
      }
    }

    function question() {
      answer = prompt("Угадай число от 1 до 100");
      if (answer == null) {
        alert("Игра окончена");
      } else if (Number(answer) === num) {
        confirm("Поздравляю, Вы угадали!!!");
      } else if (answer !== num) {
        check();
      }
    }
    question();
  }

  if (start == true) {
    guessNumber();
  } else {
    alert("Игра окончена");
  }

};

randomNumber();