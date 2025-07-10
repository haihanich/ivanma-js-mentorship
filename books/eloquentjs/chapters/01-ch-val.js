//e - степень (exponent) 
console.log(2.998e8);

// строки можно писать в любых кавычках
console.log(`Down on the sea`, "Lie on the ocean", 'Float on the ocean'); 

// \n - new line
console.log("This is the first line\nAnd this is the second");

// \ - для экранирования символа
console.log("A newline character is written like \"\\n\".");

// конкатенация строк
console.log("con" + "cat" + "e" + "nate");

// шаблонные литералы 
console.log(`half of 100 is ${100 / 2}`);

// унарный оператор - typeof
console.log(typeof 4.5)
// → number
console.log(typeof "x")
// → string

// оператор (-) может быть как бинарным, так и унарным
console.log(- (10 - 2))
// → -8

// булевые значения
console.log(3 > 2)
// → true
console.log(3 < 2)
// → false

// сравнение строк (сравнивает символы по Unicode слева направо, заглавные буквы всегда меньше строчных)
console.log("Aardvark" < "Zoroaster")
// → true

// операторы сравнения
console.log("Garnet" != "Ruby")
// → true
console.log("Pearl" == "Amethyst")
// → false

// единственное значение, которое не равно себе в JS
console.log(NaN == NaN)
// → false

// бинарный оператор && (логическое И), чтобы результат был истинен - оба значения должны быть истинны
console.log(true && false)
// → false
console.log(true && true)
// → true

//оператор || (ИЛИ), чтобы результат был истинен, хотя бы одно значение должно быть истинно
console.log(false || true)
// → true
console.log(false || false)
// → false

// операторы в порядке возрастания приоритета: ||, &&, >, == ...
console.log(1 + 1 == 2 && 10 * 10 > 50);

// тернарный оператор (единственный в JS) - условный оператор
console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2

// приведение типов
console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true

console.log(null == undefined);
// → true
console.log(null == 0);
// → false

// приведение типов с ||
console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes

// оператор ??
console.log(0 || 100);
// → 100
console.log(0 ?? 100);
// → 0
console.log(null ?? 100);
// → 100