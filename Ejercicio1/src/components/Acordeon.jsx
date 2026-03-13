import React from 'react';

const Accordeon = ({ items }) => {
  return (
    <div className="accordion" id="accordionExample">
      {items.map((item, index) => {
        const collapseId = `collapse-${index}`;
        const headingId = `heading-${index}`;
        const isFirst = index === 0;

        return (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={headingId}>
              <button
                className={`accordion-button ${!isFirst ? 'collapsed' : ''}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${collapseId}`}
                aria-expanded={isFirst ? 'true' : 'false'}
                aria-controls={collapseId}
              >
                {item.titulo}
              </button>
            </h2>
            <div
              id={collapseId}
              className={`accordion-collapse collapse ${isFirst ? 'show' : ''}`}
              aria-labelledby={headingId}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {item.contenido}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordeon;