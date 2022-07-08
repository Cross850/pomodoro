var [milliseconds,seconds,minutes] = [0,0,0];
var timerRef = document.querySelector(".timerDisplay");
var int = null;
var button25min = document.querySelector(".button25min");
var button5min = document.querySelector(".button5min");
var button30min = document.querySelector(".button30min");
var pomodori1 = document.querySelector(".pomodori1");
var pomodori2 = document.querySelector(".pomodori2");
var pomodori3 = document.querySelector(".pomodori3");
var pomodori4 = document.querySelector(".pomodori4");
var pomodoriAmount = 0;

//interval 25min
function startTimer25() {
    if(int!==null) {
        clearInterval(int);
    }
    else {
        [milliseconds,seconds,minutes] = [0,0,0];
        timerRef.innerHTML = "00 : 00";
        int = setInterval(displayTimer25,100);
        button25min.style.display = "none";
        button5min.style.display = "none";
        button30min.style.display = "none";
    }
}

//display 25min
function displayTimer25() {

    milliseconds+=100;

    if (milliseconds == 1000 ) {
        milliseconds = 0;
        seconds++;
        
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
    }
    
    let s = seconds < 10 ? "0" + seconds : seconds;
    let m = minutes < 10 ? "0" + minutes : minutes;

    timerRef.innerHTML = `${m} : ${s}`

    if (minutes == 25) {
        var beepsound = new Audio("assets/beep.mp3")
        beepsound.play()
        button5min.style.display = "block";
        clearInterval(int);
        pomodoriCountDisplay()
        int = null;
        pomodoriAmount++;
        displayPomodori()
        if (pomodoriAmount == 4) {
            button30min.style.display = "block";
            button5min.style.display = "none";
        }
    }
}

//interval 5min
function startTimer5() {
    if(int!==null) {
        clearInterval(int);
    }
    else {
        int = setInterval(displayTimer5,100);
        button25min.style.display = "none";
        button5min.style.display = "none";
        [milliseconds,seconds,minutes] = [0,0,0];
        timerRef.innerHTML = "00 : 00";
    }
}

//display 5min
function displayTimer5() {

    milliseconds+=100;

    if (milliseconds == 1000 ) {
        milliseconds = 0;
        seconds++;
        
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
    }
    
    let s = seconds < 10 ? "0" + seconds : seconds;
    let m = minutes < 10 ? "0" + minutes : minutes;

    timerRef.innerHTML = `${m} : ${s}`

    if (minutes == 5) {
        var beepsound = new Audio("assets/beep.mp3")
        beepsound.play()
        clearInterval(int);
        button25min.style.display = "block";
        int = null;
        breakCountDisplay();
    }
}

//interval 30min
function startTimer30() {
    if(int!==null) {
        clearInterval(int);
    }
    else {
        int = setInterval(displayTimer30,100);
        button25min.style.display = "none";
        button5min.style.display = "none";
        button30min.style.display = "none";
        [milliseconds,seconds,minutes] = [0,0,0];
        timerRef.innerHTML = "00 : 00";
        pomodori1.style.display = "none"
        pomodori2.style.display = "none"
        pomodori3.style.display = "none"
        pomodori4.style.display = "none"
    }
}

//display 30min
function displayTimer30() {

    milliseconds+=100;

    if (milliseconds == 1000 ) {
        milliseconds = 0;
        seconds++;
        
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
    }
    
    let s = seconds < 10 ? "0" + seconds : seconds;
    let m = minutes < 10 ? "0" + minutes : minutes;

    timerRef.innerHTML = `${m} : ${s}`

    if (minutes == 30) {
        var beepsound = new Audio("assets/beep.mp3")
        beepsound.play()
        button25min.style.display = "block";
        clearInterval(int);
        bigBreakCountDisplay()
        int = null;
        pomodoriAmount = 0;
    }
}

//display pomodori
function displayPomodori() {
    if (pomodoriAmount == 1) {
        pomodori1.style.display = "inline"
    }
    if (pomodoriAmount == 2) {
        pomodori2.style.display = "inline"
    }
    if (pomodoriAmount == 3) {
        pomodori3.style.display = "inline"
    }
    if (pomodoriAmount == 4) {
        pomodori4.style.display = "inline"
    }
}

//log
function pomodoriCountDisplay() {
    const amountElement = document.createElement("p");
    const amountMessage = document.createTextNode("Parabéns! Você completou um pomodori.");
    const pomodoriCountDiv = document.getElementById("log")
    amountElement.appendChild(amountMessage);
    pomodoriCountDiv.appendChild(amountElement);
}

function breakCountDisplay() {
    const amountElement = document.createElement("p");
    const amountMessage = document.createTextNode("Seu intervalo acabou, volte ao trabalho!");
    const pomodoriCountDiv = document.getElementById("log")
    amountElement.appendChild(amountMessage);
    pomodoriCountDiv.appendChild(amountElement);
}

function bigBreakCountDisplay() {
    const amountElement = document.createElement("p");
    const amountMessage = document.createTextNode("Seu intervalo mais longo acabou!");
    const pomodoriCountDiv = document.getElementById("log")
    amountElement.appendChild(amountMessage);
    pomodoriCountDiv.appendChild(amountElement);
}