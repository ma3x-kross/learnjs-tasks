// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
const isEmpty = (obj) => {
	for (let item in obj) {
		return false
	}
	return true
}
