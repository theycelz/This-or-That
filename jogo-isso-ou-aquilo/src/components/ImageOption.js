// components/ImageOption.js
import React from 'react';

const ImageOption = ({ src, onClick }) => (
  <img src={src} alt="Option" onClick={onClick} />
);

export default ImageOption;
