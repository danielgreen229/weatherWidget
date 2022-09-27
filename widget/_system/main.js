function init () {
	setFontSize();
	window.addEventListener('resize', setFontSize);
}

function setFontSize () {
	var el = document.getElementById('widget-container-inner'),
		rect = el.getBoundingClientRect(),
		width = rect.width,
		fontSize = width * 18 / 1920;
	el.style.fontSize = fontSize + 'px';
}

init();