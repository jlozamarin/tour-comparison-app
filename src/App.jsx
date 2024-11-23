import React from 'react'; // import the React library
import Gallery from './Gallery'; // import the Gallery component
import './App.css'; // add styling

function App () { // create the App component
  return (
    <div className="App">
      <header>
        <h1>Tour Comparison App</h1>
      </header>
      <Gallery /> 
    </div>
  );
};

export default App; // export the App component