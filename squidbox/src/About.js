// src/About.js
import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h2>About Squidbox</h2>
      <p>
        The Squidbox is a musical instrument powered by an Arduino microcontroller and
        equipped with buttons, a case, and a screen. The code for the Squidbox
        includes several libraries such as ArduinoBLE, MIDIUSB, and Adafruit_GFX, which
        allow the Squidbox to communicate with other devices via Bluetooth Low Energy and
        USB MIDI. The Squidbox features a TFT display screen that displays notes, a
        series of eight buttons that can be used to play different pitches, and two
        buttons that can be used to adjust the pitch of the buttons. The Squidbox also
        has velocity sensitivity buttons that allow for dynamic playing. The code for the
        Squidbox includes functions for reading the buttons, displaying notes on the
        screen, and playing notes via MIDI. The Squidbox is a versatile and creative
        instrument that can be used by musicians, hobbyists, and makers alike.
      </p>
    </div>
  );
}

export default About;
