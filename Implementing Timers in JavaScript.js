// Task 1
const timerEl = document.querySelector("#timer");
const formData = document.querySelector("form");
const startTimerButton = document.querySelector("#timer-start");
let timer = 0;
let intervalCollection = [];
timerEl.innerHTML = timer;

setInterval(() => {
  if (timer > 0) {
    timer -= 1;
    timerEl.innerHTML = timer;
  }
}, 1000);


startTimerButton.addEventListener("click", (e) => {
  e.preventDefault();
  timer = Number(formData["timer-value"].value);
  timerEl.innerHTML = timer;
});

// Task 2
function delayedNotif() {
  setTimeout(() => {
    alert("Hello!");
  }, 1000)
}

// Task 3
function intervalicNotif() {
  const newInterval = setInterval(() => {
    alert("This is an intervalic request!");
  }, 3000);

  intervalCollection.push(newInterval);
}

function clearIntervals() {
  intervalCollection.forEach((element) => {
    clearInterval(element);
  })
}
