import React from 'react'
import Homebanner from '../components/Homebanner'
import Homeproducts from '../components/Homeproducts'
import Bestselling from '../components/Bestselling'
import landing from '../assets/data/landing'
import bestselling from '../assets/data/bestselling'



const Home = () => {
  return (
    <div className=''>
        <Homebanner />
        <div className='mt-10  border-b shadow-md'>
          <h1 className='text-center uppercase text-xl md:text-3xl'>Our Products</h1>
        <div className='w-full grid grid-cols-1 items-center mt-5 mb-10 lg:max-w-screen-lg lg:mx-auto lg:mt-10 md:px-2 md:grid-cols-3 lg:gap-10 lg:grid-cols-4 gap-4'>
         
        {
          landing.map((item) => (
            <Homeproducts item={item} key={item.id}  />
          ))
        }
        </div>
        </div>
        
        <div className='mt-10 '>
        <h1 className='text-center uppercase text-xl md:text-3xl'>Best Sellers</h1>
        <div className='w-full grid grid-cols-1 items-center mt-5 mb-10 lg:w-lg:max-w-screen-lg lg:mx-auto lg:mt-10 md:px-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-10 gap-4 '>
         
        {
          bestselling.map((best) => (
            <Bestselling best={best} key={best.id} />
          ))
        }
        
        </div>
        
        </div>
        
    </div>
  )
}

export default Home