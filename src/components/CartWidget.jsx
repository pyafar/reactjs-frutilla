import React from 'react'
import { NavLink } from 'react-router-dom'

const CartWidget = () => {
    return (
        <NavLink className="nav-link" to={"/cart"}>
            <i class='fas fa-shopping-cart'></i>
        </NavLink>
    )
}

export default CartWidget