var config = require('../config');

'use strict';

function Score(game, x, y) {
  Phaser.Text.call(this, game, x, y, '0', config.scoreFont);
  this.anchor.set(0.5, 0.5);
  this.score = 0;
  this.text = this.score;
  this.winnerText = game.add.text(x, y + 40, 'Winner!', config.instructionsFont);
  this.winnerText.anchor.set(0.5, 0.5);
  this.winnerText.visible = false;
}

Score.prototype = Object.create(Phaser.Text.prototype);
module.exports = Score.prototype.constructor = Score;

Score.prototype.reset = function () {
  this.score = 0;
};

Score.prototype.increment = function() {
  this.score++;
  this.text = this.score;
  if (this.score >= config.winScore) {
    this.winnerText.visible = true;
  }
};

Score.prototype.max = function() {
  return this.score >= config.winScore;
};
