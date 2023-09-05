
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { addToCart } from '../redux/gladysSlice';
import { useDispatch } from 'react-redux';
import { FaCartPlus } from 'react-icons/fa';

const Homeproducts = ({item}) => {
   const navigate = useNavigate();
   const dispatch = useDispatch()
   const id = item.productName;

   const handleDetails = () => {
      navigate(`/product/${id}`, {
          state:{
              item: item
          }
      })
     
  }
  
  return ( 
    <div>
         <div className='w-64 px-3 py-2 shadow-lg rounded-md cursor-pointer mx-auto md:w-60 lg:w-64 '>
              <img className='border-[1px] mb-5 h-56 w-full py-1 px-3 shadow-lg hover:transform hover:scale-95' onClick={handleDetails}  src={item.imgUrl} alt='chair' />
           <div className='p-2 flex justify-between items-center'>
              <p className=' font-semibold text-sm'>{item.productName}</p>
               <p className='font-semibold text-sm'>N {item.price}</p>
            </div>
        <div className='p-2 flex justify-between items-center'>
               <p className='text-red-500 font-normal'>category: {item.category}</p>
            <button className='py-1 px-4 text-white text-sm hover:bg-teal-500 rounded-full duration-300' onClick={() => dispatch(addToCart({
                   id: item.id,
                   title: item.productName,
                   image: item.imgUrl,
                  price: item.price,
                  quantity: 1,
                   description: item.description
                  })) & toast.success(`${item.productName} is added`)}><FaCartPlus className='text-black text-2xl' /></button>
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

export default Homeproducts