const countDate = new Date('Jan 11, 2024 20:25:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const gap = now - countDate;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    document.getElementById('day').querySelector('span').innerText = days;
    document.getElementById('hour').querySelector('span').innerText = hours;
    document.getElementById('minute').querySelector('span').innerText = minutes;
    document.getElementById('second').querySelector('span').innerText = seconds;
}

setInterval(updateCountdown, 1000);