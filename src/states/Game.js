/*
 * Game state
 * ==========
 *
 * A sample Game state, displaying the Phaser logo.
 */

'use strict';

var Logo = require('../objects/Logo');

exports.create = function (game) {
  // TODO: Replace this with a really cool game code here :)
  var x = game.world.centerX;
  var y = game.world.centerY;
  game.add.existing(new Logo(game, x, y));

  var caption = game.add.text(320, 240, 'Pong Clone', {
    fill: 'white',
    font: '48px Arial',
    fontStyle: 'bold',
    stroke: 'black',
    strokeThickness: 3
  });
  caption.anchor.set(0.5);
};
