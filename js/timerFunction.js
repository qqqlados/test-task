function timerInSeconds(initialTime) {
	const timerDiv = document.querySelector('.timer')
	let time = initialTime

	const rakuten = document.querySelector('.rakuten')
	const mensClothing = document.querySelector('.mens-clothing')

	const toggleSites = () => {
		rakuten.classList.toggle('fadeout')

		mensClothing.classList.toggle('fadein')
	}

	const timerInterval = setInterval(() => {
		if (time >= 0) {
			if (time === 0) {
				toggleSites()
			}
			timerDiv.textContent = `${time} seconds`
			time -= 1
			return time
		} else {
			clearInterval(timerInterval)
			timerDiv.textContent = '0 seconds'

			setTimeout(() => {
				resetTimer(initialTime)
			}, 2000)
		}
	}, 1000)
}

function resetTimer(initialTime) {
	timerInSeconds(initialTime)
}

timerInSeconds(5)

function scrollToTop() {
	console.log('Click!')
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
}

const scrollButton = document.querySelector('.btn-scroll-top')
scrollButton.addEventListener('click', scrollToTop)
