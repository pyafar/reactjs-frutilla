import { NavLink } from "react-router-dom"

const ProductCard = ({ product }) => {
  return (
      <NavLink to={`/detail/${product.id}`} className="text-decoration-none text-dark">
        <div className="card card-style">
          <img src={`/img/${product.image}`} className="card-img-top" alt={product.title} />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>

          </div>
        </div>
      </NavLink>
  )
}

export default ProductCard