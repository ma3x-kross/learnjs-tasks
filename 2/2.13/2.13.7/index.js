// Напишите код, который выводит все простые числа из интервала от 2 до n.

label: for (let i = 2; i <= 10; i++) {
	for (let j = 2; j < i; j++) {
		if (i % j === 0) continue label
	}
	console.log(i)
}
