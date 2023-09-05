import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation} from 'react-router-dom'
import { addToCart } from '../redux/gladysSlice'
import { ToastContainer, toast } from 'react-toastify';

const ProductDetails = () => {
  const dispatch = useDispatch()
  const [details, setDetails]= useState({})
  const [baseqty, setBaseQty] = useState(1)
   const location = useLocation();
   useEffect(() => {
     setDetails(location.state.item)
   },[location.state.item])
  return (
    <div className='w-full h-full'>
          {
            details && <div className='w-full flex flex-col text-center py-10  md:w-10/12 md:mx-auto md:flex-row md:justify-between md:items-center'> 
               <div className='w-full md:w-2/4'>
               <img className='' src={details.imgUrl} alt='details' />
               </div>
               <div className='w-full md:w-2/4'> 
                 <h1 className='text-3xl font-semibold mb-5'>{details.productName}</h1> 
                     <p className='text-2xl font-bold mb-5'>N {details.price}</p>
                     <p className='mb-5'>{details.description}</p>
                     <p className='mb-5'>Category: {details.category}</p>
                     <p className='mb-5'>Rating: {details.avgRating}</p>
                     <div className='flex gap-5 items-center border-[1px] bg-teal-400 border-black  mx-auto w-52'>
                      <div className=' border-[1px] border-black p-1 bg-white flex justify-between items-center w-24'>
                      <button onClick={() => setBaseQty(baseqty === 1? baseqty = 1 : baseqty - 1)} className='hover:bg-red-400 hover:text-yellow-800 w-8 rounded-md '>-</button>
                      
                      <span className=''>{baseqty}</span>
                      <button onClick={() => setBaseQty(baseqty + 1)} className='hover:bg-red-400 hover:text-yellow-800 w-8 rounded-md '>+</button>
                      </div>
                      <button onClick={() => dispatch(addToCart({
                         id: details.id,
                         title: details.productName,
                         image: details.imgUrl,
                         price: details.price,
                         quantity: baseqty,
                         description: details.description
                      })) & toast.success(`${details.productName} is added`)}  className= 'text-white '>Add to Cart</button>
                     </div>
               </div>
            </div>
          }
          <ToastContainer
          position='top-left'
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
          />
    </div>
  )
}

export default ProductDetails