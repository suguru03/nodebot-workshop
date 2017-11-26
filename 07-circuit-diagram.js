'use strict';

const five = require('johnny-five');
const board = new five.Board();

board.on('ready', () => {
  const servo = new five.Servo(9);
  const potentiometer = new five.Sensor('A2');

  board.repl.inject({
    pot: potentiometer
  });

  potentiometer.on('data', () => {
    const position = five.Fn.map(potentiometer.value, 0, 1023, 0, 179);
    servo.to(position);
  });
});

