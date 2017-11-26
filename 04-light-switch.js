'use strict';

const five = require('johnny-five');
const board = new five.Board();

board.on('ready', () => {
  const button = new five.Button(5);
  const led = new five.Led(9);
  board.repl.inject({ button });
  button.on('down', () => led.isOn ? led.off() : led.on());
});

