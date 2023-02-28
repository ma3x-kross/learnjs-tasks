// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

const checkSpam = (str)=>{
	lowerStr = str.toLowerCase()
	console.log(lowerStr)
	if(lowerStr.includes('xxx') || lowerStr.includes('viagra')) return true
	return false
}

console.log(checkSpam('buy ViAgRA now'))