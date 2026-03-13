const Alert = ({ mensaje }) => {
  return (
    <div className="alert alert-primary" role="alert">
  {mensaje}
</div>
  )
}

export default Alert;