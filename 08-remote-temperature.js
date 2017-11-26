'use strict';

const dnode = require('dnode');
const five = require('johnny-five');
const board = new five.Board();

board.on('ready', () => {
  const temperature = new five.Thermometer({
    controller: 'TMP36',
    pin: 'A0'
  });
  const server = dnode({
    getTemperature: cb => cb(temperature.celsius)
  });
  server.listen(1337);
);

