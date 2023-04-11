let time = document.getElementsByClassName('time');
let currentTime = document.getElementsByClassName('currentTime');
let name = document.getElementById('greeting');

var today = new Date();
var date = today.getHours() + ':' + today.getMinutes() + ":" + today.getSeconds();
var hours = today.getHours();

function MyGreeting(){
  if(hours < 4 && hours < 12){
    let name = name.value;
    time[0].innerHTML=`Good Morning, ${name.value}`
    currentTime[0].innerHTML=`Your current time is ${date}`
  }
  else if(hours >= 13 && hours <= 16){
    time[0].innerHTML=`Good Afternoon, ${name.value}`
    currentTime[0].innerHTML=`Your current time is ${date}`
  }
  else if(hours >= 17 && hours >= 4) {
    time[0].innerHTML=`Good Evening, ${name.value}`
    currentTime[0].innerHTML=`Your current time is ${date}`
}
}