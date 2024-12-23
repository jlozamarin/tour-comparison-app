import React from 'react'; // import the React library
import Gallery from './components/Gallery'; // import the Gallery component
import './App.css'; // add styling

function Toolbar() {
  return (
    <nav className="toolbar"> 
      <button>Home</button>
      <button>About</button>
      <button>Contact</button>
    </nav>
  );
}

function App() { // create the App component
  return (
    <div className="App">
      <header>
        <h1>Tour Comparison App</h1>
      </header>
      <Toolbar />
      <Gallery />
    </div>
  );
}
export default App; // export the App component