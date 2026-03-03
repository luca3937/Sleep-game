function calculateSleepQuality(game) {

  let quality = 100;

  quality -= abs(19 - game.temperature) * 2;

  if (game.lightOn) quality -= 20;
  if (game.windowOpen) quality += 5;

  if (game.temperature < 17 && game.blanketState === 0) quality -= 15;
  if (game.temperature > 23 && game.blanketState === 2) quality -= 15;

  if (game.sleepPosition === 1) quality += 5;

  game.sleepQuality = constrain(quality, 0, 100);
}