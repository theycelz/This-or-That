import React from 'react';
import './styles.css';

const GameScreen = () => {
    return (
        <div className="game-screen">
            <div className="side-left">
                <img className="game-image" src="./image1.png" alt="image1" />
                <button className="choose-button">Escolher 1</button>
            </div>
            <div className="side-right">
                <img className="game-image" src="./image2.png" alt="image2" />
                <button className="choose-button">Escolher 2</button>
            </div>
        </div>
    );
};

export default GameScreen;