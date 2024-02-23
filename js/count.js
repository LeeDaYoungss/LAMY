/* SALE ITEM */

moment.locale('ko');
let dueDate = document.querySelector('.card_title span').getAttribute('data-date');
let targetDate = moment(dueDate); //디데이
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

// 1초마다 갱신되어야 함
setInterval(()=>{
  let now = moment(); //현재 시간 구하기
  let timeLeft = moment.duration(targetDate.diff(now));
  let dueDays = targetDate.diff(now, 'days') // 
  let dueHours = timeLeft._data.hours // 
  let dueMinutes = timeLeft._data.minutes // 
  let dueSeconds = timeLeft._data.seconds //

  days.innerText = numberFormat(dueDays);
  hours.innerText = numberFormat(dueHours);
  minutes.innerText = numberFormat(dueMinutes);
  seconds.innerText = numberFormat(dueSeconds);
},1000);

// 시간 한자리 나오게 되면 앞에 0으로 채우기
function numberFormat(num){
  let convertedNum = num;
  if(num < 10){
    convertedNum = `0${num}`;
  }
  return convertedNum;
}

