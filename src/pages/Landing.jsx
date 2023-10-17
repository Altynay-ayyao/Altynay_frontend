import React from 'react';
import { Hero } from '../components';
import { customFetch } from '../utils';

const url = '?featured=true'
export const loader = async ()=>{
  const response = await customFetch(url)
  console.log(response)
  return response.data;
  return null;
}


const Landing = () => {
  return (
    <>  
    <Hero/>   
    </>
  )
}

export default Landing