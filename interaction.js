// interaction.js – hover highlights & click handling

function handleClick(game) {
  for (let obj of game.objects) {
    if (isHovering(obj)) {
      switch (obj.name) {
        case "thermostatUp":
          game.temperature = min(30, game.temperature + 1);
          break;
        case "thermostatDown":
          game.temperature = max(10, game.temperature - 1);
          break;
        case "blanket":
          game.blanketState = (game.blanketState + 1) % 3;
          break;
        case "light":
          game.lightOn = !game.lightOn;
          break;
        case "window":
          game.windowOpen = !game.windowOpen;
          break;
        case "bed":
          game.sleepPosition = (game.sleepPosition + 1) % 3;
          break;
      }
      return true;
    }
  }
  return false;
}

// ---------------- Improved hover ----------------
function highlightHover(game) {
  noFill();
  stroke(255);
  strokeWeight(2);

  for (let obj of game.objects) {
    if (isHovering(obj)) {
      if (obj.name === "bed") {
        // Highlight the mattress + pillow instead of entire bed rectangle
        rect(obj.x + 10, obj.y + 10, obj.w - 20, obj.h - 20);
        rect(obj.x + 10, obj.y + 10, obj.w - 20, 40); // pillow highlight
      } else if (obj.name === "blanket") {
        // Highlight exact blanket shape
        rect(obj.x, obj.y, obj.w, obj.h, 10);
      } else {
        // Default highlight
        rect(obj.x, obj.y, obj.w, obj.h);
      }
    }
  }

  noStroke();
}

// ---------------- Utility to detect hovering ----------------
function isHovering(obj) {
  return mouseX > obj.x &&
         mouseX < obj.x + obj.w &&
         mouseY > obj.y &&
         mouseY < obj.y + obj.h;
}