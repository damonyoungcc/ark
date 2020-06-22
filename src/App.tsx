import React, { useState } from 'react';
import logo from './logo.svg';
import Hello from './components/demo/Hello';
import LikeButton from './components/demo/LikeButton';
// import MouseTracker from './components/demo/MouseTracker';
import useMousePosition from './components/hooks/useMousePosition';
import useURLLoader from './components/hooks/useURLLoader';
import './App.css';

interface IShowResult {
  message: string;
  status: string;
}

function App() {
  const [show, setShow] = useState(true);
  const positions = useMousePosition();
  const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random', [show]);
  const dogResult = data as IShowResult;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          X: {positions.x}, Y : {positions.y}
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
        {loading ? (
          <p>🐶 is loading...</p>
        ) : (
          <img style={{ width: '200px', height: '200px' }} src={dogResult && dogResult.message} />
        )}
        {/* {show && <MouseTracker />} */}
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
