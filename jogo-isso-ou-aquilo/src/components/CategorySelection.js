// components/CategorySelectionScreen.js
import React, { useState } from 'react';
import '../styles/CategorySelection.css';
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
      <header>
      </header>
      <p className="paragrafo PS2P branco">Categorias</p>
      <div className="container">
        <div className="categories">
          <div className={`category cantor ${selectedCategory === 'cantor' ? 'selected' : ''}`} onClick={() => handleCategorySelect('Cantor')}>
            <p className="paragrafo Arvo roxo">Cantor</p>
          </div>

          <div className={`category animais ${selectedCategory === 'animais' ? 'selected' : ''}`} onClick={() => handleCategorySelect('Animais')}>
            <p className="paragrafo Arvo roxo">Animais</p>
          </div>

          <div className={`category comidas ${selectedCategory === 'comidas' ? 'selected' : ''}`} onClick={() => handleCategorySelect('Comidas')}>
            <p className="paragrafo Arvo roxo">Comida</p>
          </div>

          <div className={`category herois  ${selectedCategory === 'herois' ? 'selected' : ''}`} onClick={() => handleCategorySelect('Heróis')}>
            <p className="paragrafo Arvo roxo">Heróis</p>
          </div>

          {/* Add outras categorias*/}
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
