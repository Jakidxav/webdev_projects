// DOM elements, selected by id
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('start');

// door images urls 
const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

// other variables
let numClosedDoors = 3;
let currentlyPlaying = true;
let openDoor1; 
let openDoor2; 
let openDoor3;

// check for the chorebot
const isBot = (door) => {
  if(door.src === botDoorPath) {
    return true;
  } else{
    return false;
  }
}

// check to see if the door has been clicked
const isClicked = (door) => {
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
}

// check for winning condition
const playDoor = (door) => {
  numClosedDoors--;
  if(numClosedDoors === 0){
    gameOver('win');
  }
  else if(isBot(door)) {
    gameOver();
  }
}

// randomly assign images to different doors each game
let randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random()* numClosedDoors);
  if(choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath
  } else if(choreDoor === 1){
    openDoor2 = spaceDoorPath;
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
  } else {
    openDoor3 = beachDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor2 = botDoorPath;
  }
}

//listener functions for doors and buttons
door1.onclick = () =>{
 if(!isClicked(doorImage1) && currentlyPlaying === true){
  doorImage1.src = openDoor1;
  playDoor(door1);}
}
door2.onclick = () =>{
if(!isClicked(doorImage2) && currentlyPlaying === true){
  doorImage2.src = openDoor2;
  playDoor(door2);}
}
door3.onclick = () =>{
if(!isClicked(doorImage3) && currentlyPlaying === true){
  doorImage3.src = openDoor3;
  playDoor(door3);}
};

startButton.onclick = () => {
    if(!currentlyPlaying){
        startRound();
    }
};

// reset game button message upon winning/losing
const gameOver = (status) => {
  if(status === 'win'){
    startButton.innerHTML = "You win! Play  again?";
  } else {
    startButton.innerHTML = "Game over! Play again?";
  };
currentlyPlaying = false;
};

// function that resets game to initial state
const startRound = () =>{
     doorImage1.src = closedDoorPath;
     doorImage2.src = closedDoorPath;
     doorImage3.src = closedDoorPath;
     numClosedDoors = 3;
     startButton.innerHTML = 'Good luck!';
     currentlyPlaying = true;
     randomChoreDoorGenerator();
  }

// start game
startRound();

