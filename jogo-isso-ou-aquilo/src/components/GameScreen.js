import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/thisorthat.css';

const GameScreen = () => {
  const { category } = useParams();
  const [images, setImages] = useState([]);
  const [round, setRound] = useState(0);
  const [result, setResult] = useState('');
  const [selectedImage1, setSelectedImage1] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);

  const fetchAnimalImages = async () => {
    try {
      const response = await fetch('https://api.thedogapi.com/v1/images/search?limit=14');
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error('Erro ao buscar imagens:', error);
    }
  };

  const fetchCatImages = async () => {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=14');
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error('Erro ao buscar imagens de gatos:', error);
    }
  };


  
  useEffect(() => {
    if (category === 'Gatos') {
      fetchCatImages();
    } else if (category === 'Artistas') {
      fetchCatImages();
    } else {
      fetchAnimalImages();
    }
  }, [category]);

  const handleChoose = (image, index) => {
    if (index === 0) {
      setSelectedImage1(image);
    } else {
      setSelectedImage2(image);
    }

    if (round < 12) {
      setRound(round + 2);
    } else {
      setResult('Fim do Jogo!');
    }
  };

  return (
    <div className="game-screen">
      <h1>Categoria selecionada: {category}</h1>
      {result ? (
        <div className="result-message">
          <h2>{result}</h2>
        </div>
      ) : (
        <>
          <div className="side-left">
            <div className="content-wrapper">
              <img
                className="game-image"
                src={images[round] ? images[round].url : ''}
                alt={`image${round + 1}`}
              />
              <button className="choose-button PS2P verde" onClick={() => handleChoose(images[round], 0)}>
                Escolher 1
              </button>
            </div>
          </div>
          <div className="side-right">
            <div className="content-wrapper">
              <img
                className="game-image"
                src={images[round + 1] ? images[round + 1].url : ''}
                alt={`image${round + 2}`}
              />
              <button
                className="choose-button PS2P lilac"
                onClick={() => handleChoose(images[round + 1], 1)}
              >
                Escolher 2
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default GameScreen;
