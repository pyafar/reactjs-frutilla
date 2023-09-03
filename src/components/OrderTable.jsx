import { useContext, useState } from 'react';
import { OrderContext } from '../components/context/OrderContext';
import { Link } from 'react-router-dom';


const OrderTable = () => {

    const { order, addProduct, removeProduct, clear, orderTotal, priceTotal } = useContext(OrderContext);


    return (
        <>
            <h2>TU ORDEN</h2>
            <hr className="dividers" />
            <div className='container'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope='col'className='table-titles'>Producto</th>
                            <th scope='col'className='table-titles'>Nombre</th>
                            <th scope='col' className='text-center table-titles'>Cantidad</th>
                            <th scope='col' className='text-center table-titles'>Precio</th>
                            <td scope='col' className='text-center table-titles'>&nbsp;</td>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            order.map(item => (
                                <tr key={item.id}>
                                    <td className='align-middle'><img className=' table-img' src={`/img/${item.image}`} alt={item.title} width={64} /></td>
                                    <td className='text-start align-middle table-content'>{item.title}</td>
                                    <td className='text-center align-middle table-content'>{item.quantity}</td>
                                    <td className='text-center align-middle table-content'>${item.quantity * item.price}</td>
                                    <td className='align-middle'>
                                        <button className='trashcan-button' onClick={() => { removeProduct(item.id) }} title='Eliminar producto'><i className='fas fa-trash'></i></button>
                                    </td>
                                </tr>

                            ))
                        }

                        <tr>
                            <td colSpan={2}>&nbsp;</td>
                            <td className="text-center table-content">Total</td>
                            <td className="text-center table-titles"><b>${priceTotal()}</b></td>
                            <td colSpan={2}>&nbsp;</td>
                        </tr>
                        <tr>
                            <th scope="col" className='text-start th-links-border' colSpan={2}>
                                <Link onClick={clear} className='links-btn table-links' title='Vaciar carrito'>Vaciar Carrito</Link>
                            </th>
                            <th scope="col" className='text-end th-links-border' colSpan={3}>
                                <Link to={'/checkout'} className='links-btn table-links' title='Finalizar compra'>Finalizar Compra</Link>
                            </th>
                        </tr>
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default OrderTable