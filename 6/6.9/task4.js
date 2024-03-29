// Тормозящий (throttling) декоратор
// важность: 5
// Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку, передавая вызов в f не более одного раза в ms миллисекунд. Те вызовы, которые попадают в период «торможения», игнорируются.

function throttle(func, ms) {
	let isThrottled = false
	let savedArgs
	let savedThis

	function wrapper() {
		if (isThrottled) {
			savedArgs = arguments
			savedThis = this
			return
		}

		func.apply(this, arguments)

		isThrottled = true

		setTimeout(function () {
			isThrottled = false

			if (savedArgs) {
				wrapper.apply(savedThis, savedArgs)
				savedArgs = savedThis = null
			}
		}, ms)
	}

	return wrapper
}

function f(a) {
	console.log(a)
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000)

f1000(1) // показывает 1
f1000(2) // (ограничение, 1000 мс ещё нет)
f1000(3) // (ограничение, 1000 мс ещё нет)
