'use client';

import React from 'react';


interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <div>
      <button className="text-base font-semibold font-lato lg:mx-5 md:py-0 group relative w-max">
        <span className='font-montserrat'>{text}</span>
        <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-[#749B3F] group-hover:w-full"></span>
      </button>
    </div>
  );
};


export default Button;