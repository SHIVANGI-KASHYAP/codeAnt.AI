import React from 'react';
import './App.css';
import Header from './components/Header';
import RepositoryList from './components/RepositoryList';

function App() {
  return (
    <div className="App">
      <Header />
      <RepositoryList />
    </div>
  );
}

export default App;
