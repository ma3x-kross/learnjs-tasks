// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

const filterRange = (arr, a, b) => {
	const filteredArr = []
	arr.filter((item)=>{
		if(item>=a && item<=b) filteredArr.push(item)
	})
	return filteredArr
}

console.log(filterRange([5, 3, 8, 1], 1, 4))