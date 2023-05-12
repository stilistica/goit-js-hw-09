import flatpickr from "flatpickr";
import convertMs from './convertTime.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import "flatpickr/dist/flatpickr.min.css";

const inputDatePicker = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minRef = document.querySelector('[data-minutes]');
const secRef = document.querySelector('[data-seconds]');

let timer = 0;
let getTime = 0; 
let formatDate = 0;

btnStart.disabled = true;

// ----------------------для ускладнення, при нажиманні Escape таймер відновлюється------------
// window.addEventListener('keydown', (e) => {
// 	if (e.code === 'Escape' && timer) {
// 		clearInterval(timer);

// 		inputDatePicker.disabled = false;
// 		btnStart.disabled = true;

// 		secRef.textContent = "00";
// 		minRef.textContent = "00";
// 		hoursRef.textContent = "00";
// 		daysRef.textContent = "00";
// 	}
// })

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
	minuteIncrement: 1,
	// minDate: new Date(),
  onClose(selectedDates) {
		console.log(selectedDates[0]);
		currentDate(selectedDates[0]);
  },
};
flatpickr(inputDatePicker, options);

function currentDate(selectedDates) {
	const currentDate = Date.now();

	if (currentDate > selectedDates) {
		// return(alert(`Please choose a date in the future`))
		return Notify.info('Please choose a date in the future');
	} 

	btnStart.disabled = false;
	getTime = selectedDates.getTime() - currentDate;
	formatDate = convertMs(getTime);
	showDate(formatDate);
}

btnStart.addEventListener('click', onBtnStart)

function onBtnStart() {
	timer = setInterval(startTimer, 1000);
}

function startTimer() {
	btnStart.disabled = true;
	inputDatePicker.disabled = true;

	getTime -= 1000;

	if (secRef.textContent <= "00" && minRef.textContent <= "00" && hoursRef.textContent <= "00" && daysRef.textContent <= "00") {
		clearInterval(timer);
		Notify.success('time is up');
	} else {
		formatDate = convertMs(getTime);
		showDate(formatDate);
	}
}

function showDate(formatDate) {
	secRef.textContent = formatDate.seconds;
	minRef.textContent = formatDate.minutes;
	hoursRef.textContent = formatDate.hours;
	daysRef.textContent = formatDate.days;
}

