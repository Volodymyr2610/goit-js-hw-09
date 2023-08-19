import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';


const inputDataTimer = document.querySelector('#datetime-picker');
const buttonStartTimer = document.querySelector('[data-start]');
const day = document.querySelector('[data-days]');
const hour = document.querySelector('[data-hours]');
const minute = document.querySelector('[data-minutes]');
const sec = document.querySelector('[data-seconds]');
const spans = document.querySelectorAll('.value');

let timerId = null;

buttonStartTimer.disabled = true;

flatpickr(inputDataTimer, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      buttonStartTimer.disabled = true;
    } else {
      Notiflix.Notify.success('Lets Go!');
      buttonStartTimer.disabled = false;
    }
  },
});

buttonStartTimer.addEventListener('click', startBtnClick);

function startBtnClick() {
  spans.forEach(item => item.classList.toggle('end'));
  buttonStartTimer.disabled = true;
  inputDataTimer.disabled = true;

  timerId = setInterval(() => {
    const countTime = new Date(inputDataTimer.value);
    let timeToFinish = countTime - Date.now();

    const { days, hours, minutes, seconds } = convertMs(timeToFinish);

    day.textContent = addLeadingZero(days);
    hour.textContent = addLeadingZero(hours);
    minute.textContent = addLeadingZero(minutes);
    sec.textContent = addLeadingZero(seconds);

    if (timeToFinish < 1000) {
      spans.forEach(item => item.classList.toggle('end'));
      clearInterval(timerId);
      inputDataTimer.disabled = false;
    }
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return `${value}`.padStart(2, '0');
}