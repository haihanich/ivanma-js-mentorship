let backtick = `new
day
in my life

`;
console.log(backtick);

let lineEsc = "here\" goes \nnew line \n";
console.log(lineEsc);

let tabEsc = 'here goes \ttabulation';
console.log(tabEsc);

console.log("A newline character is written like \"\\n\".");

console.log('"hey!"');

let first = "1";
let second = "one";
let sum = first + second + `please count ${50/2}`;

console.log(typeof sum, sum);