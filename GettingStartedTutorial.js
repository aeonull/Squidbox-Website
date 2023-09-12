import React from 'react';
import './GettingStartedTutorial.css';
import { Link } from 'react-router-dom';

function GettingStartedTutorial() {
  return (
    <div className="GettingStartedTutorial">
      <h2>Getting Started with the Squidbox MIDI Controller</h2>
      <p>
        To get started with the Squidbox MIDI Controller, follow these steps:
      </p>

      <h3>Step 1: Gather the required components</h3>
      <p>
        First, make sure you have all the necessary components for the project. This includes:
      </p>
      <ul>
        <li>The Arduino MKR Wifi 1010 box from the prior project team</li>
        <li>A micro USB cable to connect the Arduino board to your computer</li>
        <li>Any miscellaneous electronic components (buttons, TFT screen, etc.)</li>
      </ul>

      <h3>Step 2: Install the required software</h3>
      <p>
        Ensure you have the following software installed on your computer:
      </p>
      <ul>
        <li>Arduino IDE, Visual Studio Code with the PlatformIO extension, or any other IDE compatible with Arduino</li>
        <li>Required Arduino libraries (ArduinoBLE, Adafruit_GFX, Adafruit_ST7789, etc.)</li>
      </ul>

      <h3>Step 3: Upload the code</h3>
      <p>
        Follow the appropriate tutorial for uploading the code to your Arduino board using either Arduino IDE or PlatformIO with Visual Studio Code:
      </p>
      <ul>
        <li>
          <Link to={{ pathname: "/code-tutorial", state: { showPlatformIO: false } }}>
             Code Tutorial: Arduino IDE
          </Link>
        </li>
        <li>
          <Link to={{ pathname: "/code-tutorial", state: { showPlatformIO: true } }}>
            Code Tutorial: PlatformIO with Visual Studio Code
          </Link>
        </li>
      </ul>

      <h3>Step 4: Test the Squidbox MIDI Controller</h3>
      <p>
        Once the code is uploaded, test the Squidbox MIDI Controller by connecting it to a MIDI-compatible device or software. The provided code should display the current note names on the TFT screen when the corresponding buttons are pressed and send MIDI messages through both USB and BLE connections.
      </p>

      <p>
        Congratulations, you've successfully set up your Squidbox MIDI Controller! Now you can start making music and explore the capabilities of your Squidbox.
      </p>
    </div>
  );
}

export default GettingStartedTutorial;