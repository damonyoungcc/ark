import React, { useState } from 'react';
import logo from './logo.svg';
import Hello from './components/demo/Hello';
import LikeButton from './components/demo/LikeButton';
import MouseTracker from './components/demo/MouseTracker';
import './App.css';

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Hello message="hello world2" />
        <LikeButton />
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          Toggle Tracker
        </button>
        {show && <MouseTracker />}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
