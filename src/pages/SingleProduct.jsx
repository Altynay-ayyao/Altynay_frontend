import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'; // to access the dynamic params from the URL
import { customFetch } from '../utils';

const SingleProduct = () => {
  const [product, setProduct] = useState(null); // state to keep the fetched product data
  const [loading, setLoading] = useState(true); // state to indicate loading status
  const [error, setError] = useState(null); // state to handle any errors

  const { id } = useParams(); // this assumes you're using react-router and your route has a dynamic segment like "/product/:id"

  useEffect(() => {
    const fetchData = async () => {
      try {

        let response = await fetch(`https://api.escuelajs.co/api/v1/products?${id}`)
        let data = await response.json();
       

      } catch (error) {
        console.error("An error occurred while fetching the data: ", error);
      } finally {
        setLoading(false);
      }

    };

    
    setProduct(fetchData())
   
  }, [id])


  if (loading) {
    return <p>Loading...</p>; // or any loading spinner
  }

  if (error) {
    return <p>Error loading product: {error}</p>;
  }

  if (!product) {
    return <p>No product found.</p>;
  }

  const {images,title,price,description} = product;

  return (
  <section>
    <div className="text-md breadcrumbs">
      <ul>
        <li>
          <Link to='/'>Home</Link>
          <Link to='/products'>Pruducts</Link>
        </li>
      </ul>
    </div>
  </section>
  );
};

export default SingleProduct;
