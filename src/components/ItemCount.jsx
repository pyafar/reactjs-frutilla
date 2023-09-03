import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const ItemCount = ({ productStock, onAdd }) => {
  const [counter, setCounter] = useState(1);
  const [stock, setStock] = useState(productStock);
  const [sold, setSold] = useState(false);

  const stockAdd = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const stockRest = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  useEffect(() => {
    setStock(productStock);
  }, [productStock]);

  const addToCart = (quantity) => {
    setStock(productStock - quantity);
    setCounter(0);
    setSold(true);
    onAdd(quantity);
  };

  return (
    <div className="itemCount-cont">
      {!sold && (
        <div className="counters">
          <button type="button" className="btn itemcount-btn" onClick={stockRest}>
            -
          </button>
          <button type="button" className="btn itemcount-btn" disabled>
            {counter}
          </button>
          <button type="button" className="btn itemcount-btn" onClick={stockAdd}>
            +
          </button>
        </div>
      )}
      <div className="add-btn">
        {counter > 0 && !sold ? (
          <button className="btn place-order" onClick={() => addToCart(counter)}>
            Sumar a la orden
          </button>
        ) : null}
        {sold && (
          <>
            <NavLink to="/order" className="btn place-order">
              Revisar orden
            </NavLink>
            <NavLink to="/category/all" className="btn place-order">
              Seguir comprando
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default ItemCount;
