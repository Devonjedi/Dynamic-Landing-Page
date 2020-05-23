// DOM Elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

//Show AM/PM

const showAmPm = true;


//SHow Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();
    
    //Set AM or PM
    const amPM = hour >= 12 ? 'PM' : 'AM'

    // 12 hr Format
    hour = hour % 12 || 12;

    // Output time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPM : ''}`;

    setTimeout(showTime, 1000);
}

// Add Zeroes
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting  
function setBgGreet() {
    let today = new Date(),
    hour = today.getHours();

    if(hour < 12) {
        // Morning
        document.body.style.backgroundImage = "url('../img/Morning.jpg')";
        greeting.textContent = 'Good Morning';
    } else if(hour< 18) {
        //Afternoon
        document.body.style.backgroundImage = "url('../img/Afternoon.jpg')";
        document.body.style.backgroundPositionX = 'left'
        document.body.style.backgroundPositionY = 'top'
        // learn about window.screen: https://developer.mozilla.org/en-US/search?q=window.screen
        const windowHeight = window.screen.height
        const windowWidth = window.screen.width
        // set the background size 
        // learn about template literals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
        document.body.style.backgroundSize = `${windowWidth}px ${windowHeight}px`
        // todo
        // - what happens if I resize the window??
        // - how do i update the background image size into a function, so that I can use it for other time slots??
        // - how can i optimize my images??
        greeting.textContent = 'Good Afternoon';
    } else {
        //Evening
        document.body.style.backgroundImage = "url('../img/Night.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    } 
}

//Get Name 
function getName() {
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set Name
function setName() {
    if(e.type === 'keypress') {
        //Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }

    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

//Get Focus
function getFocus() {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Set Focus
function setFocus() {
    if(e.type === 'keypress') {
        //Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }

    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

//Run
showTime();
setBgGreet();
getName();
getFocus();