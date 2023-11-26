import React from 'react';
import '../styles/GameEnd.css'; // Importe o arquivo CSS para estilização
import { useNavigate } from 'react-router-dom';

const GameEnd = ({ playAgain }) => {
  return (
    <div className="game-end PS2P branco">
      <div className="end-box">
        <h2>Fim de Jogo!</h2>
        <div className="play-again-box">
          <button onClick={playAgain}>Jogar outra vez</button>
        </div>
      </div>
    </div>
  );
};

export default GameEnd;
