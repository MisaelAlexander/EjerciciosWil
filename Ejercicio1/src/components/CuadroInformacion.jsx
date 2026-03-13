const CuadroInformacion = ({ titulo, descripcion }) => {
  return (
    <div className="card mt-4 border-top border-3">
      <div className="card-header">
        <h5 className="card-title mb-0">{titulo}</h5>
      </div>
      <div className="card-body">
        <p className="card-text">{descripcion}</p>
      </div>
    </div>
  );
};

export default CuadroInformacion;