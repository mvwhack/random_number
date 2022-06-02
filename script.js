'use strict';

//Загадывание случайного числа от 1 до 100
let start;


const randomNumber = function () {
  start = confirm("Угадай число от 1 до 100");

  function guessNumber() {
    let num = Math.floor(Math.random() * 100) + 1;
    let answer;
    let count = 10;

    console.log(num);

    const isNumber = function (num) {
      return !isNaN(parseFloat(num)) && isFinite(num);
    };

    function check() {
      if (answer > num) {
        alert("Загаданное число меньше, осталось попыток: " + count);
        question();
      } else if (answer < num) {
        alert("Загаданное число больше, осталось попыток: " + count);
        question();
      } else if (isNumber(answer) === false) {
        alert("Введи число!");
        question();
      }
    }

    function question() {
      let tryAgain;
      answer = prompt("Угадай число от 1 до 100");
      --count;

      if (count == 0) {
        tryAgain = confirm("Попытки закончились, хотите сыграть еще?");

        if (tryAgain === true) {
          guessNumber();
        } else {
          confirm("С вами было приятно играть!");
        }

      } else {
        if (answer == null) {
          alert("Игра окончена");
        } else if (Number(answer) === num) {
          tryAgain = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");

          if (tryAgain === true) {
            guessNumber();
          } else {
            confirm("С вами было приятно играть!");
          }

        } else if (answer !== num) {
          check();
        }
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