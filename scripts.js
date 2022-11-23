const stopWatchTag = document.getElementsByClassName("stopWatch")[0];
const startBtnTag = document.getElementsByClassName("startBtn")[0];
const paustBtnTag = document.getElementsByClassName("pauseBtn")[0];
const continueBtnTag = document.getElementsByClassName("continueBtn")[0];
const restartBtnTag = document.getElementsByClassName("restartBtn")[0];
let miliseconds = 0,
    seconds = 0,
    minutes = 0,
    hours = 0;

const setTime = () => {
    miliseconds += 1;
    if (miliseconds === 100) {
        miliseconds = 0;
        seconds += 1;
        if (seconds === 60) {
            seconds = 0;
            minutes += 1;
        }
        if (minutes == 60) {
            minutes = 0;
            hours += 1;
        }
    }
    let hoursText = hours < 10 ? "0" + hours.toString() : hours;
    let minutesText = minutes < 10 ? "0" + minutes.toString() : minutes;
    let secondsText = seconds < 10 ? "0" + seconds.toString() : seconds;
    let milisecondsText = miliseconds < 1000 ? "0" + miliseconds.toString() : miliseconds;


    stopWatchTag.textContent = hoursText + ":" + minutesText + ":" + secondsText + ":" + milisecondsText;
}


let intervalId;

startBtnTag.addEventListener("click", () => {
    intervalId = setInterval(setTime, 1);
});

paustBtnTag.addEventListener("click", () => {
    clearInterval(intervalId);
});
continueBtnTag.addEventListener("click", () => {
    intervalId = setInterval(setTime, 1);
});

restartBtnTag.addEventListener("click", () => {
    clearInterval(intervalId);
    miliseconds = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
    intervalId = setInterval(setTime, 1);
});