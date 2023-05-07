let curentTime = document.querySelector('.curentTime');
let days = document.querySelector('#days');
let hourse = document.querySelector('#hourse');
let minutes = document.querySelector('#minutes');
let second = document.querySelector('#second');
let body = document.querySelector('body');
let clock = document.querySelector('.clock')
let month = document.querySelector('#month')
// console.log(clock);
// console.log(month);
// console.log(curentTime);
// console.log(days);
// console.log(hourse);
// console.log(minutes);
// console.log(second);
var allDays = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday"]
var allMonths = [
  "jan",
  "feb",
  "mar",
  "april",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec"]
let newDate = new Date(`${allDays} ${allMonths[4]} 13 2023 12:00:00`)
console.log(newDate.getTime())
// curentTime.innerText =newDate ;
let a = clock.innerHTML = allDays[newDate.getDay()] + "   " + newDate.getDate() + '  ' + allMonths[newDate.getMonth()] + " : " + newDate.getHours()+ " :  " + newDate.getMinutes() + " :  " + newDate.getSeconds()

let timer = (result) => {
  let todayDate = new Date()
  console.log(todayDate.getTime())
  let totalTime =  newDate.getTime()- todayDate.getTime();
  console.log(totalTime);
  days.innerHTML = `${ Math.floor( totalTime / 1000 / 60 / 60 / 24)} days
 ${Math.floor(totalTime / 1000 / 60 / 60) - (Math.floor(totalTime / 1000 / 60 / 60 / 24) * 24)  } hours
    ${Math.floor(totalTime /1000 / 60 - Math.floor(totalTime / 1000 / 60/60  ) *60 )} min 
    ${Math.floor(totalTime/1000 - Math.floor(totalTime / 1000 /60 )*60)} sec`



}
setInterval(timer,1000)

//
// let b =(Math.floor(12 / 1000 / 60 / 60) - (Math.floor(12  / 1000 / 60 / 60 / 24) * 24)) + " hours"
// console.log(b)




