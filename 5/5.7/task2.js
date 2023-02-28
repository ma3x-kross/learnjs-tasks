// Отфильтруйте анаграммы
// важность: 4
// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

// Например:

// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

// Например:

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares']

const aclean = (arr) => {
	let map = new Map()
	arr.forEach((element) => {
		const splitStr = element.toLowerCase().split('').sort().join('')
		// console.log(splitStr)
		map.set(splitStr, element)
	})
	const res = []
	for (const values of map.values()) {
		res.push(values)
	}
	return res
}

console.log(aclean(arr)) // "nap,teachers,ear" или "PAN,cheaters,era"
