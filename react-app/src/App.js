import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const springbootApiPort = process.env.REACT_APP_SPRINGBOOT_HOST_PORT;

  const [message, setMessage] = useState('');

  useEffect(() => {
    // React 실행시 Spring Boot 백엔드 API를 호출
    axios.get(`http://localhost:${springbootApiPort}/api/hello`)
      .then(response => setMessage(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
