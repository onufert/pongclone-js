/*
 * Game state
 * ==========
 *
 * A sample Game state, displaying the Phaser logo.
 */

'use strict';

var config = require('../config');
var Background = require('../objects/Background');
var Ball = require('../objects/Ball');

exports.create = function (game) {
  // TODO: Replace this with a really cool game code here :)
  var x = game.world.centerX;
  var y = game.world.centerY;
  this.backgroundGraphics = game.add.existing(new Background(game, 0, 0));
  this.ballSprite = game.add.existing(new Ball(game, x, y));

  //Caption...
  var instructions = game.add.text(game.world.centerX, game.world.centerY, config.instructions, config.instructionsFont);
  instructions.anchor.set(0.5);

  this.startDemo(game);
};

exports.startDemo = function (game) {
  this.ballSprite.visible = false;
  game.time.events.add(Phaser.Timer.SECOND * config.ballStartDelay, this.startBall, this);
  game.input.onDown.add(this.startGame, this);
};

exports.startBall = function () {
  this.ballSprite.visible = true;
  var randomAngle = this.rnd.pick(config.ballRandomStartingAngle);
  this.ballSprite.update(randomAngle, config.ballVelocity);
};

exports.startGame = function () {
  this.state.start('Game');
};

exports.update = function() {
  this.ballSprite.checkBounce();
};
