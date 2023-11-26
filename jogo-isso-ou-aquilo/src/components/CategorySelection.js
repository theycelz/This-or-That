
import '../styles/CategorySelection.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CategorySelection = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('');

const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    navigate(`/gamescreen/${category}`); // Navega para a rota de GameScreen com o parâmetro de categoria selecionada
  };


  return (
    <div>
      <header>
      </header>
      <p className="paragrafo PS2P branco">Categorias</p>
      <div className="container">
        <div className="categories">
          <div className={`category cantor ${selectedCategory === 'cantor' ? 'selected' : ''}`} onClick={() => handleCategorySelect('Artistas')}>
            <p className="paragrafo Arvo roxo">Artistas</p>
          </div>

          <div className={`category animais ${selectedCategory === 'animais' ? 'selected' : ''}`} onClick={() => handleCategorySelect('Cães')}>
            <p className="paragrafo Arvo roxo">Cães</p>
          </div>

          <div className={`category comidas ${selectedCategory === 'comidas' ? 'selected' : ''}`} onClick={() => handleCategorySelect('Comidas')}>
            <p className="paragrafo Arvo roxo">Comida</p>
          </div>

          <div className={`category herois  ${selectedCategory === 'herois' ? 'selected' : ''}`} onClick={() => handleCategorySelect('Gatos')}>
            <p className="paragrafo Arvo roxo">Gatos</p>
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
    </div>
  );
};

export default CategorySelection;
