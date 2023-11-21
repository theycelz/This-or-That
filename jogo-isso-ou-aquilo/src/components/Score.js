// components/Score.js
import React from 'react';

const Score = ({ score, onPlayAgain, onBackToCategory }) => (
  <div>
    <h2>Score: {score}</h2>
    <button onClick={onPlayAgain}>Jogar Novamente</button>
    <button onClick={onBackToCategory}>Voltar para Categoria</button>
  </div>
);

export default Score;
