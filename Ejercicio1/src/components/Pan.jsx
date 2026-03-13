const Pan = ({ texto1, texto2 }) => {
  return (
    <nav style="--bs-breadcrumb-divider: '';" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">{texto1}</a></li>
    <li class="breadcrumb-item active" aria-current="page">{texto2}</li>
  </ol>
</nav>
  );
};

export default Pan;