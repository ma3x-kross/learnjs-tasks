// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

// Функция getMaxSubSum(arr) должна возвращать эту сумму.

const getMaxSubSum = (arr) => {
	let result = 0
	let tempResult = 0

	for (const item of arr) {
		tempResult += item
		if (tempResult < 0) tempResult = 0
		result = result > tempResult ? result : tempResult
	}
	return result
}
