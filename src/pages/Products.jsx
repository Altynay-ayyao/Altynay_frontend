import React from 'react'
import { Filters, ProductsContainer} from '../components';
import { customFetch } from '../utils';

const url = '/products'


export const loader = async({request})=>{
  const response = await customFetch(url);
  const products = response.data;
  const meta = response.data
  console.log(response)
  return null;
}

const Products = () => {
  return (
  <>
  <Filters/>
  <ProductsContainer/>
 
  </>
  )
}

export default Products