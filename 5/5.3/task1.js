// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

const ucFirst = (str) => {
	return str ? str[0].toUpperCase() + str.slice(1).toLowerCase() : str
}

console.log(ucFirst('пРИВет'))
