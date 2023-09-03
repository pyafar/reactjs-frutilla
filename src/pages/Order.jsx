import {useContext} from 'react';
import { OrderContext } from '../components/context/OrderContext';
import { NavLink } from 'react-router-dom';
import OrderTable from '../components/OrderTable';

const Order = () => {

  const {orderTotal} = useContext(OrderContext);

  if (orderTotal() === 0){
    return (
      <>
      <br />
      <br />
      <h3 className='no-order'>Todavía no agregaste ningún producto a tu orden</h3>
      <br />
      <h4 className='order-invite'>Podés seguir mirando nuestros productos en el siguiente enlace:</h4>
      <br />
      <div className='order-navlink-cont'>
      <NavLink className='order-navlink' to={'/category/all'}>Seguir navegando</NavLink>
      </div>
      </>
    )
  }


  return (
   <OrderTable/>
  )
}

export default Order;