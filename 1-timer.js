import"./assets/styles-CL-p8ArJ.js";import{f as l}from"./assets/vendor-EyZmBGcZ.js";const i=document.querySelector("[data-start]");i.disabled=!0;let o=null;l("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]>Date.now()?(i.disabled=!1,o=e[0]):window.alert("Please choose a date in the future")}});class h{constructor({onTik:t}){this.onTik=t,this.isActive=!1,this.intervalId=null}start(){this.isActive||!o||(this.isActive=!0,this.intervalId=setInterval(()=>{const t=Date.now(),n=o-t;if(n<=0){clearInterval(this.intervalId),this.isActive=!1,this.onTik({days:0,hours:0,minutes:0,seconds:0});return}const r=this.convertMs(n);this.onTik(r)},1e3))}convertMs(t){const a=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),d=Math.floor(t%864e5%36e5/6e4),u=Math.floor(t%864e5%36e5%6e4/1e3);return{days:a,hours:c,minutes:d,seconds:u}}}const s=new h({onTik:m});i.addEventListener("click",s.start.bind(s));function m({days:e,hours:t,minutes:n,seconds:r}){document.querySelector("[data-days]").textContent=String(e).padStart(3,"0"),document.querySelector("[data-hours]").textContent=String(t).padStart(2,"0"),document.querySelector("[data-minutes]").textContent=String(n).padStart(2,"0"),document.querySelector("[data-seconds]").textContent=String(r).padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map
