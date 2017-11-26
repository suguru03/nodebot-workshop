'use strict';

const five = require('johnny-five');
const board = new five.Board();

board.on('ready', () => {
  const temperature = new five.Thermometer({
    controller: 'TMP36',
    pin: 'A0'
  });
  const piezo = new five.Piezo(9);
  const led = new five.Led(13);
  const button = new five.Button(5);

  let off = false;
  temperature.on('change', () => {
    if (!off && temperature.celsius >= 50) {
      start();
    } else {
      stop();
      off = false;
    }
  });
  button.on('press', () => {
    off = true;
    stop();
  });

  function start() {
    piezo.play({
      song: 'C D F D A - A A A A G G G G - - C D F D G - G G G G F F F F - -',
      beats: 1 / 4,
      tempo: 100
    });
    led.blink(100);
  }

  function stop() {
    piezo.stop();
    piezo.off();
    led.stop();
    led.off();
  }
});
