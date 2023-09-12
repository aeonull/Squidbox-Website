import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import './Tutorials.css';
import CodeTutorial from './CodeTutorial';
import GettingStartedTutorial from './GettingStartedTutorial';
import SquidboxTutorial from './SquidboxTutorial';
import WhereToGoNext from './WhereToGoNext';
import HostTutorial from './HostTutorial';
import WhatWasDone from './WhatWasDone';

function Tutorials() {
  return (
    <div className="tutorials-wrapper">
      <div className="tutorials-container">
        <h2>All Tutorials</h2>
        <ul className="tutorials-list">
          <li>
            <Link to="/getting-started-tutorial" title="This tutorial will show you how to get started with the Squidbox.">
              Getting Started
            </Link>
          </li>
          <li>
            <Link
              to="/code-tutorial"
              title="This tutorial will show you how to run the code for the Squidbox."
            >
              How To Run The Code
            </Link>
          </li>
          <li>
            <Link to="/squidbox-tutorial" title="Learn how to play the Squidbox and create music with it.">
              How To Play The Squidbox
            </Link>
          </li>
          <li>
          <Link to="/what-was-done" title="Discover what prior teams have done with the Squidbox.">
              See what prior teams have done
            </Link>
          </li>
          <li>
            <Link to="/where-to-go-next" title="Find out where to go next after completing the Squidbox tutorials.">
              Where To Go Next
            </Link>
          </li>
          <li>
            <Link to="/host-tutorial" title="Learn how to host the Squidbox website.">
              How To Host The Squidbox Website
            </Link>
          </li>
        </ul>
        <Routes>
          <Route path="/code-tutorial" element={<CodeTutorial />} />
          <Route path="/getting-started-tutorial" element={<GettingStartedTutorial />} />
          <Route path="/squidbox-tutorial" element={<SquidboxTutorial />} />
          <Route path="/where-to-go-next" element={<WhereToGoNext />} />
          <Route path="/host-tutorial" element={<HostTutorial />} />
          <Route path="/what-was-done" element={<WhatWasDone />} />
        </Routes>
      </div>
    </div>
  );
}

export default Tutorials;
