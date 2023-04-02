// Задачей является создать функцию-генератор pseudoRandom(seed), которая получает seed и создаёт генератор с указанной формулой.

// Пример использования:

// let generator = pseudoRandom(1);

// alert(generator.next().value); // 16807
// alert(generator.next().value); // 282475249
// alert(generator.next().value); // 1622650073

function* pseudoRandom(seed) {
	let previous = seed

	while (true) {
		let next = (previous * 16807) % 2147483647
		previous = next
		yield next
	}
}

let generator = pseudoRandom(1)

console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
