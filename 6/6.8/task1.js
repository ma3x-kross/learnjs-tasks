// Вывод каждую секунду
// важность: 5
// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

function printNumbersWithSetInterval(from, to) {
	let timerId = setInterval(() => {
		console.log(from)
		if (from == to) clearInterval(timerId)
		from++
	}, 1000)
}

function printNumbersWithSetTimeout(from, to) {
	let timerId = setTimeout(function tick() {
		console.log(from)
		if (from == to) return
		from++
		timerId = setTimeout(tick, 1000)
	}, 1000)
}

printNumbersWithSetTimeout(1, 10)
