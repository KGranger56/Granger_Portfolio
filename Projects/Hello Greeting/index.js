let time = document.getElementsByClassName('time');
let currentTime = document.getElementsByClassName('currentTime');

var today = new Date();
var date = today.getHours() + ':' + today.getMinutes() + ":" + today.getSeconds();
var hours = today.getHours();

function MyGreeting(){
  console.log(hours)
  if(hours < 4 || hours < 12){
    time[0].innerHTML=`Good Morning`
    currentTime[0].innerHTML=`Your current time is ${date}`
  }
  else if(hours >= 13 || hours <= 16){
    time[0].innerHTML=`Good Afternoon`
    currentTime[0].innerHTML=`Your current time is ${date}`
  }
  else if(hours >= 17 || hours <= 4) {
    time[0].innerHTML=`Good Evening`
    currentTime[0].innerHTML=`Your current time is ${date}`
}
}