const colorPickers = document.querySelectorAll('.pickers input')
const previewContainer = document.querySelector('.preview-container')

const generateGradient = () => {
	const gradient = `linear-gradient(to top right, ${colorPickers[0].value}, ${colorPickers[1].value})`
	console.log(gradient)
	previewContainer.style.background = gradient
}

colorPickers.forEach(picker =>
	picker.addEventListener('input', generateGradient)
)
