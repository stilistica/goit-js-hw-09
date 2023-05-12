import getRandomHexColor from "./randomHexColor.js";

const body = document.querySelector('body');
const startEl = document.querySelector('[data-start]');
const stopEl = document.querySelector('[data-stop]');

let timer = 0;

startEl.addEventListener('click', beginChangeColor);
stopEl.addEventListener('click', finishColorChange);

function getColorBody() {
	body.style.backgroundColor = getRandomHexColor();
}

function beginChangeColor() {
	timer = setInterval(getColorBody, 1000);
	startEl.disabled = true;
}

function finishColorChange() {
	clearInterval(timer);
	startEl.disabled = false;
}



