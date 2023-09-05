
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { addToCart } from '../redux/gladysSlice';
import { useDispatch } from 'react-redux';
import { FaCartPlus } from 'react-icons/fa'

const Bestselling = ({best}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const id = best.productName;

  const handleDetails = () => {
    navigate(`/product/${id}`, {
        state:{
            item: best
        }
    })
   
}
  return (
 
        
        <div className=''  >
                    <div  className='w-64 border-red-500 px-3 py-2 shadow-lg rounded-md cursor-pointer mx-auto md:w-60 lg:w-64'>
                            <img className='border-[1px] mb-5 h-64 w-full shadow-lg hover:transform hover:scale-95' onClick={handleDetails}  src={best.imgUrl} alt='product' />
                            <div className='p-2 flex justify-between items-center'>
                        <p className=' font-semibold text-sm'>{best.productName}</p>
                        <p className='font-semibold text-sm'>N {best.price}</p>
                      </div>
                      <div className='p-2 flex justify-between items-center'>
                          <p className='text-red-500 font-normal'>category: {best.category}</p>
                          <button className=' py-1 px-4 text-white text-xs hover:bg-teal-400 rounded-full duration-300'  onClick={() => dispatch(addToCart({
                   id: best.id,
                   title: best.productName,
                   image: best.imgUrl,
                  price: best.price,
                  quantity: 1,
                   description: best.description
                  })) & toast.success(`${best.productName} is added`)}><FaCartPlus className='text-black text-2xl' /></button> 
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

export default Bestselling