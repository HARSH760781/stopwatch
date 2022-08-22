var hours = 0;
var minutes = 0;
var seconds = 0;
var miliseconds = 0;

var timer = false;

function start() {
    timer = true;
    stopwatch();
}

function stop() {
    timer = false;
}


function reset() {
    timer = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    miliseconds = 0;
    document.getElementById('miliseconds').innerHTML = '0' + miliseconds;
    document.getElementById('seconds').innerHTML = '0' + seconds;
    document.getElementById('minutes').innerHTML = '0' + minutes;
    document.getElementById('hours').innerHTML = '0' + hours;
}

function stopwatch() {
    if (timer) {

        document.getElementById('miliseconds').innerHTML = ++miliseconds;
        if (miliseconds == 100) {
            document.getElementById('seconds').innerHTML = ++seconds;
            miliseconds = '00';
        }
        if (seconds == 60) {
            document.getElementById('minutes').innerHTML = ++minutes;
            seconds = '00';
        }
        if (minutes == 60) {
            document.getElementById('hours').innerHTML = ++hours;
            minutes = '00';
        }
        if (seconds < 10) {
            document.getElementById('seconds').innerHTML = "0" + seconds;

        }
        if (minutes < 10) {
            document.getElementById('minutes').innerHTML = "0" + minutes;

        }
        if (hours < 10) {
            document.getElementById('hours').innerHTML = "0" + hours;

        }

        setTimeout("stopwatch()", 1);
    }
}