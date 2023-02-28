// Напишите функцию random(min, max), которая генерирует случайное целое число  от min до max (но не включая max).

const random = (min, max) => {
	return Math.floor(Math.random()*(1+max-min)+min)
}

console.log(random(1, 3))
