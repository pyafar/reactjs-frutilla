import { NavLink } from "react-router-dom";
import { useState } from "react";
import OrderWidget from "./OrderWidget";
import AccordionMenu from "./../AccordionMenu";

const NavBar = () => {

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 160) {
            setColor(true);
        } else {
            setColor(false);
        }
    }

    const [isProductMenuOpen, setProductMenuOpen] = useState(false);

    const toggleProductMenu = () => {
        setProductMenuOpen(!isProductMenuOpen);
    };

    window.addEventListener('scroll', changeColor);

    return (
        <div className={color ? "main-menu-bg main-menu sticky-top " : "main-menu sticky-top"}>

            {/* Mobile */}
            <div className="mobile-menu">
                <div className="menu-links">

                    <NavLink className="nav-item" data-bs-toggle="offcanvas" to="#sidebarMenu" role="button" aria-controls="sidebarMenu">
                        <i className="fas fa-bars"></i> MENÚ
                    </NavLink>

                    <div className="offcanvas offcanvas-start" tabindex="-1" id="sidebarMenu" aria-labelledby="sidebarMenu">
                        <div className="offcanvas-header">
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>

                        <div className="offcanvas-body">
                            <ul className="navbar-nav menu-links">
                                <li className="nav-item" data-bs-dismiss="offcanvas">
                                    <NavLink className="nav-link" to="/" >INICIO</NavLink>
                                </li>

                                <button className="nav-link menu-links" onClick={toggleProductMenu}>PRODUCTOS {isProductMenuOpen ? '▲' : '▼'}</button>
                                {isProductMenuOpen && (

                                    <AccordionMenu toggleProductMenu={toggleProductMenu} />

                                )}

                                <li className="nav-item" data-bs-dismiss="offcanvas">
                                    <NavLink className="nav-link" to="/about">SOBRE MI</NavLink>
                                </li>
                                <li className="nav-item" data-bs-dismiss="offcanvas">
                                    <NavLink className="nav-link" to="/contact">CONTACTO</NavLink>
                                </li>
                                <li className="nav-item" data-bs-dismiss="offcanvas">
                                    <NavLink className="nav-link" to="/cart">CARRITO</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            {/* Large Screens */}
            <div className="menu-large">
                <ul className="navbar-nav menu-links">
                    <li className="nav-item">
                        <NavLink className="nav-link" to={"/"}>INICIO</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to={"#"} role="button" data-bs-toggle="dropdown" aria-expanded="false">PRODUCTOS</NavLink>
                        <ul class="dropdown-menu">
                            <li>
                                <NavLink className="dropdown-item" to="/category/all">TODOS LOS PRODUCTOS</NavLink>
                            </li>
                            <li>
                                <NavLink className="dropdown-item" to="/category/tortas">TORTAS</NavLink>
                            </li>
                            <li>
                                <NavLink className="dropdown-item" to="/category/cupcakes">CUPCAKES</NavLink>
                            </li>
                            <li>
                                <NavLink className="dropdown-item" to="/category/cuadrados">CUADRADOS</NavLink>
                            </li>
                            <li>
                                <NavLink className="dropdown-item" to="/category/alfajores">ALFAJORES</NavLink>
                            </li>

                        </ul>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={"/about"}>SOBRE MI</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={"/contact"}>CONTACTO</NavLink>
                    </li>
                    <li className="nav-item">
                        <OrderWidget />
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default NavBar