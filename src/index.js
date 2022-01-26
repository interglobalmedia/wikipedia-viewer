import './styles/styles.scss'
import wikiViewerInit from './modules/wikiViewerInit'
import scrollStep from './modules/scrollStep'

window.onload = wikiViewerInit()

const clearResults = document.querySelector('.js-search-input')

clearResults.addEventListener('keydown', function (e) {
	const chord = e.keyCode || e.which
	if (chord === 8) {
		e.currentTarget.value = ''
		document.location.reload()
	}
})

const scrollButton = document.querySelector('.scroll')
scrollButton.addEventListener('click', scrollStep)
