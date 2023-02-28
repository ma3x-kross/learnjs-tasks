// Покажите день недели
// важность: 5
// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

// Например:

// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getWeekDay(date) );        // нужно вывести "ВТ"

const getWeekDay = (date) => {
	const daysOfWeek = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
	return daysOfWeek[date.getDay()]
}

let date = new Date(2012, 0, 3) // 3 января 2012 года
console.log(getWeekDay(date)) // нужно вывести "ВТ"
