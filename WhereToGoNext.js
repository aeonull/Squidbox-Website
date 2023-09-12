import React from 'react';
import './WhereToGoNext.css';

function WhereToGoNext() {
  return (
    <div className="WhereToGoNext">
      <h2>Where to Go Next</h2>
      <p>
        Once you've familiarized yourself with Squidbox, there are many directions you can take to expand on this! Here are a few ideas:
      </p>
      <ul>
        <li>Add velocity to the buttons. Much of the code is already there, but was not fully implemented due to time constraints.</li>
        <li>Fix the bluetooth connectivity. All of the code is already there for that and it was previously working before we added the screen, but we ran out of time to further debug it.</li>
        <li>Add a major/minor mode and make the notes of the screen overwritte the previously played notes.</li>
        <li>See other ways that you can explore making the screen look more visually appealing (graphics wise). Perhaps get a new screen.</li>
        <li>Explore different genres of music and try to create your own songs using the Squidbox.</li>
      </ul>
      <p>
        We hope you had fun learning about the Squidbox and making music with it. Keep expanding on it and updating this website to make this project a success!
      </p>
    </div>
  );
}

export default WhereToGoNext;