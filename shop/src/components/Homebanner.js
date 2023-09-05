import React from 'react'
import hero from '../assets/images/hero-img.png'
import { Link } from 'react-router-dom';

const Homebanner = () => {
  return (
    <div className='w-full h-full border-b-[1px] shadow-lg'>
        <div className='flex flex-col items-center md:flex-row md:justify-between md:w-10/12 md:mx-auto md:py-6'>
            <div className='mb-5 md:mb-0'>
                <h1 className='text-teal-500 font-semibold text-2xl text-center mt-5 mb-5 md:text-3xl md:mb-8'>Welcome to Gladys MultiStore</h1>
                <p className='font-extralight text-red-500 text-lg text-center mb-5 md:mb-8 md:text-xl '>Your One Store Shop For All Your Household Needs</p>
                <div className='text-center'>
                 <Link to='/products'>
                <button className='p-3 bg-teal-500 text-white rounded-md hover:translate-x-3 hover:translate-y-3 duration-300'>Shop Now</button>
                </Link>
                </div>
            </div>
            <div>
                 <img src={hero} alt='hero' />
            </div>
        </div>
    </div>
  )
}

export default Homebanner