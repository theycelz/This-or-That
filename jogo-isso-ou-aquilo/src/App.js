import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import CategorySelection from './components/CategorySelection';
import GameScreen from './components/GameScreen';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/categoryselection" element={<CategorySelection />} />
          <Route path="/gamescreen/:category" element={<GameScreen />} /> {/* Adicione a variável de categoria na rota */}
        </Routes>
      </Router>
    </div>
  );
}



export default App;


