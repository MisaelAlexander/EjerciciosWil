const textoTabla = ({ texto1,texto2, texto3 }) => {
  return (
    <div class="card" >
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{texto1}</li>
    <li class="list-group-item">{texto2}</li>
    <li class="list-group-item">{texto3}</li>
  </ul>
</div>
  );
};

export default textoTabla;