import React from 'react'
import { useParams } from 'react-router-dom'
import ProductListContainer from '../components/containers/ProductListContainer'

const Category = () => {
  const { categoryName } = useParams();

  //Esta vista va a recibir todos los productos que coincidan con determinada categoría
  return (
    <div>
      <div>
  
          {
          categoryName !== "all" ?
          <h2>{categoryName}</h2>
          :
          <h2>Todos los productos</h2>
          }

        <hr className='dividers' />
      </div>
      <ProductListContainer />
    </div>
  )
}

export default Category