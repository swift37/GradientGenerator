const colorPickers = document.querySelectorAll('.pickers input')
const previewContainer = document.querySelector('.preview-container')
const directionSelect = document.getElementById('direction')
const outputTextarea = document.getElementById('outputCode')
const refreshBtn = document.querySelector('.refresh-button')
const copyBtn = document.querySelector('.copy-button')

const generateGradient = isRandom => {
	if (isRandom) {
		colorPickers[0].value = getRandomColor()
		colorPickers[1].value = getRandomColor()
	}
	const gradient = `linear-gradient(${directionSelect.value}, ${colorPickers[0].value}, ${colorPickers[1].value})`
	console.log(gradient)
	previewContainer.style.background = gradient
	outputTextarea.textContent = `background: ${gradient};`
}

colorPickers.forEach(picker =>
	picker.addEventListener('input', () => generateGradient(false))
)

directionSelect.addEventListener('change', () => generateGradient(false))

const getRandomColor = () => {
	const hexColor = Math.floor(Math.random() * 0xffffff).toString(16)
	return '#' + hexColor
}

refreshBtn.addEventListener('click', () => generateGradient(true))

copyBtn.addEventListener('click', () => {
	navigator.clipboard.writeText(outputTextarea.textContent)
	copyBtn.textContent = 'Code has copied'
	setTimeout(() => (copyBtn.textContent = 'Copy Code'), 1500)
})
