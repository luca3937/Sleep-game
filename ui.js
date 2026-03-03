// ui.js – top-left UI with single Sleep button

function drawUI(game) {
  fill(255);
  textSize(18);
  textAlign(LEFT, TOP);

  let displayHour = floor(game.currentMinutes / 60) % 24;
  let displayMin = game.currentMinutes % 60;
  let formattedMin = displayMin < 10 ? "0" + displayMin : displayMin;

  const padding = 20;

  // ---------------- Display text ----------------
  text("Time: " + displayHour + ":" + formattedMin, padding, padding);
  text("Wake: 06:00", padding, padding + 30);
  text("Sleep Quality: " + game.sleepQuality, padding, padding + 60);

  // ---------------- Sleep Button ----------------
  const buttonX = padding;
  const buttonY = padding + 100;
  const buttonW = 180;
  const buttonH = 35;

  // Draw button with hover highlight
  if (isMouseOverButton(buttonX, buttonY, buttonW, buttonH)) {
    fill(70, 180, 220);
  } else {
    fill(50, 150, 200);
  }

  rect(buttonX, buttonY, buttonW, buttonH, 5);

  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Sleep", buttonX + buttonW / 2, buttonY + buttonH / 2);

  // Store button rectangle for click detection
  game.sleepButton = { x: buttonX, y: buttonY, w: buttonW, h: buttonH };

  // ---------------- Game Over message ----------------
  if (game.gameOver) {
    textSize(40);
    textAlign(CENTER, CENTER);
    text("Morning!\nFinal Sleep Quality: " + game.sleepQuality, width/2, height/2);
  }
}

// ---------------- Utility: mouse over button ----------------
function isMouseOverButton(x, y, w, h) {
  return mouseX >= x && mouseX <= x + w &&
         mouseY >= y && mouseY <= y + h;
}

// ---------------- Handle Sleep button click ----------------
function handleSleepButton(game) {
  if (!game.sleepButton) return false;

  const b = game.sleepButton;
  if (isMouseOverButton(b.x, b.y, b.w, b.h)) {
    // Move time forward to “sleep time” (example 22:00)
    if (game.currentMinutes < 22 * 60) {
      game.currentMinutes = 22 * 60;
    }

    // Calculate sleep quality
    calculateSleepQuality(game);

    // End the game for the night
    game.gameOver = true;
    noLoop();

    return true;
  }

  return false;
}