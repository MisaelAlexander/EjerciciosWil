import React from 'react';

const Card = ({ texto }) => {
  return (
    <div className="card">
      <div className="card-body">
        {texto}
      </div>
    </div>
  );
};

export default Card;