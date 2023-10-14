const monthEl = document.querySelector('.date h1');
const datesEl = document.querySelector('.date p');
const days = document.querySelector('.days')
const monthsIndex = new Date().getMonth();


const lastDay = new Date(new Date().getFullYear(),monthsIndex+1,0).getDate();

const firstDay = new Date(new Date().getFullYear(),monthsIndex,1).getDay()-1;

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

datesEl.innerText = new Date().toDateString();
let day = "";


for(let i=firstDay; i>0 ;i--){
   day += `<div class = "empty"> </div>`;
}

for(let i=1;i<=lastDay;i++){
    if(i === new Date().getDate()){
        day += `<div class = "today">${i}</div>`
    }else{
        day += `<div class = "dates"> ${i} </div>`;
    }
}

days.innerHTML = day;