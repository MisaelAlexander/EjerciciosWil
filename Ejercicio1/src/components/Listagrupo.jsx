const ListaG = ({ Titulo, texto1, texto2, texto3, texto4 }) => {
  return (
    <ul class="list-group">
  <li class="list-group-item active" aria-current="true">{Titulo}</li>
  <li class="list-group-item">{texto1}</li>
  <li class="list-group-item">{texto2}</li>
  <li class="list-group-item">{texto3}</li>
  <li class="list-group-item">{texto4}</li>
</ul>
  );
};

export default ListaG;