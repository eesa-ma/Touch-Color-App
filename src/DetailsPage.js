import React from 'react';
import './DetailsPage.css';

function DetailsPage({ onContinue }) {
  return (
    <div className="details-container">
      <h1>Game Functionalities</h1>
      <p>
        In this interactive web app, you can create colorful circles by touching or clicking on the screen. 
        Each circle will change to a random color and dissolve after 1 second. 
        You can also drag your mouse or finger to create multiple circles simultaneously.
      </p>
      <h2>Created by:</h2>
      <p>Adhy</p>
      <button onClick={onContinue}>Continue</button>
      <footer className="footer">
        <p>© 2024 ADHY. All rights reserved.</p>
      </footer>
    </div>
    
  );
}

export default DetailsPage;
