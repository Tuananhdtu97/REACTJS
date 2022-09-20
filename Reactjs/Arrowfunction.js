// // 1. Decorection function
// function logger(log){
//     console.log(log);
// }

// logger('Messenger...');
// // 2. Expes function
// const logger2 = function(log2){
//     console.log(log2);
// }

// logger2('Messenger2...');
// // 3. Arrow function
// // vd 1
// const logger3 = (log3) => {
//     console.log(log3)
// }
// logger3('Messenger3........')
// // vd 2
// const sum = (a, b) => {
//     return a + b;
// }
// console.log(sum(2,3))
// // => 5

// // có thể viết lại như sau 
// const sum2 = (a, b) => a+b;
// console.log(sum2(23,3));
// // => 26

// // Vd 3 : 
// const sum3 = (a,b) => ({a: 2, b: 2});
// console.log(sum3("Tuan Anh", 5))
// // => {a: 2, b: 2 }

// const course = {
//     name: 'Javascript basic!',
//     getName: () => {
//         return this.name;
//     }
// };
// console.log(course.getName())

import logger from './module.js'
console.log(typeof logger)