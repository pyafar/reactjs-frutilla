import { NavLink } from "react-router-dom"

const ProductCard = ({product}) => {
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
              <img src={`/img/${product.image}`} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <NavLink to={`/detail/${product.id}`} className="btn btn-primary">Go somewhere</NavLink>
              </div>
            </div>
        </>
    )
}

export default ProductCard