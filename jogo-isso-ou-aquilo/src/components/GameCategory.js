const GameCategory = ({ title, imageUrl }) => {
  return (
    <div className="game-category" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + imageUrl})` }}>
      <div className="category-box"></div>
      <p>{title}</p>
    </div>
  );
};

export default GameCategory;