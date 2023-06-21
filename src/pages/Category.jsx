import React from 'react'
import { useParams } from 'react-router-dom'
import ProductListContainer from '../components/containers/ProductListContainer'

const Category = () => {
    const {id} = useParams();

  return (
    <div>
        <h1>CATEGORÍAS</h1>
        <ProductListContainer id = {id}/>
    </div>
  )
}

export default Category