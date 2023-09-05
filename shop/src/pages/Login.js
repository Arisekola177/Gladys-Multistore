import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import google from '../assets/images/SignInGoogle.png'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { addUser, removeUser } from '../redux/gladysSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = getAuth();
  const provider = new GoogleAuthProvider()

  const handleGoogleLogin = (e) => {
    e.preventDefault()
    signInWithPopup(auth, provider).then((result) => {
     
      const user = result.user;
    dispatch(addUser({
      id: user.id,
      name: user.displayName,
      email:user.email,
      image: user.photoURL
    })
    )
    setTimeout(() => {
     navigate('/')
    }, 1500)
    }).catch((error) => {
     console.log(error)
    });
  
  }

  const handleSignOut = () => {
    signOut(auth).then(() => {
      toast.success('Log Out Successfully!');
      dispatch(removeUser())
      setTimeout(() => {
        navigate('/')
       }, 1500)
    }).catch((error) => {
      console.log(error)
    })
  }
  return (
    <div className=' w-full flex flex-col justify-center items-center gap-10 py-20'>
        
       <div className='flex justify-center items-center gap-10 '>
        <div onClick={handleGoogleLogin} className='text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md  flex justify-center items-center gap-2 hover:border-blue-600 cursor-pointer duration-300'>
        <img  className='w-8' src={google} alt='google' />
        <span className='text-sm text-gray-600'>Sign in with Google </span>
        </div>
            <button onClick={handleSignOut} className='bg-black text-white text-base py-2 px-8 tracking-wide rounded-md hover:bg-gray-800 cursor-pointer'>Sign out</button>
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

export default Login