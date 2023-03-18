// Вывод односвязного списка в обратном порядке
// важность: 5
// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

// Сделайте два решения: с использованием цикла и через рекурсию.

let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null,
			},
		},
	},
}

const printListWithLoop = (list) => {
	let temp = list
	let arr = []
	while (temp) {
		arr.push(temp.value)
		temp = temp.next
	}
	arr.reverse()
	arr.forEach((value)=>{
		console.log(value)
	})
}

const printListWithRecursion = (list) => {
	if (list.next) {
		printListWithRecursion(list.next)
	}
	console.log(list.value)
	
}

printListWithLoop(list)
printListWithRecursion(list)