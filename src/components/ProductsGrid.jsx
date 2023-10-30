import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productionUrl } from '../utils';

import React from 'react'

const ProductsGrid = () => {

    const [products, setProducts] = useState([]);
    


    useEffect(() => {

        const fetchData = async () => {
            try {
                let response = await fetch(`${productionUrl}/products?featured=true`);
                let data = await response.json();
              
                setProducts(data); 
            } catch (error) {
                console.error("An error occurred while fetching the data: ", error);
            }
        }; 
           fetchData();
       
    }, []);
  

    return (
        <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
          
        {products.map((product)=>{
            const {title,price,images} = product;
           
            return <Link key={product.id} to={`/products/${product.id}`} className='card w-full shadow-xl hover:shadow-2xl transition duration-300'>
                <figure className='px-4 pt-4'>
                 <img 
                 src={images} 
                 alt={title} 
                 className='rounded-xl h-64 md:h-48 w-full object-cover'/>
                <div className='card-body items-center text-center'>
                <h2 className='card-title capitalize tracking-wider'>{title}</h2>
                <span className='text-primary'>{price}€</span>
                </div>
                </figure>
            </Link>
        })} */
        
        </div>
    );
};

export default ProductsGrid;
