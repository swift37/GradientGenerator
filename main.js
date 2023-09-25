const colorPickers = document.querySelectorAll('.pickers input')
const previewContainer = document.querySelector('.preview-container')
const directionSelect = document.getElementById('direction')
const outputTextarea = document.getElementById('outputCode')

const generateGradient = () => {
	const gradient = `linear-gradient(${directionSelect.value}, ${colorPickers[0].value}, ${colorPickers[1].value})`
	console.log(gradient)
	previewContainer.style.background = gradient
	outputTextarea.textContent = `background: ${gradient};`
}

colorPickers.forEach(picker =>
	picker.addEventListener('input', generateGradient)
)

directionSelect.addEventListener('change', generateGradient)
