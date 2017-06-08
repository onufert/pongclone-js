/*
 * `assets` module
 * ===============
 *
 * Declares static asset packs to be loaded using the `Phaser.Loader#pack`
 * method. Use this module to declare game assets.
 */

'use strict';

// -- Splash screen assets used by the Preloader.
exports.boot = [{
  key: 'progress-bar',
  type: 'image'
}];

// -- General assets used throughout the game.
exports.game = [{
  key: 'ball',
  type: 'image'
},{
  key: 'paddle',
  type: 'image'
}, {
  key: 'ballBounce',
  type: 'audio',
  urls: ['ballBounce.m4a', 'ballBounce.ogg']
}, {
  key: 'ballHit',
  type: 'audio',
  urls: ['ballHit.m4a', 'ballHit.ogg']
}, {
  key: 'ballMissed',
  type: 'audio',
  urls: ['ballMissed.m4a', 'ballMissed.ogg']
}];
