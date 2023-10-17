import React from 'react';
import { Link } from 'react-router-dom';
import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'
import hero4 from '../assets/hero4.jpg'


const carouselImages = [hero1,hero2,hero3,hero4];


const Hero = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-24 item-center'>
        <div ><h1 className='max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl'>Change, and make difference</h1>
        <p className='mt-8 max-w-xl text-lg leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptatem aliquid sapiente, culpa pariatur eaque a consequuntur debitis aperiam aliquam 
            vel enim provident quis eveniet nam minus iusto blanditiis, 
            vero explicabo.</p>
            <div className="mt-10">
             <Link to='/products' className='btn btn-neutral'>Shop now</Link>
            </div>
        </div>
        <div className='hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box'>
         {carouselImages.map((image)=>{
            return <div key={image} className='carousel-item'>
                <img src={image} className='rounded-box h-full w-80 object-over'/>
            </div>
         })}
        </div>

    </div>
  )
}

export default Hero