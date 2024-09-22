
let [hours, minutes, seconds] = [0, 0, 0];
let timerRef = document.getElementById("timer");
let interval = null;
let isRunning = false;

function updateDisplay() {
    let h = hours < 10 ? `0${hours}` : hours;
    let m = minutes < 10 ? `0${minutes}` : minutes;
    let s = seconds < 10 ? `0${seconds}` : seconds;
    timerRef.innerHTML = `${h}:${m}:${s}`;
}

function watchStart() {
    if (!isRunning) {
        isRunning = true;
        interval = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
            updateDisplay();
        }, 1000);
    }
}
function watchStop() {
    clearInterval(interval);
    isRunning = false;
}
function watchReset() {
    clearInterval(interval);
    [hours, minutes, seconds] = [0, 0, 0];
    updateDisplay();
    isRunning = false;
}
