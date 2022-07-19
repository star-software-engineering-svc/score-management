import React from 'react';
import { Header } from './views/Header';
import './App.css';
import { Board } from './views/Board';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

function App() {
  return (
    <div className="App">
      <Header />
      <Board />
    </div>
  );
}

export default App;
