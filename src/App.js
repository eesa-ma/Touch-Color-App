import React, { useState } from 'react';
import ColorCircle from './ColorCircle';
import IntroPage from './IntroPage'; 
import DetailsPage from './DetailsPage';
import './App.css';

function App() {
  const [circles, setCircles] = useState([]);
  const [currentPage, setCurrentPage] = useState('intro');

  const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  const createCircles = (clientX, clientY) => {
    const newCircle = {
      id: Date.now() + Math.random(),
      x: clientX,
      y: clientY,
      color: getRandomColor(),
    };
    
    setCircles((prevCircles) => [...prevCircles, newCircle]);

    setTimeout(() => {
      setCircles((currentCircles) => currentCircles.filter(circle => circle.id !== newCircle.id));
    }, 1000); 
  };

  const handlePointerDown = (event) => {
    event.preventDefault();
    if (event.type === 'mousedown' || event.type === 'touchstart') {
      const clientX = event.clientX || (event.touches ? event.touches[0].clientX : 0);
      const clientY = event.clientY || (event.touches ? event.touches[0].clientY : 0);
      createCircles(clientX, clientY);
    }
  };

  const handlePointerMove = (event) => {
    event.preventDefault();
    if (event.type === 'mousemove' || event.type === 'touchmove') {
      const isMouseEvent = event.type === 'mousemove';
      const isPointerDown = isMouseEvent ? event.buttons === 1 : event.touches && event.touches.length > 0;

      if (isPointerDown) {
        const clientX = isMouseEvent ? event.clientX : event.touches[0].clientX;
        const clientY = isMouseEvent ? event.clientY : event.touches[0].clientY;
        createCircles(clientX, clientY);
      }
    }
  };

  const startGame = () => {
    setCurrentPage('details');
  };

  const continueToApp = () => {
    setCurrentPage('main'); 
  };

  return (
    <>
      {currentPage === 'intro' && <IntroPage onStart={startGame} />}
      {currentPage === 'details' && <DetailsPage onContinue={continueToApp} />}
      {currentPage === 'main' && (
        <>
          <h1 id='hi'>
            <span id='b'>Lets</span>
            <span id='g'>Play</span>
            <span id='y'> With</span>
            <span id='r'> Colors</span>
          </h1>
          <div
            className="App"
            onMouseDown={handlePointerDown}
            onMouseMove={handlePointerMove}
            onTouchStart={handlePointerDown}
            onTouchMove={handlePointerMove}
          >
            {circles.map((circle) => (
              <ColorCircle key={circle.id} x={circle.x} y={circle.y} color={circle.color} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default App;
