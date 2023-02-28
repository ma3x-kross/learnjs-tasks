// Форматирование относительной даты
// важность: 4
// Напишите функцию formatDate(date), форматирующую date по следующему принципу:

// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
// Например:

// alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// // вчерашняя дата вроде 31.12.2016, 20:00
// alert( formatDate(new Date(new Date - 86400 * 1000)) );

const formatDate = (date) => {
	const pastTime = (new Date() - date) / 1000
	if (pastTime < 1) return 'прямо сейчас'
	if (pastTime < 60) return `${pastTime} сек. назад`
	if (pastTime < 1000) return `${pastTime / 60} мин. назад`
	const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
	const month =
		date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
	const year = date.getFullYear() % 100
	const time = `${date.getHours()}:${date.getMinutes()}`
	return `${day}.${month}.${year} ${time}`
}

console.log(formatDate(new Date(new Date() - 1))) // "прямо сейчас"

console.log(formatDate(new Date(new Date() - 30 * 1000))) // "30 сек. назад"

console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))) // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log(formatDate(new Date(new Date() - 86400 * 1000)))
