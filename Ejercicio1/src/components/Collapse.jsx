import React, { useId } from 'react';

const Collapse = ({
  botonTexto = 'Toggle width collapse',
  contenido = 'This is some placeholder content for a horizontal collapse. It’s hidden by default and shown when triggered.',
  width = 300
}) => {
  const collapseId = useId(); // Genera un ID único para este collapse

  return (
    <>
      <p>
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${collapseId}`}
          aria-expanded="false"
          aria-controls={collapseId}
        >
          {botonTexto}
        </button>
      </p>
      <div style={{ minHeight: '120px' }}>
        <div className="collapse collapse-horizontal" id={collapseId}>
          <div className="card card-body" style={{ width: `${width}px` }}>
            {contenido}
          </div>
        </div>
      </div>
    </>
  );
};

export default Collapse;