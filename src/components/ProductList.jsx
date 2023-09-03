import ProductCard from './ProductCard'

const ProductList = ({products}) => {


    return (

        <div className='container-fluid prod-display-cont'>
            {
                products.map(item =>{
                    return (
                        <ProductCard product={item} key={item.id}/>
                    )
                })


            }
        </div>
    )
}

export default ProductList