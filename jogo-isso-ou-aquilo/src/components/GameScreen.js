import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/thisorthat.css';

const GameScreen = () => {
  const { category } = useParams(); // Obtém o parâmetro da categoria da rota
  const [images, setImages] = useState([]);
  const [round, setRound] = useState(0);
  const [result, setResult] = useState('');
  const [selectedImage1, setSelectedImage1] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);

  //api para herois
  

  // Função para buscar imagens de animais da API
  const fetchAnimalImages = async () => {
    try {
      const response = await fetch('https://api.thedogapi.com/v1/images/search?limit=12'); // Alterado para 12 rodadas
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error('Erro ao buscar imagens:', error);
    }
  };

  useEffect(() => {
    fetchAnimalImages(); // Busca as imagens quando o componente é montado
  }, []);

  const handleChoose = (image, index) => {
    if (index === 0) {
      setSelectedImage1(image);
    } else {
      setSelectedImage2(image);
    }

    if (round < 10) {
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
              <button className="choose-button" onClick={() => handleChoose(images[round], 0)}>
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
                className="choose-button"
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
