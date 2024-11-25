"use strict"
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startBtn = document.querySelector("[data-start]")
startBtn.disabled = true;
console.log(startBtn)
let userSelectedDate = {};
let currentSecond ;
let currentMinutes;
let currentHours;
let currentDays;

flatpickr("#datetime-picker", {
enableTime: true,
time_24hr: true,
defaultDate: new Date(),
minuteIncrement: 1,
        onClose(selectedDates) {
                   
                if (selectedDates[0] > Date.now()) {
                       
                        startBtn.disabled = false;
                        userSelectedDate.userDay = selectedDates[0].getDay();
                        userSelectedDate.userHours = selectedDates[0].getHours();
                        userSelectedDate.userMinutes = selectedDates[0].getMinutes();
                        userSelectedDate.userSeconds = selectedDates[0].getSeconds();
                } else {
                    
                        window.alert("Please choose a date in the future")
                      
                }
                

        }
});

class Timer {
        constructor({ onTik }) {
                this.onTik = onTik,
                
        this.isActive = false
        }
        
        start() {
                if (this.isActive) {
                        return
                }
                const startTime = Date.now();
                this.isActive = true;
                setInterval(() => {
                        const currentTime = Date.now();
                        const delta = currentTime - startTime;
                        const time = this.convertMs(delta);
                        
                        currentSecond = userSelectedDate.userSeconds - time.seconds;
                        currentMinutes = userSelectedDate.userMinutes - time.minutes;
                        currentHours = userSelectedDate.userHours - time.hours;
                        currentDays = userSelectedDate.userDay - time.days;
                        if (currentSecond < 0) {
                                currentSecond += 60;
                        }
                        console.log(currentDays, currentHours, currentMinutes, currentSecond)
                        
                }, 1000);
        } 
         convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

}

const timer = new Timer({onTik:addTimerFace})
        

startBtn.addEventListener("click", timer.start.bind(timer))

console.log(userSelectedDate)

function addTimerFace(currentDays, currentHours, currentMinutes, currentSecond ) {
       const seconds = document.querySelector("[data-seconds]") 
        console.log(seconds)
}
