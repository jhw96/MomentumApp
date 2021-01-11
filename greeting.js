const form = document.querySelector('.js-greetingForm');
const input = form.querySelector('input');
const greeting = document.querySelector('.js-greetings');

const USER_LS = "currentUser";
const SHOWING_CU = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();

    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CU);
    form.addEventListener("submit", handleSubmit);
}


function paintGreeting(text) {
    form.classList.remove(SHOWING_CU);
    greeting.classList.add(SHOWING_CU);
    greeting.innerText = `Hello ${text}`;
}


function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();