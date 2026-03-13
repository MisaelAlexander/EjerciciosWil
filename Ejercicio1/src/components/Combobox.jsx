import React from 'react';

const Combobox = ({ Titulo, Texto1, Texto2, Texto3 }) => {
  return (
    <select className="form-select" aria-label="Default select example">
  <option selected>{Titulo}</option>
  <option value="1">{Texto1}</option>
  <option value="2">{Texto2}</option>
  <option value="3">{Texto3}</option>
</select>
  );
};

export default Combobox;