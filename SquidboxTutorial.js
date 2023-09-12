import React from 'react';
import './SquidboxTutorial.css';
import { Link } from 'react-router-dom';

function SquidboxTutorial() {
  return (
    <div className="SquidboxTutorial">
      <h2>How to Play the Squidbox</h2>
      <h3>Button Functions</h3>
      <ul>
        <li>
          Buttons 1-8: Play musical notes (C, C#, D, D#, E, F, F#, G, G#, A, A#, B) within a selected octave
        </li>
        <li>
          Up Button: Transpose the notes one semitone up
        </li>
        <li>
          Down Button: Transpose the notes one semitone down
        </li>
        <li>
          v1 and v2: Velocity-sensitive buttons (1 and 2) that adjust the volume of the played notes based on how hard you press the buttons
        </li>
      </ul>
      <p>
        By pressing a combination of these buttons, you can create unique melodies, experiment with different musical ideas, and even play chords by pressing multiple note buttons simultaneously.
      </p>
      <h3>Connecting the Squidbox to Your Computer</h3>
      <p>
        To use the Squidbox, connect it to your computer using a USB cable or via Bluetooth. The Squidbox is compatible with most popular digital audio workstations (DAWs) and can be used as a MIDI input device to control virtual instruments.
      </p>
      <p>
        To connect via Bluetooth, ensure that your computer's Bluetooth is enabled and search for available devices. Select the Squidbox from the list of devices and pair it with your computer. Once connected, you can use the Squidbox as a wireless MIDI controller.
      </p>
      <h3>Try the Playable Squidbox</h3>
      <p>
        You can try the playable Squidbox in the <Link to="/play" className="SquidboxTutorial-link"><strong>Play</strong></Link> tab of this website. Have fun exploring and making music with the Squidbox!
    </p>

    </div>
  );
}

export default SquidboxTutorial;
