    import React, { useState } from 'react';
    import './CodeTutorial.css';
    import { useLocation } from 'react-router-dom';

    function CodeTutorial() {
    const location = useLocation();
    const [showPlatformIO, setShowPlatformIO] = useState(location.state?.showPlatformIO || false);
  

    const toggleTutorial = () => {
        setShowPlatformIO(!showPlatformIO);
    };

    return (
        <div className="CodeTutorial">
        <button onClick={toggleTutorial}>
            {showPlatformIO ? 'Switch to Arduino IDE' : 'Switch to PlatformIO'}
        </button>
        {showPlatformIO ? (
        <div className="PlatformIOTutorial">
        <h2>Running the Code On PlatformIO with VS Code</h2>
        <p>
            To run the code on PlatformIO with Visual Studio Code, follow these steps:
        </p>
        <h3>Prerequisites:</h3>
        <ul>
            <li>Visual Studio Code installed on your computer. You can download it <a href="https://code.visualstudio.com/download" target="_blank" rel="noopener noreferrer">here</a>.</li>
            <li>PlatformIO extension installed in Visual Studio Code. You can install it from the <a href="https://marketplace.visualstudio.com/items?itemName=platformio.platformio-ide" target="_blank" rel="noopener noreferrer">Visual Studio Code Marketplace</a>.</li>
            <li>An Arduino board compatible with the code (Arduino MKR Wifi 1010) and a USB cable to connect it to your computer.</li>
        </ul>
        <h3>Step 1: Create a new project</h3>
        <p>
            Open Visual Studio Code, click on the PlatformIO icon in the sidebar, and create a new project by selecting the appropriate board (Arduino MKR Wifi 1010) and framework (Arduino).
        </p>
        <h3>Step 2: Copy the code</h3>
        <p>
            Copy the entire provided code into the `src` folder of your new project, replacing the contents of the `main.cpp` file.
        </p>
        <h3>Step 3: Install the required libraries</h3>
        <p>
            Before uploading the code, make sure you have the required libraries installed in your PlatformIO project.
        </p>
        <p>
            Open the `platformio.ini` file in your project and add the following lines under the `[env:...]` section to include the necessary libraries:
        </p>
        <pre>
        lib_deps =
        ArduinoBLE
        Adafruit GFX Library
        Adafruit ST7789
        </pre>
        <h3>Step 4: Connect your Arduino board</h3>
        <p>
            Connect your Arduino board to your computer using a USB cable.
        </p>
        <h3>Step 5: Upload the code</h3>
        <p>
            Click on the "Upload" button (the right-facing arrow icon) in the PlatformIO toolbar at the bottom of Visual Studio Code or press `Ctrl + Alt + U` to compile and upload the code to your board.
        </p>
        <h3>Step 6: Test the Squidbox MIDI Controller</h3>
        <p>
            Once the code is uploaded, you can test the Squidbox MIDI Controller. The provided code should display the current note names on the TFT screen when the corresponding buttons are pressed. Additionally, the code should send MIDI messages through both USB and BLE connections.
        </p>
        <p>
            Remember to connect your Squidbox to a MIDI-compatible device or software to test the MIDI functionality.
        </p>
        <p>
            That's it! You've successfully uploaded and run the code for the Squidbox MIDI Controller using PlatformIO with Visual Studio Code. Now you can explore the capabilities of your Squidbox and make music!
        </p>
        <h3>Additional Resources</h3>
        <p>If you're looking to expand your knowledge or make modifications to the Squidbox MIDI Controller code, consider checking out the following resources:</p>
        <ul>
        <li><a href="https://www.arduino.cc/en/Tutorial/HomePage" target="_blank" rel="noopener noreferrer">Arduino Tutorials</a> - A collection of tutorials and resources to help you learn more about Arduino programming and electronics.</li>
        <li><a href="https://learn.adafruit.com/adafruit-gfx-graphics-library" target="_blank" rel="noopener noreferrer">Adafruit GFX Library</a> - A comprehensive guide to the Adafruit GFX library, which is used for handling the display in this project.</li>
        <li><a href="https://www.arduino.cc/en/Reference/ArduinoBLE" target="_blank" rel="noopener noreferrer">ArduinoBLE Library Reference</a> - Official documentation for the ArduinoBLE library, which is used for the BLE MIDI functionality in the Squidbox MIDI Controller.</li>
        </ul>
        <p>Good luck, and have fun exploring the world of Arduino and MIDI!</p>
        </div>          
        ) : (
            <div className="CodeTutorial">
            <h2>Running the Code On Arduino IDE</h2>
            <h3>Prerequisites:</h3>
            <ol>
                <li>Arduino IDE installed on your computer. You can download it <a href="https://www.arduino.cc/en/software" target="_blank" rel="noopener noreferrer">here</a>.</li>
                <li>Necessary libraries installed on your Arduino IDE:
                <ul>
                    <li>ArduinoBLE</li>
                    <li>Adafruit_GFX</li>
                    <li>Adafruit_ST7789</li>
                    <li><a href="https://github.com/arduino-libraries/MIDIUSB" target="_blank" rel="noopener noreferrer">MIDIUSB</a></li>

                </ul>
                </li>
                <li>An Arduino board compatible with the code (Arduino MKR Wifi 1010) and a USB cable to connect it to your computer.</li>
            </ol>
            <h3>Step 1: Create a new sketch</h3>
            <ol>
                <li>Open the Arduino IDE.</li>
                <li>Go to <code>File &gt; New</code> to create a new sketch.</li>
            </ol>
            <h3>Step 2: Copy the code</h3>
            <p>Copy the entire provided code into the new sketch, replacing the default code that was generated.</p>
            <h3>Step 3: Install the required libraries</h3>
            <p>Before uploading the code, make sure you have the required libraries installed in your Arduino IDE.</p>
            <ol>
                <li>Go to <code>Tools &gt; Manage Libraries...</code></li>
                <li>Search for the following libraries and install them:
                <ul>
                    <li>ArduinoBLE</li>
                    <li>Adafruit_GFX</li>
                    <li>Adafruit_ST7789</li>
                    <li><a href="https://github.com/arduino-libraries/MIDIUSB" target="_blank" rel="noopener noreferrer">MIDIUSB</a></li>
                </ul>
                </li>
            </ol>
            <h3>Step 4: Connect your Arduino board</h3>
            <ol>
                <li>Connect your Arduino board to your computer using a USB cable.</li>
                <li>In the Arduino IDE, go to <code>Tools &gt; Board</code> and select the appropriate board model (Arduino MKR Wifi 1010).</li>
                <li>Go to <code>Tools &gt; Port</code> and select the correct port for your Arduino board.</li>
            </ol>
            <h3>Step 5: Upload the code</h3>
            <p>Click the "Upload" button (the right-facing arrow icon) in the Arduino IDE. This will compile and upload the code to your Arduino board.</p>
            <h3>Step 6: Test the Squidbox MIDI Controller</h3>
            <p>Once the code is uploaded, you can test the Squidbox MIDI Controller. The provided code should display the current note names on the TFT screen when the corresponding buttons are pressed. Additionally, the code should send MIDI messages through both USB and BLE connections.</p>
            <p>Remember to connect your Squidbox to a MIDI-compatible device or software to test the MIDI functionality.</p>
            <p>That's it! You've successfully uploaded and run the code for the Squidbox MIDI Controller. Now you can explore the capabilities of your Squidbox
            and start making music!</p>
        <h3>Additional Resources</h3>
        <p>If you're looking to expand your knowledge or make modifications to the Squidbox MIDI Controller code, consider checking out the following resources:</p>
        <ul>
        <li><a href="https://www.arduino.cc/en/Tutorial/HomePage" target="_blank" rel="noopener noreferrer">Arduino Tutorials</a> - A collection of tutorials and resources to help you learn more about Arduino programming and electronics.</li>
        <li><a href="https://learn.adafruit.com/adafruit-gfx-graphics-library" target="_blank" rel="noopener noreferrer">Adafruit GFX Library</a> - A comprehensive guide to the Adafruit GFX library, which is used for handling the display in this project.</li>
        <li><a href="https://www.arduino.cc/en/Reference/ArduinoBLE" target="_blank" rel="noopener noreferrer">ArduinoBLE Library Reference</a> - Official documentation for the ArduinoBLE library, which is used for the BLE MIDI functionality in the Squidbox MIDI Controller.</li>
        </ul>
        <p>Good luck, and have fun exploring the world of Arduino and MIDI!</p>
         </div>
        )}
        </div>
    );
    }

    export default CodeTutorial;