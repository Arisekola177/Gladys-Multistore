
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux'
import CartItems from '../components/CartItems'
import Checkout from '../components/Checkout'
import {FaArrowLeft} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { resetCart } from '../redux/gladysSlice'

const Cart = () => {
  const productData = useSelector((state) => state.gladys.productData) 
  const userInfo = useSelector((state) => state.gladys.userInfo) 
  
  const dispatch = useDispatch()
  return (
    <div className='w-full h-full'>
        {productData.length === 0 ? (
          <p className='text-center text-3xl font-semibold mt-5 text-red-500'>Cart is Empty!!!</p>
        ) : (
             <>
               <div className='w-full flex flex-col mt-10 lg:max-w-screen-lg md:mx-auto lg:flex-row md:justify-between md:items-center md:gap-5'>
                     <div className='w-full gap-2 px-6 lg:w-2/4 md:flex md:justify-between md:gap-10 md:items-center'>
                       <CartItems productData={productData} />
                    </div>
                    <div className='w-full p-2 lg:w-2/6'>
                      <Checkout productData={productData} userInfo={userInfo}  />
                    </div>
                </div>
               <div className='ml-20 mt-10 w-32'>
                  <Link  className='text-gray-800 text-sm flex gap-2 items-center hover:bg-teal-400 rounded-md hover:py-1 hover:px-4 hover:text-white hover:scale-95 hover:duration-300' to='/products'>
                     <FaArrowLeft />
                     <h1> Shop More</h1>
                    </Link>
                </div>
      <div onClick={() => dispatch(resetCart()) & toast.error("Your Cart is Empty")}>
      <button className='ml-20 mt-10 w-32 text-sm bg-red-700 text-center text-white py-1 px-2 flex gap-2 items-center hover:bg-red-400 rounded-md hover:py-1 hover:px-4 hover:scale-95 hover:duration-300'  >Reset Cart</button>
      </div>
             </>
          )}
      
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

export default Cart;