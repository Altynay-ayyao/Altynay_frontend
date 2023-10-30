import React from 'react'
import { FormInput,SubmitBtn } from '../components'
import {Form,Link, json, redirect} from 'react-router-dom'
import { customFetch, productionUrl } from '../utils'
import { toast } from 'react-toastify'

export const action = async (request)=>{
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  try {
     const response = await productionUrl.post('/users/')
  } catch (error){

  }
  return null;
}

const Register = () => {
  return (
    <section className='h-screen grid place-items-center'>
     <Form 
     method='POST' 
     className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
      <h4 className='text-center text-3xl font-bold'>
        Register
      </h4>
      <FormInput type='text' label='username' name='username' defaultValue="Nicolas"/>
      <FormInput type='email' label='email' name='email' defaultValue="nico@gmail.com"/>
      <FormInput type='password' label='password' name='password' defaultValue="1234"/>
      <div className="mt-4">
        <SubmitBtn text='register'/>
      </div>
      <p className='text-center'>
         Already a member?
          <Link to='/login'
            className='ml-2 link link-hover link-primary capitalize'>
            Login
          </Link>
        </p>
     </Form>
    </section>
  )
}

export default Register

/*
const url = 'https://api.escuelajs.co/api/v1/users/';

    const userData = {
        name: "Nicolas",
        email: "nico@gmail.com",
        password: "1234",
        avatar: "https://api.lorem.space/image/face?w=640&h=480&r=867",
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonResponse = await response.json();
        console.log('User created:', jsonResponse);
        toast.success(`You have successfully registered,${jsonResponse.name}`)
        return jsonResponse;
    } catch (error) {
        console.error('Error creating user:', error);
        toast.error('please double check your credentials')
    }
*/