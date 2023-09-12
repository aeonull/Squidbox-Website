import React from 'react';
import './WhatWasDone.css';

function WhatWasDone() {
  return (
    <div className="WhatWasDone">
      <h2>Progress Made on the Squidbox</h2>
      <p>
        The Squidbox project has gone through multiple stages of development. Here is an overview of the work completed so far from the previous project group:
      </p>
      <ul>
        <li>
          <strong>Making the Case:</strong> The prior version of Squidbox did not come with any sort of case. It was just a simple Arduino MKR WiFi 1010. We wanted to try build off the prior project group by making the Squidbox look more finalized and like an actual project. So we thought that it was necessary to make a case for it. 
          We prototyped a lot of different styles of cases, but ultimately decided to make the case look more like a controller. This way it would be familiar to a lot of people and comfortable to hold. We also thought that it was important for it to be small enough so that young aspiring musicians could experiment with this device and learn 
          something from a young age.  
        </li>
        <li>
          <strong>Refactoring the Code:</strong> The Squidbox codebase has undergone several rounds of refactoring to optimize its performance, improve its readability, and ensure compatibility with future updates. Although it is still somewhat hard to read, we went in and added comments to every method in the code, which was a lot more challenging than we expected because prior iterations of the code were not documented at all.
          We hope that future teams will continue to keep good documentation of the code and will perhaps separate the code out into multiple classes which we did not have time for.
        </li>
        <li>
          <strong>Adding a Screen:</strong> A screen was added to the Squidbox to provide visual feedback for users, allowing them to better understand the current state of the device and which notes are being played. The screen can be further programmed to include more interesting information, such as whether it's in a major/minor key.
        </li>
        <li>
          <strong>Creating This Website:</strong> We spent so long trying to figure out where prior teams left off, what we needed to continue working on from the prior group, where all the parts were, and so on, that out of frustration, we wanted to create this website to make all the information for this project much more accessible and all in one place. This website was built to help other groups understand the Squidbox project and provide a starting point for future development. It includes tutorials, documentation, and resources to assist new team members in getting up to speed with the project.
          Hopefully all the information on here will make understanding the project so much easier because in our experience, finding out information about where to go and where all the parts were was the most time consuming part of the project.
          That being said, please continue to update this website and change it as your group continues to expand on this project, and or if anything was unclear.
        </li>
      </ul>
    </div>
  );
}

export default WhatWasDone;
