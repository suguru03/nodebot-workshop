'use strict';

const five = require('johnny-five');
const board = new five.Board();

board.on('ready', () => {
  const led = new five.Led(9);
  const photoresistor = new five.Sensor('A0');

  board.repl.inject({
    pot: photoresistor
  });
  photoresistor.on('data', () => photoresistor.value > 600 ? led.on() : led.off());
});

