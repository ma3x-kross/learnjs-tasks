// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

const truncate = (str, maxLength) => {
	if (str.length > maxLength) {
		str = str.slice(0, maxLength - 1) + '…'
	}
	return str
}

console.log(truncate('Привет', 6))
