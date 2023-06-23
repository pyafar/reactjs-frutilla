import ProductCard from './ProductCard'

const ProductList = ({products}) => {


    return (

        <div>
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