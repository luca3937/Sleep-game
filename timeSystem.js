function updateTime(game) {
  game.currentMinutes += 15;

  // Stop when reaching 06:00 next day
  if (game.currentMinutes >= (24 * 60) + game.wakeUpTime) {
    game.gameOver = true;
    noLoop();
  }
}