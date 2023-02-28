// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

const filterRangeInPlace = (arr, a, b) => {
	for (let i = 0; i < 4; i++) {
		console.log(`${i} :${arr[i]}`)
		if (arr[i] < a || arr[i] > b) {
			arr.splice(i, 1)
			i--
		}
	}
}
const arr = [5, 3, 8, 1]
filterRangeInPlace(arr, 2, 5)
console.log(arr)
