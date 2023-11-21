// components/CategorySelectionScreen.js
import React, { useState } from 'react';
import './CategorySelection.css';

const CategorySelection = ({ onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleStartGame = () => {
    if (selectedCategory) {
      onSelectCategory(selectedCategory);
    } else {
      alert('Por favor, selecione uma categoria antes de iniciar o jogo.');
    }
  };

  return (
    <div>
      <header></header>
      <p className="paragrafo PS2P branco">Categorias</p>
      <div className="container">
        <div className="categories">
          <div className={`category herois ${selectedCategory === 'herois' ? 'selected' : ''}`} onClick={() => handleCategorySelect('herois')}>
            <p className="paragrafo Arvo roxo">Heróis</p>
          </div>

          <div className={`category comidas ${selectedCategory === 'comidas' ? 'selected' : ''}`} onClick={() => handleCategorySelect('comidas')}>
            <p className="paragrafo Arvo roxo">Comidas</p>
          </div>
          {/* Adicione outras categorias conforme necessário */}
        </div>
        <div className="column">
          {/* Conteúdo da coluna à direita */}
          <img src="./dados.png" alt="Coluna da direita" />
        </div>
      </div>
      <footer>
        <img src="./thisorthat.png" alt="Rodapé com imagem" />
      </footer>
      <button onClick={handleStartGame}>Iniciar Jogo</button>
    </div>
  );
};

export default CategorySelection;
