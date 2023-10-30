import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productionUrl } from '../utils';

import React from 'react'

//A component to display products

const ProductsList = () => {

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
        <div className='mt-12 grid gap-y-8'>
          
        {products.map((product)=>{
            const {title,price,images} = product;
           
            return (
                <Link key={product.id} to={`products/${product.id}`} 
                className='p-8 rounded-log flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group'>
                    <figure className='px-4 pt-4'>
                    <img 
                    src={images} 
                    alt={title} 
                    className='h-24 w-24 sm:h32 sm:w-32 object-cover group-hover:scale-100 duration-300 group'/>
                    <div className="ml-0 sm:ml-16">
                        <h3 className='capitalize font-medium text-lg'>{title}</h3>
                        <h4 className='capitalize text-md text-neutral-content'>{price}€</h4>
                    </div>
                    </figure>
                </Link>
            )
        })} 
        
        </div>
    );
};

export default ProductsList;


