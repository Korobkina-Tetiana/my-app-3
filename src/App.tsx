import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/content';
import { title } from 'process';

function App() {

  return (
    <div className="App">
      <Header title='My purchase history in London' />
      <Header title='My purchase history in Milan' />
      <Header title='My purchase history in Brno' />
      <Header title='My purchase history in Lviv' />
    </div>
  );
}

export default App;
