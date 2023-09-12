import React, { useState } from 'react';
import './HostTutorial.css';

function HostTutorial() {
  const [showGithubPages, setShowGithubPages] = useState(true);

  const toggleTutorial = () => {
    setShowGithubPages(!showGithubPages);
  };

  return (
    <div className="HostTutorial">
      <button onClick={toggleTutorial}>
        {showGithubPages ? 'Switch to Other Hosting' : 'Switch to GitHub Pages'}
      </button>
      {showGithubPages ? (
        <div className="GithubPagesTutorial">
          <h2>How to Host the Website on GitHub Pages</h2>
          <p>
            GitHub Pages is a hosting service that allows you to host your static websites directly from your GitHub repository. Here's how to do it:
          </p>
          <h3>Step 1: Create a new repository</h3>
          <p>
            Go to <a href="https://github.com/new" target="_blank" rel="noopener noreferrer">github.com/new</a> and create a new repository. Make sure the repository is public.
          </p>
          <h3>Step 2: Clone the repository</h3>
          <p>
            Clone the repository to your local machine using your preferred Git client or the command line. Replace `username` and `repository-name` with your GitHub username and the name of your repository:
          </p>
          <pre>git clone https://github.com/username/repository-name.git</pre>
          <h3>Step 3: Add your website files</h3>
          <p>
            Copy your website files, including the build files, into the repository folder. If your project was created using Create React App, you can generate a build by running:
          </p>
          <pre>npm run build</pre>
          <p>
            After running the build command, copy the contents of the `build` folder to the repository folder.
          </p>
          <h3>Step 4: Push your changes to GitHub</h3>
          <p>
            Commit your changes and push them to GitHub using your preferred Git client or the command line:
          </p>
          <pre>
            git add .
            git commit -m "Add website files"
            git push origin main
          </pre>
          <h3>Step 5: Setting Up Github Pages</h3>
          <p>You can install Github Pages in your project using this command: </p>
          <pre>npm install gh-pages --save-dev</pre>
          <h3>Step 6: Making Changes To package.json</h3>
          <p>Above the "name" tag in your package.json file, add a "homepage" tag like this: </p>
          <pre>"homepage": "http://yourGithubUsername.github.io/yourRepositoryName"</pre>
          <p>Now you need to add two scripts under the scripts tag. Place these tags belong the "start" tag under the "scripts" tag</p>
          <pre>
            "predeploy": "npm run build",<br />
            "deploy": "gh-pages -d build",<br />
        </pre>

          <h3>Step 7: Add And Commit To Your Repository</h3>
          <p>Add, commit, and push the changes you just made to your repository.</p>
          <pre>git add . <br />
          git commit -m "package.json deployment changes" <br />
          git push <br /> </pre>
          <h3>Step 8: Deploy The Website</h3>
          <p>Run this command to deploy the website: </p>
          <pre>npm run deploy</pre>
          <p>When you run this command, it uses a deployment tool, in this case gh-pages, to push the contents of the build folder the hosting serivce, Github Pages.</p>
          <h3>Step 9: Access your website</h3>
          <p>
            Verify that the deployed worked. You should be able to see "Published" in the terminal if it worked. You should also be able to see a gh-pages branch in your repository Your website should now be live at `https://username.github.io/repository-name/`. Replace `username` and `repository-name` with your GitHub username and the name of your repository. You may need to wait a few minutes for your website to deploy.
          </p>
          <h3>Additional Resources</h3>
          <ul>
            <li><a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">GitHub Pages</a> - Official documentation for GitHub Pages.</li>
            <li><a href="https://reactjs.org/docs/deployment.html" target="_blank" rel="noopener noreferrer">Deploying a React App</a> - React documentation on deploying a React app, including using GitHub Pages.</li>
            <li><a href="https://www.youtube.com/watch?v=Q9n2mLqXFpU" target="_blank" rel="noopener noreferrer">YouTube Tutorial</a> - A video tutorial on how to host a website on GitHub Pages.</li>
          </ul>
        </div>
      ) : (
        <div className="OtherHostingTutorial">
          <h2>How to Host the Website on Other Hosting Services</h2>
          <p>
            There are many hosting services available for hosting your website. Here are a few popular ones:
          </p>
          <ul>
            <li><a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify</a></li>
            <li><a href="https://www.heroku.com/" target="_blank" rel="noopener noreferrer">Heroku</a></li>
            <li><a href="https://www.vercel.com/" target="_blank" rel="noopener noreferrer">Vercel</a></li>
          </ul>
          <p>
            Each hosting service has its own process for deploying a website. You can find detailed documentation on their websites.
          </p>
          <h3>Additional Resources</h3>
          <ul>
            <li><a href="https://www.netlify.com/docs/" target="_blank" rel="noopener noreferrer">Netlify Documentation</a></li>
            <li><a href="https://devcenter.heroku.com/" target="_blank" rel="noopener noreferrer">Heroku Dev Center</a></li>
            <li><a href="https://vercel.com/docs" target="_blank" rel="noopener noreferrer">Vercel Documentation</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default HostTutorial;
