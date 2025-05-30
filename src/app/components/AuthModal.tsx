'use client';

import React, { useState } from 'react';
import { TfiClose } from 'react-icons/tfi';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

const AuthModal = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMode = () => setIsLogin(!isLogin);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        className="px-4 py-2 bg-[#749B3F] text-white rounded-md hover:bg-[#176D38]"
      >
        Register
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              onClick={closeModal}
            >
              <TfiClose />
            </button>

            <h2 className="text-2xl font-bold text-center mb-6">
              {isLogin ? 'Login' : 'Register'}
            </h2>

            {!isLogin && (
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none"
                />
              </div>
            )}

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none"
              />
            </div>

            {isLogin && (
              <div className="mb-4 text-right">
                <a href="#" className="text-sm text-orange-500 hover:underline">
                  Forgot Password?
                </a>
              </div>
            )}

            <button className="w-full py-2 bg-orange-500 text-white font-semibold rounded-md">
              {isLogin ? 'Login' : 'Register'}
            </button>

            <div className="my-4 text-center text-gray-500">Or {isLogin ? 'Sign in' : 'Sign up'} with</div>

            <div className="flex justify-center space-x-4 mb-4">
              <button className="flex items-center px-4 py-2 border rounded-md">
                <FcGoogle className="mr-2 text-xl" /> Google
              </button>
              <button className="flex items-center px-4 py-2 border rounded-md">
                <FaFacebook className="mr-2 text-xl text-blue-600" /> Facebook
              </button>
            </div>

            <div className="text-center">
              <p className="text-sm">
                {isLogin ? (
                  <>Don&apos;t have an account?{' '}
                    <button onClick={toggleMode} className="text-orange-500 hover:underline">Sign up</button>
                  </>
                ) : (
                  <>Already have an account?{' '}
                    <button onClick={toggleMode} className="text-orange-500 hover:underline">Log in</button>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthModal;
