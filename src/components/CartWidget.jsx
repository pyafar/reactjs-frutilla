import React from 'react'
import { NavLink } from 'react-router-dom'

const CartWidget = () => {
    return (
        <NavLink className="position-absolut nav-link" to={"/cart"}>
            <i className='fas fa-box-open'></i>
            <span className="position-relative top-0 end-0 translate-middle badge rounded-pill bg-danger">1</span>
        </NavLink>
    )
}

export default CartWidget