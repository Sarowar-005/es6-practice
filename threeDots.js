// const kolin = 7800;
// const lhapru = 7500;
// const usai = 7000;
// const sarowar = 6500;
// const max = Math.max(kolin,lhapru, usai, sarowar);
// console.log(max);








// var marks = [44,55,66,99,88,75,26,48,33];
// const maximum = Math.max(...marks);
// const minimum = Math.min(...marks);
// console.log(maximum);
// console.log(minimum);r 


// function sum(num1, num2, ...args){
//     const max = Math.max(...arguments);
//     const min = Math.min(...args)
//     console.log(max);
//     console.log(min);
//     return num1 + num2
// }
// var result = sum(10,20,30,40,50);
// console.log(result);

// function myFun(x,y, ...args){
//     console.log(x);
//     console.log(y);
//     console.log(...args);
// }

// var input = ["a", "b", "c", "d", "f", "e", "g", "h"];
// myFun(...input);



// var numbers = [10,20,30,40,50,60,70,80,90,100];
// function sumNumbers(num1, num2, num3, ...arguments){
//         console.log(...arguments);
//     return num1 + num2 + num3;
// }
// var output = sumNumbers(...numbers);
// console.log(output);



// const marks = [55,66,99,88,77];
// let marks2 = [666,555,444,888];
// const marks3 = [011,022,033,044,055];

// marks2 = [...marks,55555555, ...marks2];
// console.log(marks2);

const numbers = [01,12,13,14,15,16,19,99];
const max = Math.max(...numbers);
const min = Math.min(...numbers);
console.log(max);
console.log(min);

const kolin = 10000;
const lhapru = 9000;
const usai = 8000;
const meraz = 7000;
const maximum = Math.max(kolin, lhapru, usai, meraz);
const minimum = Math.min(kolin, lhapru, usai, meraz);
console.log(maximum);
console.log(minimum);