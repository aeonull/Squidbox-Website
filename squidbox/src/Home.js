import React from 'react';
import './Home.css';
import SquidboxImage from './SquidboxImage.jpeg';

function Home() {
  return (
    <div className="home-main">
      <div className="home-section">
        <h2 className="welcome-title">Welcome To The Squidbox Project Website!</h2>
        <h3>Watch our video demos here!!</h3>

        <div className="video-wrapper">
          <h4>Squidbox Demo D23</h4>
          <div className="video-container">
            <iframe
              title="demo-video-d23"
              src="https://www.youtube.com/embed/WCT-RfG2Mdk"
              style={{border: 0}}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="video-wrapper">
          <h4>Squidbox Demo C23</h4>
          <div className="video-container">
            <iframe
              title="demo-video-c23"
              src="https://www.youtube.com/embed/vyqQF_2pFXk"
              style={{border: 0}}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
