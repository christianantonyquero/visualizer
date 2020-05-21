import React from 'react';
import profileImage from './img/quero.jpeg'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Visualizer App based from  <a href="https://clementmihailescu.github.io/Sorting-Visualizer/">Clement Mihailescu's sorting-visualizer</a> </h1>
      <h2>My React App</h2>
      <img src={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;
