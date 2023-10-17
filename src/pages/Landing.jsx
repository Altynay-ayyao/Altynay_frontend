import React from 'react';
import { FeaturedProducts, Hero } from '../components';
import { customFetch } from '../utils';

const url = '?featured=true'
export const loader = async ()=>{
  const response = await customFetch(url);
  const products = response.data;

  return {products}
 
}


const Landing = () => {
  return (
    <>  
    <Hero/>   
    <FeaturedProducts/>
    </>
  )
}

export default Landing