//US-06: changed color of titles
//US-06: 

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

// console.log("A random integer between 0 and 10");
// console.log(randomInteger(0, 10));
// console.log("Another random integer between 0 and 10");
// console.log(randomInteger(0, 10));
// console.log("A random number between 600 and 1200");
// console.log(randomInteger(600, 1200));

//followed repl 

function setDelay(difficulty) {
  // TODO: Write your code here.
 //console.log("setDelay")
    return 1000
  }
  //setDelay("easy") //> Returns 1500
  //setDelay("normal") //> Returns 1000
  //setDelay("hard") //> Returns 856 (returns a random number between 600 and 1200).


  function chooseHole(holes) {
    //console.log("chooseHole")
      // 1. Generate a random integer from 0 to 8 and assign it to an index variable.
      // 2. Get a random hole with the random index (e.g., const hole = holes[index]).
      // 3. if hole === lastHole, then call chooseHole(holes) again because you don't want to return the same hole.
      // 4. if hole is not the same as the lastHole, then keep track of it (lastHole = hole) and return the hole.
    
    const index = Math.floor(Math.random() * 8);
    const hole = holes[index];
    if (hole === lastHole) {
      return chooseHole(holes);
    }
    lastHole = hole;
    return hole;
   }
  
   //let hole = chooseHole(holes);
   //hole.classList.toggle("show");
   //console.log(hole.innerHTML);
   //console.log(hole.classList);

    //code above: This function should select a random hole from the list of holes that you defined. 
    //When you call the function, you should make sure that it doesn't return the last hole.

function gameOver() {
 // console.log("gameOver");
  // TODO: Write your code here
  if(time > 0){
    let timeoutId = showUp();
    return timeoutId;
  } else {
    let gameStopped = stopGame();
    return gameStopped;
  }
}
//The purpose of this function is simply to determine if the game should continue or stop.


function showUp() {
 // console.log("showUp");
  let delay = setDelay("easy"); // TODO: Update so that it uses setDelay()
  const hole = chooseHole(holes);  // TODO: Update so that it use chooseHole()
  return showAndHide(hole, delay);
}


function showAndHide(hole, delay){
  //console.log("showAndHide");
  toggleVisibility(hole);
  const timeoutID = setTimeout(() => {
    toggleVisibility(hole);
    gameOver();
  }, delay);
  return timeoutID;
}

//function showAndHide(hole, delay){
  // TODO: Call the toggleVisibility() function so that it adds the show class.
  
  //const timeoutID = setTimeout(() => {
    // TODO: Call the toggleVisibility() function so that it removes the show class when the timer times out.
    
   // gameOver();
  //}, 0); // TODO: Change the setTimeout() delay to the one provided as a parameter
  //return timeoutID;
//}

function toggleVisibility(hole){
  //console.log("toggleVisibility");
  // TODO: add hole.classList.toggle so that it adds or removes the 'show' class.
  hole.classList.toggle('show');
  return hole;
}

//showUp ();

function updateScore() {
 console.log("updateScore", points);
 score.textContent = points++; 
 return points;
}

  // Increment the points global variable by 1 point
  // Update score.textContent with points.
  // Return points;
  

  function clearScore() {
    //console.log("clearScore");
    // set the points global variable to 0
    // update score.textContent 
    // return points;
  
  points = 0;
  score.textContent = points;
  return points;
}


function updateTimer() {
  //console.log("updateTimer");
  // TODO: Write your code here.
  // hint: this code is provided to you in the instructions.
  if (time > 0){
    time -= 1;
    timerDisplay.textContent = time;
  }
  return time;
}
 

function startTimer() {
  //console.log("startTimer");
  //starts game
  timer = setInterval(updateTimer, 1000);
  return timer;
}



function whack(event) {
  console.log("whack");
  // call updateScore();
  // return points;
 
  updateScore();
 
}

function setEventListeners(){
  
  // forEach mole add the whack event handler when a player clicks on the mole.
  // return moles;
  startButton.addEventListener('click', startGame);
  for (let mole of moles) {
    mole.addEventListener('click', whack);
  }

  //console.log("setEventListeners");

  return moles;

}


function setDuration(duration) {
  //console.log("setDuration");
  time = duration;
  timerDisplay.textContent = time;
  return time;
}


function stopGame(){
  //console.log("stopGame");
  // stopAudio(song);  //optional
  clearInterval(timer);
  return "game stopped";
}


function startGame(){
 // console.log("startGame")
  setDuration(10);
  startTimer()
  showUp();
  return "game started";
}


setEventListeners();

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
