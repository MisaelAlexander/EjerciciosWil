import React from 'react';

const CheckboxGroup = ({ titulo1, titulo2 }) => {
  return (
    <>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="checkDefault" />
        <label className="form-check-label" htmlFor="checkDefault">
          {titulo1}
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="checkChecked" defaultChecked />
        <label className="form-check-label" htmlFor="checkChecked">
          {titulo2}
        </label>
      </div>
    </>
  );
};

export default CheckboxGroup;