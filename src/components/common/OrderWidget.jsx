import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { OrderContext } from '../context/OrderContext'

const OrderWidget = () => {
    const {orderTotal} = useContext(OrderContext);

    return (

        orderTotal() ?

        <NavLink className="position-absolut nav-link" to={"/order"}>
            <i className='fas fa-box-open'></i>
            <span className="position-relative top-0 end-0 translate-middle badge rounded-pill bg-danger">{orderTotal()}</span>
        </NavLink>
        :
        ''
    )
}

export default OrderWidget