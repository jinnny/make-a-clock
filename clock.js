const clockContainer = document.querySelector('.js-clock'),
    clockTitle = clockContainer.querySelector('.js-clock-title');

function getTime(){
    const date = new Date(),
     minutes = date.getMinutes(),
     hours = date.getHours(),
     seconds= date.getSeconds();
     clockTitle.innerHTML = `${
        hours < 10 ? `0${hours}`: hours}:${
        minutes < 10 ? `0${minutes}`: minutes}:${
        seconds < 10 ? `0${seconds}` : seconds 
    }`;
}
function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();