import React from 'react';
import profileImage from './img/quero.jpeg'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Visualizer App based from Clement Mihailescu's Project</h1>
      <h2>My React App</h2>
      <img src={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;
