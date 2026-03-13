import React from 'react';

const ButtonGroup = ({ buttons, onButtonClick }) => {
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      {buttons.map((texto, index) => (
        <button
          key={index}
          type="button"
          className="btn btn-primary"
          onClick={() => onButtonClick && onButtonClick(texto, index)}
        >
          {texto}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;