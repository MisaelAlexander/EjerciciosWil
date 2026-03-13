const Titulo = ({ titulo,descripcion }) => {
  return (
    <h1> {titulo} <span class="badge text-bg-secondary">{descripcion} </span></h1>
  );
};

export default Titulo;