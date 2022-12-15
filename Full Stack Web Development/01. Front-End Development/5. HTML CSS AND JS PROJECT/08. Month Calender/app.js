const monthEl = document.querySelector('.date h1');
const datesEl = document.querySelector('.date p');
const monthsIndex = new Date().getMonth();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "august",
    "september",
    "october",
    "november",
    "december"
]
monthEl.innerText = months[monthsIndex];
datesEl.innerText = new Date().toDateString();bhjhbn