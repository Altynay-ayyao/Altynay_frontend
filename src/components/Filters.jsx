import React from 'react'
import FormInput from './FormInput'
import {Form,Link} from 'react-router-dom'
import FormSelect from './FormSelect'




const Filters = () => {



  return (
    <Form 
    className='bg-base-200 
    rounded-md px-8 grid 
    gap-x-4 gap-y-8 
    sm:grid-cols-2 md:grid-cols-3 
    lg:grid-cols-4 items-center' >
      {/* SEARCH */}
      <FormInput type='search' label='search product' name='search' size='input-sm'></FormInput>
      {/* CATEGORIES */}
   

      {/* ORDER */}
      
      {/* BUTTONS */}
      <button type='submit' className='btn btn-neutral btn-sm'>search</button>
      <Link to="/products" className='btn btn-accent btn-sm'>
        reset
      </Link>
    </Form>
  )
}

export default Filters