
const Navbar = ({ textoactual, texto1, texto2, texto3 }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{textoactual}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">{texto1}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{texto2}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{texto3}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;