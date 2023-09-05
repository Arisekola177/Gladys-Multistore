import React from 'react'
import products from '../assets/data/products'
import ProductCard from './ProductCard'

const Products = () => {
  
  return (
    <div className='w-full'>
      {/* <div className='hidden lg:block absolute top-16 px-2 w-1/6 mx-auto'>
          <h2 className='text-center text-md mb-5  font-mono'>Category</h2>
          <p className='text-xs mb-2 cursor-pointer border-[1px] border-teal-400 w-40 py-1 px-2 rounded-md bg-teal-400 text-white hover:scale-90 duration-300'>Sofa</p>
          <p className='text-xs mb-2 cursor-pointer  border-[1px] border-teal-400 w-40 py-1 px-2 rounded-md bg-teal-400 text-white hover:scale-90 duration-300'>Tables</p>
          < p className='text-xs mb-2 cursor-pointer  border-[1px] border-teal-400 w-40 py-1 px-2 rounded-md bg-teal-400 text-white hover:scale-90 duration-300'>Phones</p>
          <p className='text-xs mb-2 cursor-pointer  border-[1px] border-teal-400 w-40 py-1 px-2 rounded-md bg-teal-400 text-white hover:scale-90 duration-300'>Wireless</p>
          <p className='text-xs mb-2 cursor-pointer  border-[1px] border-teal-400 w-40 py-1 px-2 rounded-md bg-teal-400 text-white hover:scale-90 duration-300'>Watches</p>
      </div> */}
      <div className='w-full lg:max-w-screen-lg lg:mt-5 mx-auto'>
        <div className='text-center flex flex-col items-center justify-center gap-4 md:flex-row'>
          <input className='border-[1px] border-black rounded-md outline-none  lg:w-56 py-1 px-4 ' type='text' placeholder='search' />
          <button className='bg-teal-400 text-md text-white rounded-md py-1 px-4'>search</button>
        </div>
        <div className='w-full grid grid-cols-1 items-center lg:justify-between mt-5  md:mt-10 md:grid-cols-3 lg:grid-cols-4 lg:px-2 gap-6 '>
            {
                products.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))
            }
           
        </div>
        </div>
      
    </div>
  )
}

export default Products