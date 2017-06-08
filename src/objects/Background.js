'use strict';

var config = require('../config');

function Background(game, x, y) {
  Phaser.Graphics.call(this, game, x, y);

  this.lineStyle(2, 0xFFFFA1, 1);

  for (var yy = 0; yy < config.screenHeight; yy += config.dashSize * 2) {
    this.moveTo(game.world.centerX, yy);
    this.lineTo(game.world.centerX, yy + config.dashSize);
  }
}

Background.prototype = Object.create(Phaser.Graphics.prototype);
module.exports = Background.prototype.constructor = Background;
