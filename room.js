// room.js – floor-aligned, horizontally centered bedroom

function drawRoom(game) {
  if (game.lightOn) {
    background(180, 170, 150);
  } else {
    background(40, 40, 70);
  }

  noStroke();
  fill(150, 120, 90);
  rect(0, 400, width, 200);

  drawBed(game);
  drawBlanket(game);
  drawPerson(game);
  drawThermostat(game);
  drawWindow(game);
  drawSunMoon(game);

  highlightHover(game);
}

// Bed
function drawBed(game) {
  const bedX = 370;
  const bedY = 100;

  push();
  translate(bedX, bedY);

  fill(120, 70, 40);
  rect(0, 0, 160, 300, 15); // frame

  fill(240, 240, 220);
  rect(10, 10, 140, 280, 10); // mattress

  fill(180, 240, 255);
  rect(10, 10, 140, 40, 5); // pillow

  fill(0, 0, 0, 50);
  rect(0, 300, 160, 10, 10); // shadow

  pop();
}

// Blanket – human-like coverage
function drawBlanket(game) {
  const bedX = 370;
  const bedY = 100;
  const bedHeight = 300;
  const bedTop = 0;
  const bedBottom = bedHeight;

  const charHeight = 176; // vertical body height
  const charTop = 0; // head at 0 relative
  const charBottom = charHeight; // feet at 176

  if (game.blanketState === 0) return;

  push();
  translate(bedX, bedY);
  fill(100, 150, 255);
  noStroke();

  let blanketTop, blanketBottom;

  if (game.sleepPosition === 0) { // vertical
    if (game.blanketState === 1) {
      // Partial: lower half + ~5 px
      blanketTop = charBottom / 2 - 5;
      blanketBottom = charBottom;
    } else {
      // Full: from just below lower half to shoulders (~75% height)
      blanketTop = charBottom / 2 - 5;
      blanketBottom = charTop + charHeight * 0.75;
    }
  } else {
    // Sideways / curled – simplified as covering lower half visually
    blanketTop = bedTop + bedHeight / 2;
    blanketBottom = bedBottom - 10;
  }

  // Ensure blanket stays within bed
  blanketTop = max(blanketTop, bedTop);
  blanketBottom = min(blanketBottom, bedBottom);

  const blanketHeight = blanketBottom - blanketTop;
  rect(10, blanketTop, 140, blanketHeight, 30);

  // Blanket texture lines
  stroke(80, 120, 200, 100);
  strokeWeight(2);
  for (let i = 0; i < 140; i += 15) {
    line(i + 10, blanketTop, i + 10, blanketTop + blanketHeight);
  }

  pop();
}

// Person – 20% shorter, full-length adult, head centered
function drawPerson(game) {
  const bedX = 370;
  const bedY = 100;

  push();
  translate(bedX + 80, bedY + 50); // head roughly middle of pillow

  fill(0, 0, 0, 50);
  ellipse(0, 160, 80, 20); // shadow

  fill(255, 220, 200);
  ellipse(0, 0, 45, 45); // head

  fill(200, 100, 100);
  noStroke();
  if (game.sleepPosition === 0) {
    rect(-22, 25, 44, 176, 15); // vertical
  } else if (game.sleepPosition === 1) {
    rect(-55, 0, 110, 36); // sideways
  } else {
    ellipse(0, 100, 60, 200); // curled
  }

  pop();
}

// Thermostat
function drawThermostat(game) {
  push();
  translate(310, 220);
  fill(200);
  rect(0, 0, 60, 40, 5);

  fill(255);
  textAlign(CENTER, CENTER);
  textSize(14);
  text(game.temperature + "°C", 30, 20);
  pop();
}

// Window
function drawWindow(game) {
  push();
  translate(540, 150);
  fill(game.windowOpen ? 'skyblue' : 'darkblue');
  rect(0, 0, 150, 120, 5);

  fill(255, 255, 255, 50);
  rect(10, 10, 60, 50);
  rect(80, 10, 60, 50);
  rect(10, 70, 60, 40);
  rect(80, 70, 60, 40);
  pop();
}

// Sun / Moon
function drawSunMoon(game) {
  push();
  translate(width - 80, 80);
  if (game.lightOn) {
    noStroke();
    for (let r = 30; r > 0; r -= 5) {
      fill(255, 255, 100, map(r, 30, 0, 50, 200));
      ellipse(0, 0, r * 2);
    }
  } else {
    fill(200, 200, 255);
    ellipse(0, 0, 50);
    fill(40, 40, 70);
    ellipse(10, -5, 40);
  }
  pop();
}

// Hover highlight
function highlightHover(game) {
  noFill();
  stroke(255);
  strokeWeight(2);
  for (let obj of game.objects) {
    if (isHovering(obj)) {
      rect(obj.x, obj.y, obj.w, obj.h);
    }
  }
  noStroke();
}



