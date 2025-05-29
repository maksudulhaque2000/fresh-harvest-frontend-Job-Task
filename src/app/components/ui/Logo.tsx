import React from 'react';
import Link from 'next/link';
import { Leaf } from 'lucide-react';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="bg-[#749B3F] text-white p-1.5 rounded-md">
        <Leaf size={18} />
      </div>
      <span className="font-bold text-xl text-gray-800">Fresh Harvests</span>
    </Link>
  );
};

export default Logo;