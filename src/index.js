const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const startButton = document.querySelector('#start');
// TODO: Add the missing query selectors:
const score = document.querySelector('#score'); // Use querySelector() to get the score element
const timerDisplay = document.querySelector('#timer'); // use querySelector() to get the timer element.

let time = 10;
let timer;
let lastHole = -1;
let points = 0;
let difficulty = "hard";


function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function setDelay(difficulty) {
  // TODO: Write your code here.

    return 1000
  }
 
function chooseHole(holes) {
  // TODO: Write your code here.
  
    const index = Math.floor(Math.random() * 2);
    const hole = holes[index];
    if (hole === lastHole) {
      return chooseHoles(holes);
    }
    lastHole = hole;
    return hole;
   }
  
   //let hole = chooseHole(holes);
   //hole.classList.toggle("show");
   //console.log(hole.innerHTML);
   //console.log(hole.classList);
 
 //if time > 0:
  //timeoutId = showUp()
  //  return timeoutId
 //else
//gameStopped = stopGame()
//return gameStopped


function gameOver() {
  // TODO: Write your code here
  if(time > 0){
    let timeoutId = showUp();
    return timeoutId;
  } else {
    let gameStopped = stopGame();
    return gameStopped;
  }
}

function showUp() {
  let delay = setDelay("easy"); // TODO: Update so that it uses setDelay()
  const hole = chooseHole(holes);  // TODO: Update so that it use chooseHole()
  return showAndHide(hole, delay);
}


function showAndHide(hole, delay){
  toggleVisibility(hole);
  const timeoutID = setTimeout(() => {
    toggleVisibility(hole);
    gameOver();
  }, delay);
  return timeoutID;
}


function toggleVisibility(hole){
  // TODO: add hole.classList.toggle so that it adds or removes the 'show' class.
  hole.classList.toggle('show');
  return hole;
}

//showUp ();

function updateScore() {
 
  console.log(points);
  //score.textContent = points;
  //return points;
}

function clearScore() {
  // TODO: Write your code here
  points = 0;
  score.textContent = points;
  return points;
}


function updateTimer() {
  // TODO: Write your code here.
  // hint: this code is provided to you in the instructions.
  if (time > 0){
    time -= 1;
    timerDisplay.textContent = time;
  }
  return time;
}
 

function startTimer() {
  // TODO: Write your code here
  timer = setInterval(updateTimer, 1000);
  return timer;
}


function whack(event) {
  // TODO: Write your code here.
 console.log("whack!");
  updateScore();
 
}

function setEventListeners(){
  // TODO: Write your code here
  for (let mole of moles) {
    mole.addEventListener('click', whack);
  }

  return moles;
}


function setDuration(duration) {
  time = duration;
  timerDisplay.textContent = time;
  return time;
}


function stopGame(){
  // stopAudio(song);  //optional
  clearInterval(timer);
  return "game stopped";
}


function startGame(){
  setDuration(10);
  startTimer()
  showUp();
  return "game started";
}
//function above provided

// Please do not modify the code below.
// Used for testing purposes.
window.randomInteger = randomInteger;
window.chooseHole = chooseHole;
window.setDelay = setDelay;
window.startGame = startGame;
window.gameOver = gameOver;
window.showUp = showUp;
window.holes = holes;
window.moles = moles;
window.showAndHide = showAndHide;
window.points = points;
window.updateScore = updateScore;
window.clearScore = clearScore;
window.whack = whack;
window.time = time;
window.setDuration = setDuration;
window.toggleVisibility = toggleVisibility;
window.setEventListeners = setEventListeners;
