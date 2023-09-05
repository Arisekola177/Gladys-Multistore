

import React, { useState } from 'react';
import user from '../assets/images/user-icon.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const productData = useSelector((state) => state.gladys.productData);
  const userInfo = useSelector((state) => state.gladys.userInfo);
  const [isOpen, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!isOpen);
  };

  // fixed top-0 left-0 bg-white z-50

  return (
    <div className="w-full md:h-16 md:border-b-[1px] md:border-black md:shadow-xl  ">
      <div className="w-full p-4 flex md:flex-row justify-between md:items-center md:w-10/12 md:mx-auto">
        <div>
          <Link to="/">
            <h2 className="uppercase text-teal-600 font-bold text-md md:text-normal">
              Gladys
            </h2>
            <span className="hidden md:block text-sm font-bold text-red-500">
              MultiStore
            </span>
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="relative flex justify-between items-center gap-6">
            <Link
              className="text-sm text-slate-400 hover:underline hover:underline-offset-4"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-sm text-slate-400 hover:underline hover:underline-offset-4"
              to="/products"
            >
              Products
            </Link>
            <Link
              className="text-sm text-slate-400 hover:underline hover:underline-offset-4 relative"
              to="/cart"
            >
              Cart
              <div className="absolute top-0 left-4">
                <span className="md:bg-red-500 text-white text-center text-xs p-1 rounded-md">
                  {productData.length}
                </span>
              </div>
            </Link>
            <Link to="/login">
              <img
                className="w-8 cursor-pointer rounded-full"
                src={userInfo ? userInfo.image : user}
                alt="user"
              />
            </Link>
            <p className="underline font-mono">{userInfo && userInfo.name}</p>
          </div>
        </div>

        <div className="block md:hidden">
          <button
            onClick={toggleNavbar}
            className="text-2xl text-gray-500 focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className={`flex flex-col gap-5 items-start px-4 mb-4  md:hidden ${isOpen ? 'block' : 'hidden'}`}>
       <Link  className="text-sm text-slate-400 hover:underline hover:underline-offset-4 relative" to='/'>Home</Link>
       <Link  className="text-sm text-slate-400 hover:underline hover:underline-offset-4 relative" to='/products'>Products</Link>
       <Link  className="text-sm text-slate-400 hover:underline hover:underline-offset-4 relative" to='/cart'>Cart</Link>
       <Link  className="text-sm text-slate-400 hover:underline hover:underline-offset-4 relative" to="/login">
              <img
                className="w-8 cursor-pointer rounded-full"
                src={userInfo ? userInfo.image : user}
                alt="user"
              />
            </Link>
            <p className="underline font-mono">{userInfo && userInfo.name}</p>
      </div>
    </div>
  );
};

export default Navbar;
