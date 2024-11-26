const timer = document.querySelector(".container")
const mainTitle = `<h1 class="main-title">
          SnackBAR
        </h1>
        `;
timer.insertAdjacentHTML("beforeend", mainTitle)

const secondHTML = document.querySelector("span[data-seconds]").textContent = `${currentSecond}`
                        const minuteHTML = document.querySelector("span[data-minutes]").textContent = `${currentMinutes}`
                        const hourHTML = document.querySelector("span[data-hours]").textContent = `${currentHours}`
                        const dayHTML = document.querySelector("span[data-days]").textContent = `${currentDays}`