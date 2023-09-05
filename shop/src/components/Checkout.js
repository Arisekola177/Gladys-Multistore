import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { PaystackButton } from 'react-paystack'
import { resetCart } from '../redux/gladysSlice';
import { useDispatch } from 'react-redux'





const Checkout = ({productData, userInfo}) => {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [totalAmt, setTotalAmt] = useState('')
  const [payNow, setPayNow] = useState(false)
 

   useEffect(()=> {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity
      return price;
    })
     setTotalAmt(price.toFixed(2))
   },[productData])

    const handleCheckout = () => {
      if(userInfo){
        setPayNow(true)
      }else{
        toast.error('Pls Log In To Checkout')
        setTimeout(() => {
          navigate('/login')
        }, 3000)
        
      } 
    }
    const handlePaymentSuccess = () => {
      navigate('/')
      dispatch(resetCart())
      alert('Thank you for shopping with us!!')
    }

   
  return (
    <div className='border-[2px] mt-5 rounded-md w-full '>
        <div className='p-4'>
        <h1 className='mb-5 font-semibold'>Cart total</h1>
             <p  className='flex justify-between items-center gap-5 mb-2'> Amount: <span className='font-bold'>N {totalAmt}</span></p>
             <p className=' mb-2 flex justify-between'>Delivery: <span className='text-xs'>Free delivery for total purchases more than N10,000</span></p>
              <p className='border-b border-[2px] shadow-lg mb-2'></p>
           
             <p className='flex justify-between items-center mb-2 gap-5'>Total Amount: <span className='font-bold'>N {totalAmt}</span></p>
             <div className='text-center'>
             <button onClick={handleCheckout} className=' py-1 w-full  px-10 rounded-md text-sm bg-black text-white'>Checkout</button>
             {payNow && <div className='text-center bg-teal-400  text-white py-1 rounded-md mt-5'>
                 <PaystackButton
                  email = {userInfo.email}
                  name= {userInfo.name}
                  amount = {totalAmt * 100}
                  publicKey = "pk_test_f8535123eba686db0b749aa14435af41fb36f858"
                  text= "Pay To Gladys"
                  onSuccess={handlePaymentSuccess}
                  
                 /> 
              
                 </div>
             }
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

export default Checkout