/*
 * Logo
 * ====
 *
 * A sample prefab (extended game object class), displaying a spinning Phaser
 * logo.
 */

'use strict';

var config = require('../config');


function Paddle(game, x, y, upKey, downKey) {
  Phaser.Sprite.call(this, game, x, y, 'paddle');

  this.anchor.set(0.5, 0.5);

  game.physics.enable(this);
  this.checkWorldBounds = true;
  this.body.collideWorldBounds = true;
  this.body.immovable = true;
  this.body.bounce.set(1);

  this.paddleUp = game.input.keyboard.addKey(upKey);
  this.paddleDown = game.input.keyboard.addKey(downKey);

  this.hitSound = game.add.audio('ballHit');
  this.hitCount = 0;
}

Paddle.prototype = Object.create(Phaser.Sprite.prototype);
module.exports = Paddle.prototype.constructor = Paddle;

Paddle.prototype.enablePaddle = function (enabled) {
  this.paddleUp.enabled = enabled;
  this.paddleDown.enabled = enabled;
};

Paddle.prototype.update = function (ball) {
  var v = 0;
  if (this.paddleUp.isDown) {
    v = -config.paddleVelocity;
  } else if (this.paddleDown.isDown) {
    v = config.paddleVelocity;
  }
  this.body.velocity.y = v;

  if (this.body.y < config.paddleGap) {
    this.body.y = config.paddleGap;
  }

  this.game.physics.arcade.overlap(ball, this, this.collision, null, this);
};

Paddle.prototype.collision = function (ball) {
  this.hitCount++;
  var segmentHit = Math.floor((ball.y - this.y)/config.paddleSegmentHeight);
  if (segmentHit >= config.paddleSegmentMax) {
    segmentHit = config.paddleSegmentMax - 1;
  } else if (segmentHit <= -config.paddleSegmentMax) {
    segmentHit = -(config.paddleSegmentMax - 1);
  }

  var returnAngle = segmentHit * config.paddleSegmentAngle;
  if (this.x > config.screenWidth * 0.5) {
    returnAngle = 180 - returnAngle;
  }
  if (returnAngle > 180) {
    returnAngle -= 360;
  }

  var velocity = ball.lastVelocity;
  if (this.hitCount > config.ballIncVelStartCount) {
    velocity += config.ballIncVelocity;
  }

  ball.update(returnAngle, velocity);
  this.hitSound.play();

};
