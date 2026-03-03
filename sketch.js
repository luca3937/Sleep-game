
let spriteSheet;
let game;


function setup() {
  createCanvas(900, 600);
  game = new GameState();
}

function draw() {
  drawRoom(game);
  drawUI(game);
  

  if (!game.gameOver) {
    calculateSleepQuality(game);
  }
}

function mousePressed() {
  if (game.gameOver) return;

  // Check Sleep button first
  if (handleSleepButton(game)) return;

  // Then handle room interactions
  if (handleClick(game)) {
    updateTime(game);
  }
}

//Temp
/*function mousePressed() {
  console.log(mouseX, mouseY);
} */

function preload() {
  spriteSheet = loadImage("assets/bedroom.png");
}