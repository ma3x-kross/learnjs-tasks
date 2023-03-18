// Вычислить сумму чисел до данного
// важность: 5
// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// Например:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3+
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Сделайте три варианта решения:

// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.

const sumToWithLoop = (num) => {
	let sum = 0
	for (let i = 1; i <= num; i++) {
		sum += i
	}
	return sum
}

const sumToWithRecursion = (num) => {
	if (num === 1) return num
	return sumToWithLoop(num - 1) + num
}

const sumToWithProgression = (num) => {
	return (num * (num + 1)) / 2
}

console.log(sumToWithLoop(100000))
console.log(sumToWithRecursion(100000))
console.log(sumToWithProgression(100000))
