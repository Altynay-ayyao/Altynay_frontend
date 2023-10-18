import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'; // to access the dynamic params from the URL
import { productionUrl } from '../utils';

const SingleProduct = () => {
  const [product, setProduct] = useState(null); // state to keep the fetched product data
  const [loading, setLoading] = useState(true); // state to indicate loading status
  const [error, setError] = useState(null); // state to handle any errors

  const { id } = useParams(); // this assumes you're using react-router and your route has a dynamic segment like "/product/:id"

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Adjusting the request URL to properly use the ID
        let response = await fetch(`${productionUrl}/products/${id}`);
        if (!response.ok) {
          throw new Error(`An error occurred: ${response.statusText}`);
        }

        let data = await response.json();
        setProduct(data); // Directly setting the state with the fetched data

      } catch (error) {
        console.error("An error occurred while fetching the data: ", error);
        setError(error.message); // Saving any error messages
      } finally {
        setLoading(false); // Indicating that loading has finished
      }
    };

    fetchData(); // Directly calling the async function without trying to assign its return value
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>No product found</p>;




  const { images, title, price, description } = product;

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to='/'>Home</Link>
            <span> / </span>
            <Link to='/products'>Products</Link>
            <span> / {title}</span> {/* Showing product title */}
          </li>
        </ul>
      </div>
      <div className='mt-6 grid gap-y-8 lg:grid-col-2 lg:gap-x-16'>
        {/*product data here */}
        <img src={images} alt={title} className='w-96 h-96 object-cover'/>
        {/* PRODUCT */}
        <div>
          <h1 className='capitalize text-3xl font-bold'>{title}</h1>
          <p className='mt-3 text-2xl font-bold'>{price}€</p>
          <p className='mt-6 leading-8'>{description}</p>
        </div>
     
       
      </div>
    </section>
  );
};

export default SingleProduct;
