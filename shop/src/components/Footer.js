import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full h-full bg-black p-5 mt-10'>
        <div className='w-full flex flex-col text-center md:w-10/12 md:mx-auto md:flex-row md:justify-between md:items-center'>
           <div>
           <Link to='/'>
                <h2 className='uppercase text-teal-600 font-bold'>Gladys</h2>
                <span className='text-sm font-bold text-red-500'>MultiStore</span>
                </Link>
                <span className='text-white block mt-5'>Your Favorite Store</span>
           </div>
           <div className='flex text-white gap-2 mx-auto text-xs mb-5 mt-2 item-center md:justify-between md:gap-10 '>
            <div className='flex flex-col gap-5'>
            <Link className='text-sm' to='/'>Home</Link>
            <Link className='text-sm' to='/'>Home</Link>
            <Link className='text-sm' to='/'>Home</Link>
          
            </div>
           <div className='flex flex-col gap-5'>
            <Link className='text-sm' to='/products'>Products</Link>
            <Link className='text-sm' to='/cart'>Cart</Link>
            <Link className='text-sm' to='/'>Products</Link>
           
           </div>
           </div>
           <div className='text-white'>
            <h1 className='text-sm'>@2023 Gladys Store. 
            <span className='block mt-5'>All rights reserved</span></h1>
           </div>
        </div>
    </div>
  )
}

export default Footer