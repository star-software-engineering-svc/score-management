import React from 'react';
import { Header } from './views/Header';
import './App.css';
import { Board } from './views/Board';

function App() {
  return (
    <div className="App">
      <Header />
      <Board />
    </div>
  );
}

export default App;
