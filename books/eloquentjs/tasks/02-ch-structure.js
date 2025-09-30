//ex 1 - Looping a triangle
/* Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
*/
let symb = '#'
for (let count = 0; count < 7; count += 1) {
    console.log(symb + '\n');
    symb = symb + '#';
}

// Fizz || Buzz
let n = 1;
for (let count = 0; count < 100; count += 1) {
    if (n % 3 == 0) {
        console.log("Fizz")
    } else if (n % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(n)
    }
    n += 1;
}

// Fizz && Buzz
let c = 1;
for (let count = 0; count < 100; count += 1) {
    if ((c % 3 == 0) && (c % 5 == 0)) {
        console.log("FizzBuzz")
    } else if (c % 3 == 0) {
        console.log("Fizz")
    } else if (c % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(c)
    }
    c += 1;
}

// // grid of #
// let width = 8;
// let height = 8;
// let str = '#';
// let w = 0;
// let h = 0;
// let resW = '';
// while (w < width) {
//     while (h < height) {
//         if (h % 2 != 0) {
//             resW+= ' ';
//             resW += str;
//             w += 1;
//             h += 1;
//         } else {
//             console.log(h)
//             w += 1;
//             h += 1;
//         }
//     }
//     console.log(resW)
//     h += 1;
// }