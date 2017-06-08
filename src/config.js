'use strict';

module.exports = {
  screenWidth: 640,
  screenHeight: 480,
  gameDiv: 'gameDiv',

  dashSize: 5,

  paddleLeft_x: 50,
  paddleRight_x: 590,
  paddleVelocity: 500,
  paddleSegmentHeight: 4,
  paddleSegmentMax: 4,
  paddleSegmentAngle: 15,
  paddleGap: 22,

  paddleLeftUpKey: Phaser.Keyboard.A,
  paddleLeftDownKey: Phaser.Keyboard.Z,
  paddleRightUpKey: Phaser.Keyboard.UP,
  paddleRightDownKey: Phaser.Keyboard.DOWN,

  ballVelocity: 250,
  ballStartDelay: 2,
  ballIncVelocity: 25,
  ballIncVelStartCount: 2,
  ballMaxVel: 500,
  ballRandomStartingAngle: [-120, 120, -60, 60],

  winScore: 11,
  //ballRandomStartingAngleRight: [-60, 60]

  scoreFont: {
    font: '80px Arial',
    fill: '#FFFFFF',
    align: 'center'
  },

  instructions: 'Left paddle: A to move up, Z to move down.\nRight paddle: UP and DOWN arrow keys.\nFirst player to score 11 wins.\n- click to start -',

  instructionsFont: {
    font: '24px Arial',
    fill: '#FFFFFF',
    align: 'center'
  },

};
