let hourEl = document.querySelector('.hour');
let minuteEl = document.querySelector('.minute')
let secondeEl = document.querySelector('.seconde');

function updateClock(){
  let currentDate = new Date();
  setTimeout(updateClock,1000);
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const seconde = currentDate.getSeconds();
  console.log(hour,seconde,minute);
  
  const hourDeg = (hour / 12) *360;
  hourEl.style.transform = `rotate(${hourDeg}deg)`;
  
  const minuteDeg = (minute / 60) *360;
  minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
  
  const secondeDeg = (seconde / 60) *360;
  secondeEl.style.transform = `rotate(${secondeDeg}deg)`;
}
updateClock();
