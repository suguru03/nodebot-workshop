'use strict';

const dgram = require('dgram');

const five = require('johnny-five');

const server = dgram.createSocket('udp4');
const board = new five.Board();

board.on('ready', () => {
  const piezo = new five.Piezo(8);
  board.repl.inject({ piezo });

  server.on('message', () => {
    piezo.play({
      song: 'C D F D A - A A A A G G G G - - C D F D G - G G G G F F F F - -',
      beats: 1 / 4,
      tempo: 100
    });
  });
  server.bind(1337);
  // echo "message" | nc -cu 127.0.0.1 1337
});

