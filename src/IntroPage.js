import React from 'react';
import './IntroPage.css';

function IntroPage({ onStart }) {
  return (
    <div className="intro-container">
          <h1>
            <span id='b'>Lets</span>
            <span id='g'>Play</span>
            <span id='y'> With</span>
            <span id='r'> Colors</span>
          </h1>
      <button onClick={onStart}>Start Playing</button>
      <footer className="footer">
        <p>© 2024 ADHY. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default IntroPage;
