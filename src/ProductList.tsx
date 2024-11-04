import React from 'react'
import { useState, useEffect } from 'react'


const ProductList = ({category}: {category: string}) => {
    const [product, setProduct] = useState<String[]>([]);

    useEffect(()=>{
        console.log('Fetching products', category);
        setProduct(['Clothing','Household']);
    },[category])

    return (
        <div>ProductList</div>
    )
}

export default ProductList
