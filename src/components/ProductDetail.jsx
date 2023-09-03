// import { NavLink } from "react-router-dom"
import { useContext } from 'react';
import ItemCount from "./ItemCount"
import { OrderContext } from "./context/OrderContext";

const ProductDetail = ({ product }) => {

    const { addProduct } = useContext(OrderContext);

    const onAdd = (quantity) => {
        addProduct(product, quantity);

    };

    return (

        <div className="card detail-container">
            <div className="detail-img">
                <img src={`/img/${product.image}`} className="card-img-top" alt={product.title} />
            </div>
            <div className="card-body detail-body">
                <h3 className="detail-title">{product.title}</h3>
                <p className="card-text detail-description">{product.description}</p>
                <hr className="dividers" />
                <h5 className="card-title detail-price">Precio por unidad: ${product.price}</h5>
                <hr className="dividers" />
                <ItemCount
                    productStock={product.stock}
                    onAdd={onAdd}
                />
            </div>


        </div>

    )

}

export default ProductDetail