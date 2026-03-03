// gameState.js – updated for centered floor-aligned bedroom
class GameState {
  constructor() {
    this.currentMinutes = 20 * 60; // 20:00
    this.wakeUpTime = 6 * 60;      // 06:00
    this.gameOver = false;

    this.temperature = 20;
    this.blanketState = 1;
    this.lightOn = true;
    this.windowOpen = false;
    this.sleepPosition = 0;

    this.sleepQuality = 100;

    // ---------------- Updated objects positions ----------------
    this.objects = [
      // Thermostat buttons (left of bed)
      { name: "thermostatDown", x: 310, y: 230, w: 30, h: 20 },
      { name: "thermostatUp", x: 340, y: 230, w: 30, h: 20 },

      // Blanket (on bed)
      { name: "blanket", x: 370 + 10, y: 100 + 50, w: 140, h: 240 },

      // Light (top-right corner)
      { name: "light", x: 780, y: 50, w: 60, h: 60 },

      // Window (right of bed)
      { name: "window", x: 540, y: 150, w: 150, h: 120 },

      // Bed (for changing sleep position)
      { name: "bed", x: 370, y: 100, w: 160, h: 300 }
    ];
  }
}