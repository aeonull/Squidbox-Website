import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import Tutorials from './Tutorials';
import About from './About';
import Play from './Play';
import './App.css';
import CodeTutorial from './CodeTutorial';
import GettingStartedTutorial from './GettingStartedTutorial';
import SquidboxTutorial from './SquidboxTutorial';
import WhereToGoNext from './WhereToGoNext';
import HostTutorial from './HostTutorial';
import WhatWasDone from './WhatWasDone';

function App() {
  const titleRef = useRef(null);
  const [allLettersFadedIn, setAllLettersFadedIn] = useState(false);

  useEffect(() => {
    if (titleRef.current) {
      const letters = titleRef.current.querySelectorAll('span');
      const lastLetter = letters[letters.length - 1];

      lastLetter.addEventListener('animationend', () => {
        setAllLettersFadedIn(true);
        letters.forEach((letter) => {
          letter.classList.add('rainbow-text');
          setTimeout(() => {
            letter.classList.add('rainbow-text-fade-in');
          }, 100);
        });
      });

      letters.forEach((letter, index) => {
        letter.style.animationDelay = `${index * 100}ms`;
        letter.classList.add('fade-in');
      });
    }
  }, []);

  return (
    <Router basename="/Squidbox_Website"> {/* Update this line */}
      <div className="App">
        <header className="App-header">
          <div className="App-header-content">
            <h1 ref={titleRef} className={allLettersFadedIn ? 'full-opacity' : ''}>
              <span>S</span>
              <span>q</span>
              <span>u</span>
              <span>i</span>
              <span>d</span>
              <span>b</span>
              <span>o</span>
              <span>x</span>
            </h1>
            <h2 className="App-subheader">HU 3910 Practicum in Music Technology</h2>
            <nav className="App-nav">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/tutorials">Tutorials</Link>
              <Link to="/play">Play</Link>
            </nav>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/code-tutorial" element={<CodeTutorial />} />
          <Route path="/getting-started-tutorial" element={<GettingStartedTutorial />} />
          <Route path="/squidbox-tutorial" element={<SquidboxTutorial />} />
          <Route path="/where-to-go-next" element={<WhereToGoNext />} />
          <Route path="/play" element={<Play />} />
          <Route path="/host-tutorial" element={<HostTutorial />} />
          <Route path="/what-was-done" element={<WhatWasDone />} />
        </Routes>
        <footer className="App-footer">
          <p>&copy; 2023 Squidbox</p>
        </footer>
        {allLettersFadedIn && <div className="App-overlay"></div>}
      </div>
    </Router>
  );
}

export default App;