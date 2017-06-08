'use strict';

var config = require('../config');

function Ball(game, x, y) {
  //Initialize graphics;
  Phaser.Sprite.call(this, game, x, y, 'ball');
  this.anchor.set(0.5, 0.5);

  //Initialize physics
  game.physics.enable(this);
  this.checkWorldBounds = true;
  this.body.collideWorldBounds = true;
  this.body.immovable = true;
  this.body.bounce.set(1);

  this.lastVelocity =  config.ballVelocity;

  this.bounceSound = game.add.audio('ballBounce');
}

Ball.prototype = Object.create(Phaser.Sprite.prototype);
module.exports = Ball.prototype.constructor = Ball;

Ball.prototype.update = function (angle, velocity) {
  if (angle === undefined || velocity === undefined) {
    return;
  }
  if (velocity > config.ballMaxVel) {
    velocity = config.ballMaxVel;
  }
  this.lastVelocity = velocity;
  this.game.physics.arcade.velocityFromAngle(angle, velocity, this.body.velocity);

  if (this.body.blocked.up || this.body.blocked.down || this.body.blocked.left || this.body.blocked.right) {
    this.bounceSound.play();
  }
};

Ball.prototype.checkBounce = function () {
  if (this.body.blocked.up || this.body.blocked.down || this.body.blocked.left || this.body.blocked.right) {
    this.bounceSound.play();
  }
};
