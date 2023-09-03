import { useParams } from "react-router-dom"
import ProductDetail from "../components/ProductDetail";
import { useEffect, useState } from "react";
import { getProductId } from "../helpers/getProductId";

const Detail = () => {

  const [product, setProduct] = useState({})
  const { id } = useParams();

  useEffect(() => {
    const promise = new Promise((resolve) => {
      const foundProduct = getProductId(parseInt(id))
      resolve(foundProduct);
    });
    promise.then((data) => {
      setProduct(data)
    })
  }, [id])



  return (

    <>
      <hr className='dividers' />
      <div className="container card-detail-cont">
        <ProductDetail product={product} key={product.id} />
      </div>
    </>
  )
}

export default Detail