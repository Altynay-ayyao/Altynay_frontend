import React from 'react'
import { useState, useEffect } from 'react'
import ProductsGrid from './ProductsGrid'
import ProductsList from './ProductsList'
import { productionUrl } from '../utils'



const ProductsContainer = () => {
    return (
        <>
        <ProductsGrid />
        </>
    )
}

export default ProductsContainer