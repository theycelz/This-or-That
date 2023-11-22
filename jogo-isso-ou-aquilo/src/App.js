// App.js
/*import React from 'react';
import Game from './components/Game';
import './App.css';

function App() {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;
*/
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Game from './components/Game';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/gamescreen" element={<Game />} />
          <Route path="/" element={<Game />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

