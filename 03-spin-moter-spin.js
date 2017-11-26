'use strict';

const five = require('johnny-five');
const board = new five.Board();

board.on('ready', () => {
  const motor = new five.Motor(9);
  board.repl.inject({ motor });
  start();

  function start() {
    board.wait(2000, () => {
      motor.stop();
      board.wait(1000, start);
    });
    motor.start(200);
  }
});

