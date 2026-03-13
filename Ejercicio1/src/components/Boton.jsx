const boton = ({ texto, accion }) => {
  return (
    <button type="button" className="btn btn-primary" onClick={accion}>
      {texto}
    </button>
  );
}
export default boton;