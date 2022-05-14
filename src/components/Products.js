import React, { useState , useEffect } from 'react'

export const Products = () => {
  const [products, selectProducts] = useState([])
  
  useEffect(
    () => {
        fetch("http://localhost:8088/products?_expand=productType")
            .then(res => res.json())
            .then(
                (productsArray) => {
                    selectProducts(productsArray)
                 }
            )
    },
    []
)
  
    return (
    <>
    {
        products.map(
            (productObj) => {
                    return <h3 key={`product--${productObj.id}`}>{productObj.name}  ({productObj.productType.type})</h3>
            }
        )
    }

    </>
  )
}
