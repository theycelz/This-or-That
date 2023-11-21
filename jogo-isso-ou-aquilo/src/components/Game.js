// components/Game.js
import React, { useState } from 'react';
import ImageOption from './ImageOption';
import Score from './Score';
import Login from './Login';
import CategorySelection from './CategorySelection';

const options = {
  category1: ['path/to/image1.jpg', 'path/to/image2.jpg'],
  category2: ['path/to/image3.jpg', 'path/to/image4.jpg'],
  // Adicione mais categorias e opções de imagem conforme necessário
};

const Game = () => {
  const [score, setScore] = useState(0);
  const [currentRound, setCurrentRound] = useState(0);
  const [username, setUsername] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleOptionClick = (optionIndex) => {
    // Lógica para verificar a escolha do usuário e atualizar o estado
    // Você pode implementar a lógica de pontuação aqui

    // Exemplo simples: a cada escolha, a próxima rodada é exibida
    setCurrentRound(currentRound + 1);
  };

  const handleLogin = (user) => {
    setUsername(user);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const handlePlayAgain = () => {
    // Lógica para reiniciar o jogo (zerar pontuação, etc.)
    setScore(0);
    setCurrentRound(0);
  };

  const handleBackToCategory = () => {
    // Lógica para voltar à tela de seleção de categoria
    setSelectedCategory(null);
  };

  return (
    <div>
      {username ? (
        selectedCategory ? (
          currentRound < options[selectedCategory].length ? (
            <div>
              <Score score={score} onPlayAgain={handlePlayAgain} onBackToCategory={handleBackToCategory} />
              <div className="options-container">
                <ImageOption src={options[selectedCategory][currentRound % options[selectedCategory].length]} onClick={() => handleOptionClick(0)} />
                <span>OU</span>
                <ImageOption src={options[selectedCategory][(currentRound + 1) % options[selectedCategory].length]} onClick={() => handleOptionClick(1)} />
              </div>
            </div>
          ) : (
            <Score score={score} onPlayAgain={handlePlayAgain} onBackToCategory={handleBackToCategory} />
          )
        ) : (
          <CategorySelection onSelectCategory={handleSelectCategory} />
        )
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default Game;
