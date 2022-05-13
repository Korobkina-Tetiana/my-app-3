import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/content';
import { title } from 'process';

function App() {
  return (
    <div className="App">
      <Header title='My purchase history' />
    </div>
  );
}

export default App;
