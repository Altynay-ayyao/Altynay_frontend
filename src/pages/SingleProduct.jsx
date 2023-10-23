import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'; 
import { productionUrl,generateAmountOptions } from '../utils';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

const SingleProduct = () => {
  const [product, setProduct] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [amount,setAmount] = useState(1);
  const { id } = useParams(); 

  const dispatch = useDispatch();

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


 const handleAmount = (e)=>{
  setAmount(parseInt(e.target.value));
 }


 const { images, title, price, description } = product;
  
const cartProduct = {
  cartID:product.id,
  images,
  title,
  price,
  amount,
  } 




 const addToCart = ()=>{
  dispatch(addItem({product:cartProduct}))
 }


  return (
    <section >
      <div className="text-md breadcrumbs ">
        <ul >
          <li >
            <Link to='/'>Home</Link>
            <span> / </span>
            <Link to='/products'>Products</Link>
            <span> / {title}</span>
          </li>
        </ul>
      </div>
      <div className='mt-6 grid gap-y-8 lg:grid-col-2 lg:gap-x-16'>

        <img src={images} alt={title} className='w-96 h-96 object-cover' />

        <div>
          <h1 className='capitalize text-3xl font-bold'>{title}</h1>
          <p className='mt-3 text-2xl font-bold'>{price}€</p>
          <p className='mt-6 leading-8'>{description}</p>
     
          <div className='form-control w-full max-w-xs'>
            <label className='label' htmlFor='amount'>
              <h4 className='text-md font-medium -tracking-wider capitalize'>
                amount
              </h4>
            </label>
            <select className='select seclect-secondary select-bordered select-md' 
            id="amount" 
            type="number" 
            value={amount} 
            onChange={handleAmount}>
             {generateAmountOptions(10)}
            </select>
          </div>
        
          <div className="mt-10">
            <button className='btn btn-primary btn-md' onClick={addToCart} >Add to bag</button>
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default SingleProduct;
