import React from 'react'
import { FaCartPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router-dom'
import { addToCart } from '../redux/gladysSlice';
import { ToastContainer, toast } from 'react-toastify';

const ProductCard = ({product}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const id = product.productName;
    

    const handleDetails = () => {
        navigate(`/product/${id}`, {
            state:{
                item: product
            }
        })
    }
   
  return (
    <div className=''>
<div className=' w-64 shadow-lg p-3 rounded-md cursor-pointer mx-auto  '>
     <img className='border-[1px] mb-5 shadow-lg hover:transform hover:scale-95' onClick={handleDetails} src={product.imgUrl} alt='chair' />
<div className='p-2 flex justify-between items-center'>
  <p className=' font-semibold text-sm'>{product.productName}</p>
  <p className='font-semibold text-sm'>N {product.price}</p>
</div>
<div className='p-2 flex justify-between items-center'>
  <p className='text-red-500 font-normal'>category: {product.category}</p>
  <button className='py-1 px-4 text-white text-sm hover:bg-teal-500 rounded-full duration-300' onClick={() => dispatch(addToCart({
    id: product.id,
    title: product.productName,
    image: product.imgUrl,
    price: product.price,
    quantity: 1,
    description: product.description
  })) & toast.success(`${product.productName} is added`)}><FaCartPlus className='text-black text-2xl' /></button>
</div>

</div>
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

export default ProductCard


