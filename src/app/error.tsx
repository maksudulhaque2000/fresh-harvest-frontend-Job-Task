'use client';

import { useEffect } from 'react';
import Link from 'next/link';


interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      <div className="bg-white rounded-xl shadow-2xl p-8 sm:p-10 md:p-12 text-center max-w-md w-full border border-gray-200">

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-red-600 mb-4 animate-bounce-slow">
          Oops!
        </h1>
  
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          Something went wrong.
        </h2>
   
        <p className="text-base sm:text-lg text-gray-600 mb-8">
          {error.message || "We apologize, but an unexpected error occurred."}
        </p>

        <Link href="/">
          <button
            className="w-full px-6 py-3 bg-[#749B3F] text-white font-semibold rounded-lg shadow-md
                       hover:bg-[#176D38] transition-colors duration-300 ease-in-out
                       focus:outline-none focus:ring-2 focus:ring-[#176D38] focus:ring-opacity-75
                       text-lg sm:text-xl"
          >
            Go back to Home
          </button>
        </Link>

        <button
          className="mt-4 w-full px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md
                     hover:bg-gray-300 transition-colors duration-300 ease-in-out
                     focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75
                     text-lg sm:text-xl"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  );
}