import React, { useState } from 'react';
import './Play.css';

function Play() {
  const [context, setContext] = useState(new AudioContext());
  const [scale, setScale] = useState([261.63, 293.66, 329.63, 349.23, 392, 440, 493.88, 523.25]);
  const [transpose, setTranspose] = useState(0);
  const [lastPlayed, setLastPlayed] = useState(null);
  const [isMajor, setIsMajor] = useState(true);

  const playNote = (index) => {
    const frequency = scale[index];
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(context.destination);

    oscillator.type = 'sine';
    oscillator.frequency.value = frequency * Math.pow(2, transpose / 12);
    gainNode.gain.exponentialRampToValueAtTime(
      0.00001,
      context.currentTime + 1
    );

    oscillator.start();
    oscillator.stop(context.currentTime + 1);

    const chromaticNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const majorScaleIntervals = [0, 2, 4, 5, 7, 9, 11, 12];
    const minorScaleIntervals = [0, 2, 3, 5, 7, 8, 10, 12];

    const scaleIntervals = isMajor ? majorScaleIntervals : minorScaleIntervals;
    const noteIndex = scaleIntervals[index] + transpose;
    const octave = Math.floor(noteIndex / 12) + 4;
    const noteName = chromaticNotes[(noteIndex + 12) % 12];
    setLastPlayed(`${noteName}${octave}`);
  };

  const handleButtonClick = (index) => {
    playNote(index);
  };

  const handleUpButtonClick = () => {
      setTranspose(transpose + 1);
  };
  
  const handleDownButtonClick = () => {
      setTranspose(transpose - 1);
  };

  const handleModeButtonClick = () => {
    const newScale = isMajor ? [261.63, 293.66, 311.13, 349.23, 392, 415.3, 466.16, 523.25] : [261.63, 293.66, 329.63, 349.23, 392, 440, 493.88, 523.25];
    setScale(newScale);
    setIsMajor(!isMajor);
  };  

  const handleKeyDown = (event) => {
    const key = event.key;
    const index = parseInt(key) - 1;
    if (!isNaN(index) && index >= 0 && index < scale.length) {
      playNote(index);
    } else if (key === 'Enter') {
      playEntireScale();
    }
  };
  
  const playEntireScale = () => {
    const noteDelay = 425;
    const firstAndLastNoteDelay = 600;
  
    const playNoteWithDelay = (index, delay, duration) => {
      setTimeout(() => {
        playNote(index, duration);
      }, delay);
    };
  
    // Play the scale up with appropriate delays and durations
    scale.forEach((_, index) => {
      const delay = index === 0 ? 0 : index * noteDelay + firstAndLastNoteDelay - noteDelay;
      const duration = (index === 0 || index === scale.length - 1) ? firstAndLastNoteDelay : noteDelay;
      playNoteWithDelay(index, delay, duration);
    });
  
    // Play the scale down with appropriate delays and durations
    const reversedScale = scale.slice(1).reverse();
    reversedScale.forEach((_, index) => {
      const delay = (scale.length + index) * noteDelay + firstAndLastNoteDelay;
      playNoteWithDelay(scale.length - 2 - index, delay, noteDelay);
    });
  
    // Play the last note with a longer delay
    playNoteWithDelay(0, 2 * scale.length * noteDelay - noteDelay + firstAndLastNoteDelay, firstAndLastNoteDelay);
  
    // Play the arpeggio up
    const arpeggioIndices = [2, 4, 7];
    arpeggioIndices.forEach((index, i) => {
      const delay = (2 * scale.length + i) * noteDelay + firstAndLastNoteDelay;
      playNoteWithDelay(index, delay, noteDelay);
    });
  
    // Play the arpeggio down
    const reversedArpeggioIndices = arpeggioIndices.slice().reverse().slice(1);
    reversedArpeggioIndices.forEach((index, i) => {
      const delay = (2 * scale.length + arpeggioIndices.length + i) * noteDelay + firstAndLastNoteDelay;
      playNoteWithDelay(index, delay, noteDelay);
    });
  
    // Play the first note again with a longer delay
    playNoteWithDelay(0, (2 * scale.length + arpeggioIndices.length + reversedArpeggioIndices.length) * noteDelay + firstAndLastNoteDelay, firstAndLastNoteDelay);
  };
  
  
  
  
    

  const renderNoteButtons = () => {
    return (
      <>
        <div className="play-button-row">
          <button className="play-button red" onClick={() => handleButtonClick(0)}>1</button>
          <button className="play-button orange" onClick={() => handleButtonClick(1)}>2</button>
          <button className="play-button yellow" onClick={() => handleButtonClick(2)}>3</button>
          <button className="play-button green" onClick={() => handleButtonClick(3)}>4</button>
        </div>
        <div className="play-button-row">
          <button className="play-button blue" onClick={() => handleButtonClick(4)}>5</button>
          <button className="play-button indigo" onClick={() => handleButtonClick(5)}>6</button>
          <button className="play-button violet" onClick={() => handleButtonClick(6)}>7</button>
          <button className="play-button red" onClick={() => handleButtonClick(7)}>8</button>
        </div>
      </>
    );
  };
  
  const renderTransposeButtons = () => {
    return (
      <div className="play-button-row">
        <button className="play-button black-button" onClick={handleUpButtonClick}>Up</button>
        <button className="play-button blue" onClick={handleModeButtonClick}>{isMajor ? 'Minor' : 'Major'}</button>
        <button className="play-button black-button" onClick={handleDownButtonClick}>Down</button>
      </div>
    );
  };
  
  return (
    <div className="play-main" onKeyDown={handleKeyDown} tabIndex={0}>
      <div className="play-note-display">{lastPlayed}</div>
      <div className="play-device">
        <div className="play-section">
          {renderNoteButtons()}
          {renderTransposeButtons()}
        </div>
      </div>
    </div>
  );
  
}

export default Play;