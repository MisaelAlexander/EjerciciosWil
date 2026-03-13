import React from 'react';

const Linea = ({ texto, accion }) => {
  return (
    <>
      <label htmlFor="range1" className="form-label">
        {texto}
      </label>
      <input
        type="range"
        className="form-range"
        id="range1"
        onChange={accion}
      />
    </>
  );
};

export default Linea;