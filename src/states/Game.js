/*
 * Game state
 * ==========
 *
 * A sample Game state, displaying the Phaser logo.
 */

'use strict';

var config = require('../config');
var Background = require('../objects/Background');
var Paddle = require('../objects/Paddle');
var Ball = require('../objects/Ball');
var Score = require('../objects/Score');

exports.create = function (game) {
  // TODO: Replace this with a really cool game code here :)
  var x = game.world.centerX;
  var y = game.world.centerY;
  this.backgroundGraphics = game.add.existing(new Background(game, 0, 0));
  this.ball = game.add.existing(new Ball(game, x, y));

  this.paddleLeft = game.add.existing(new Paddle(game, config.paddleLeft_x, y, config.paddleLeftUpKey, config.paddleLeftDownKey));
  this.paddleRight = game.add.existing(new Paddle(game, config.paddleRight_x, y, config.paddleRightUpKey, config.paddleRightDownKey));


  this.scoreRight = game.add.existing(new Score(game, config.screenWidth * 0.25, config.screenHeight * 0.1));
  this.scoreLeft = game.add.existing(new Score(game, config.screenWidth * 0.75, config.screenHeight * 0.1));

  this.oobSound = game.add.audio('ballMissed');

  this.startGame();
};

exports.startGame = function () {
  this.resetBall();
  this.paddleLeft.enablePaddle(true);
  this.paddleRight.enablePaddle(true);
  this.game.physics.arcade.checkCollision.left = false;
  this.game.physics.arcade.checkCollision.right = false;
  this.ball.events.onOutOfBounds.add(this.ballOutOfBounds, this);
};

exports.resetBall = function () {
  this.ball.reset(this.game.world.centerX, this.game.rnd.between(0, config.screenHeight));
  this.ball.visible = false;
  this.game.time.events.add(Phaser.Timer.SECOND * config.ballStartDelay, this.startBall, this);
};

exports.startBall = function () {
  this.ball.visible = true;
  var randomAngle = this.rnd.pick(config.ballRandomStartingAngle);
  this.physics.arcade.velocityFromAngle(randomAngle, config.ballVelocity, this.ball.body.velocity);
};

exports.ballOutOfBounds = function () {
  //Left scored
  if (this.ball.x < 0) {
    this.scoreLeft.increment();
  } else {
    this.scoreRight.increment();
  }
  if (this.scoreLeft.max() || this.scoreRight.max()) {
    this.game.state.start('Demo', false, false);
  } else {
    this.resetBall();
  }
  this.oobSound.play();

};

exports.update = function () {
  this.paddleLeft.update(this.ball);
  this.paddleRight.update(this.ball);
  this.ball.checkBounce();
};
