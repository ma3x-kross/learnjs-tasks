// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

function pow(x, n) {
	return x ** n
}

let x = prompt('Введите x')
let n = prompt('Введите n', '')
if (n < 1) {
	alert('Степень должна быть ')
} else {
	alert(pow(x, n))
}