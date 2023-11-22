import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/thisorthat.css';

const GameScreen = () => {
  const { category } = useParams(); // Obtém o parâmetro da categoria da rota

  return (
    <div className="game-screen">
      <h1>Categoria selecionada: {category}</h1>
      <div className="side-left">
                <img className="game-image" src="./image1.png" alt="image1" />
                <button className="choose-button">Escolher 1</button>
            </div>
            <div className="side-right">
                <img className="game-image" src="./image2.png" alt="image2" />
                <button className="choose-button">Escolher 2</button>
            </div>
      {/* Restante do seu código */}
    </div>
  );
};

export default GameScreen;
