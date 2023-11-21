import React from 'react';
import '../styles/CategorySelection.css';
import GameCategory from './GameCategory';
import GameFooter from './GameFooter';
import PillarImage from './PillarImage';

const CategorySelectionScreen = () => {
  return (
    <div className="game-category-selection">
      <PillarImage imageSrc="path_to_your_image" />
      <div className="main-box">
        <div className="categories-title">Categorias</div>
        <div className="categories-box">
          <GameCategory title="Categoria 1" imageUrl="..styles/heroi.png" />
          <GameCategory title="Categoria 2" imageUrl="/categoria2.png" />
          <GameCategory title="Categoria 3" imageUrl="/categoria3.png" />
          <GameCategory title="Categoria 4" imageUrl="/categoria4.png" />
          <GameCategory title="Categoria 5" imageUrl="/categoria5.png" />
          <GameCategory title="Categoria 6" imageUrl="/categoria6.png" />
        </div>
        <GameFooter gameTitle="Título do Jogo" />
      </div>
    </div>
  );
};

export default CategorySelectionScreen;