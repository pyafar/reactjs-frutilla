import { NavLink } from 'react-router-dom'

const AccordionMenu = ({toggleProductMenu}) => {

    return (
        <ul className='accordion'>
            <li className="nav-item" data-bs-dismiss="offcanvas">
                <NavLink className="accordion-item nav-link" to="/category/all" onClick={toggleProductMenu}>Todos los productos</NavLink>
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
                <NavLink className="accordion-item nav-link" to="/category/tortas" onClick={toggleProductMenu}>Tortas</NavLink>
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
                <NavLink className="accordion-item nav-link" to="/category/cupcakes" onClick={toggleProductMenu}>Cupcakes</NavLink>
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
                <NavLink className="accordion-item nav-link" to="/category/cuadrados" onClick={toggleProductMenu}>Cuadrados</NavLink>
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
                <NavLink className="accordion-item nav-link" to="/category/alfajores" onClick={toggleProductMenu}>Alfajores</NavLink>
            </li>
        </ul>
    );
};

export default AccordionMenu;