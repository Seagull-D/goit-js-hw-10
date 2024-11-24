"use strict"
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startBtn = document.querySelector("[data-start]")
startBtn.disabled = true;
console.log(startBtn)
let userSelectedDate = ""

flatpickr("#datetime-picker", {
enableTime: true,
time_24hr: true,
defaultDate: new Date(),
minuteIncrement: 1,
        onClose(selectedDates) {
                   
                if (selectedDates[0] > Date.now()) {
                        startBtn.disabled = false;
                        userSelectedDate = selectedDates[0]
                } else {
                    
                        window.alert("Please choose a date in the future")
                      
                }
                
console.log(userSelectedDate)
        }
});