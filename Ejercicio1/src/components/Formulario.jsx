import React from 'react';

const Formulario = ({ titulo1, titulo2 }) => {
  return (
    <>
      <div className="mb-3">
        <label htmlFor="emailInput" className="form-label">
          {titulo1}
        </label>
        <input
          type="email"
          className="form-control"
          id="emailInput"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="textareaInput" className="form-label">
          {titulo2}
        </label>
        <textarea
          className="form-control"
          id="textareaInput"
          rows="3"
        ></textarea>
      </div>
    </>
  );
};

export default Formulario;