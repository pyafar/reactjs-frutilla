import React, { createContext, useState } from 'react';

export const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {

    const [order, setOrder] = useState([]);

    const addProduct = (product, quantity) => {
        if(isInorder(product.id)){
            let findProduct = order.findIndex(e => e.id === product.id);
            order[findProduct].quantity += quantity;
            return setOrder([...order]);
        }else{
            return setOrder([...order, {...product, quantity : quantity}]);
        }
    };

    const removeProduct = (id) => {
        const products = order.filter(product => product.id !== id);
        return setOrder(products);        
    };

    const clear = ()=> setOrder([]);

    const isInorder = (id)=>{
        return order.some(product => product.id === id);
    };

    const orderTotal =()=>{
        return order.reduce((total, product)=> total += product.quantity, 0)
    };

    const priceTotal =()=>{
        return order.reduce((total, product)=> total += product.quantity * product.price, 0)
    };

    return (

        <OrderContext.Provider value={{order, addProduct, removeProduct, clear, orderTotal, priceTotal}}>
            { children }
        </OrderContext.Provider>

    );
};

export default OrderContextProvider;