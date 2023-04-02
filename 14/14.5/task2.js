// Проверка, целое ли число
// важность: 3
// Напишите функцию isInteger(num), которая возвращает true, если num – целое число, иначе false.

// Например:

// alert( isInteger(1) ); // true
// alert( isInteger(1.5) ); // false
// alert( isInteger(-0.5) ); // false

const isInteger = (num) => (num ^ 0) === num

console.log(isInteger(1))
console.log(isInteger(1.5))
console.log(isInteger(-0.5))
