// выражение - программа
1;
!false;

// переменные и привязки
let caught = 5 * 5;

let ten = 10;
console.log(ten * ten);
// → 100

// задаем новую привязку
let mood = "light";
console.log(mood);
// → light
mood = "dark";
console.log(mood);
// → dark

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);
// → 105

// одним let можно задать несколько привязок
let one = 1, two = 2;
console.log(one + two);
// → 3

// var и const для создания привязок
var name = "Ayda";
const greeting = "Hello ";
console.log(greeting + name);
// → Hello Ayda

//console.log func
let x = 30;
console.log("the value of x is", x);
// → the value of x is 30

// функции возвращают значения
console.log(Math.max(2, 4));
// → 4

console.log(Math.min(2, 4) + 100);
// → 102

// выполнение сверху вниз
// let theNumber = Number(prompt("Pick a number"));
// console.log("Your number is the square root of " +
//             theNumber * theNumber);

// условное выполнение
// let tNumber = Number(prompt("Pick a number"));
// if (!Number.isNaN(tNumber)) {
//   console.log("Your number is the square root of " +
//               tNumber * tNumber);
// }

// фигурные скобки опущены, т.к. выражение короткое
if (1 + 1 == 2) console.log("It's true");
// → It's true

// else - альтернативный путь в if
// let thNumber = Number(prompt("Pick a number"));
// if (!Number.isNaN(thNumber)) {
//   console.log("Your number is the square root of " +
//               thNumber * thNumber);
// } else {
//   console.log("Hey. Why didn't you give me a number?");
// }

// цепочка if else
// let num = Number(prompt("Pick a number"));

// if (num < 10) {
//   console.log("Small");
// } else if (num < 100) {
//   console.log("Medium");
// } else {
//   console.log("Large");
// }

// цикличиский поток
let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}
// → 0
// → 2
//   … etcetera

// цикл для вычисления 2 в 10й
let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
// → 1024

// цикл do
// let yourName;
// do {
//   yourName = prompt("Who are you?");
// } while (!yourName);
// console.log("Hello " + yourName);

// правильные отступы
if (false != true) {
  console.log("That makes sense.");
  if (1 < 2) {
    console.log("No surprise there.");
  }
}

// цикл for
for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}
// → 0
// → 2
//   … etcetera

// цикл для 2 в 10й вместо while
let res = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  res = res * 2;
}
console.log(res);
// → 1024

// break для завершения
for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}
// → 21

// сокращения для операторов
for (let number = 0; number <= 12; number += 2) {
  console.log(number);
}

//switch
// switch (prompt("What is the weather like?")) {
//   case "rainy":
//     console.log("Remember to bring an umbrella.");
//     break;
//   case "sunny":
//     console.log("Dress lightly.");
//   case "cloudy":
//     console.log("Go outside.");
//     break;
//   default:
//     console.log("Unknown weather type!");
//     break;
// }