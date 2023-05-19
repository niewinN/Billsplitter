const price = document.querySelector('#price')
const person = document.querySelector('#people')
const tip = document.querySelector('#tip')
const calculateBtn = document.querySelector('.calculate')
const error = document.querySelector('.error')
const info = document.querySelector('.info')

const showError = () => {
	if (price.value == '' || people.value == '' || tip.value == 0) {
		error.textContent = 'Fill in all fields!'
		error.style.color = 'red'
		info.textContent = ''
	} else {
		error.textContent = ''
		calculateBill()
	}
}

const calculateBill = () => {
	const newPrice = parseFloat(price.value)
	const newPeople = parseInt(people.value)
	const newTip = parseFloat(tip.value)
	const sum = (newPrice + newPrice * newTip) / newPeople
	info.textContent = `Amount per person ${sum.toFixed(2)}€`
	info.style.color = 'rgb(199, 129, 0)'
}

calculateBtn.addEventListener('click', showError)
