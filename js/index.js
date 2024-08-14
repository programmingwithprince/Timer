const action_button = document.getElementById("action_button");
const pause = document.getElementById("action_button_pause");
const stops = document.getElementById("action_button_stop");
const hPLUs =document.getElementById("addHour");
const  mPlus=document.getElementById("addMinute");
const  hMinus=document.getElementById("minusHour");
const  mMinus=document.getElementById("subtractMinute");
const  hours=document.getElementById("hours");
const box = document.getElementById("box")
const  minutes=document.getElementById("minutes");
var audio = new Audio("audio/alarm.mp3");
let paused = false;

audio.loop= true;
max=hours.max;
min=hours.min;
let timer;
hPLUs.addEventListener("click", plusH)
mPlus.addEventListener("click", plusM)
mMinus.addEventListener("click", minusM)
hMinus.addEventListener("click", minusH)
action_button.addEventListener("click", startTimer)
stops.addEventListener("click",stopp)
pause.addEventListener("click",pausee)

function plusH() {
   let hour = parseInt(hours.value);
  if (hour<max){
    hours.value = hour +1
  }
}
function minusM() {
  let minute = parseInt(minutes.value);
  // console.log(78);
  if (minute>min){
    minutes.value -= 1
  }
}
function plusM() {
  let minute = parseInt(minutes.value);
  // console.log(78);
  if (minute<max){
    minutes.value = minute+1
  }
}
function minusH() {
  let hour = parseInt(hours.value);
  if (hour>min){
    hours.value = hour -1
  }
}

function func() {
  audio.pause();
  audio.currentTime = 0
  box.style.display= "none";
}
function stopp() {
clearTimeout(timer) 
hours.value = 0;
minutes.value= 0;
pause.style.display = "none";
action_button.style.display ="unset";
  stops.style.display = "none";
  hPLUs.style.display = "unset";
  hMinus.style.display = "unset";
  mPlus.style.display = "unset";
  mMinus.style.display = "unset";
alert("Timer has stopped !");
}
function pausee() {
  if (!paused){
    clearTimeout(timer);
    pause.innerText= "Resume"
    paused = true
  }else{
    pause.innerText= "Pause"
    paused = false
    timer = setInterval(() => {
      total_time = (parseInt(hours.value) *60 ) + parseInt(minutes.value);
      if (total_time>1){
      new_minutes = total_time - 1
      let hour = Math.floor(new_minutes/60);
      let minute = new_minutes - (hour*60)
      console.log(hour,minute);
      hours.value = hour;
      minutes.value = minute;
      }else{
        clearTimeout(timer);
        audio.play();
        box.style.display= "block"
        action_button.style.display ="unset";
    pause.style.display = "none";
    stops.style.display = "none";
    hPLUs.style.display = "unset";
    hMinus.style.display = "unset";
    mPlus.style.display = "unset";
    mMinus.style.display = "unset";
  
      }
    }, 60000);
  }
}
function startTimer() {
  // console.log(77);
 if (((parseInt(hours.value) *60 ) + parseInt(minutes.value)) >0){
  action_button.style.display ="none";
  pause.style.display = "block";
  stops.style.display = "block";
  hPLUs.style.display = "none";
  hMinus.style.display = "none";
  mPlus.style.display = "none";
  mMinus.style.display = "none";


  timer = setInterval(() => {
    total_time = (parseInt(hours.value) *60 ) + parseInt(minutes.value);
    if (total_time>1){
    new_minutes = total_time - 1
    let hour = Math.floor(new_minutes/60);
    let minute = new_minutes - (hour*60)
    console.log(hour,minute);
    hours.value = hour;
    minutes.value = minute;
    }else{
      clearTimeout(timer);
      audio.play();
      box.style.display= "block"
      action_button.style.display ="unset";
  pause.style.display = "none";
  stops.style.display = "none";
  hPLUs.style.display = "unset";
  hMinus.style.display = "unset";
  mPlus.style.display = "unset";
  mMinus.style.display = "unset";

    }
  }, 60000);
}
}
function enforceMinMax(el) {
    if (el.value != "") {
      if (parseInt(el.value) < parseInt(el.min)) {
        el.value = el.min;
      }
      if (parseInt(el.value) > parseInt(el.max)) {
        el.value = el.max;
      }
    }
  }

