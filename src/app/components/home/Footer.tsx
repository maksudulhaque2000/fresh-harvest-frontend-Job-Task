import { FaFacebook, FaSquareInstagram } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdCall, MdLocationOn, MdMessage } from "react-icons/md";


import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        <div className="">
          <div className="flex items-center">
            <img className="w-[70%]" src="/logo.png" alt="logo" />
          </div>
          <div className="lg:mt-20">
            <p className="font-rubik font-medium">Download App:</p>
            <div className="flex items-center">
              <img className="h-10 object-cover" src="/images/footer/appStore.png" alt="app store" />
              <img className="h-[70px] object-cover" src="/images/footer/googlePlay.png" alt="app store" />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links 1</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link href="/shop" className="hover:underline">Shop</Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:underline">About Us</Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:underline">Blog</Link>
            </li>
            <li>
              <Link href="/blogs/detail" className="hover:underline">Detail Blog</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links 2</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>
              <Link href="/favorites" className="hover:underline">Favorites</Link>
            </li>
            <li>
              <Link href="/cart" className="hover:underline">Cart</Link>
            </li>
            <li>
              <Link href="/login" className="hover:underline">Sign In</Link>
            </li>
            <li>
              <Link href="/register" className="hover:underline">Register</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-sm text-gray-600 flex items-center gap-1">
            <span><MdCall className="text-[#749B3F] text-lg"/></span>
            <strong>Phone:</strong> +123 5678 90
          </p>
          <p className="text-sm text-gray-600 flex items-center gap-1">
            <span><MdMessage className="text-[#749B3F] text-lg"/></span>
            <strong>Email:</strong> freshharvests@gmail.com
          </p>
          <p className="text-sm text-gray-600 flex items-center gap-1">
            <span><MdLocationOn className="text-[#749B3F] text-lg"/></span>
            <strong>Address:</strong> TunjukStreet,Pontianak,Indonesia
          </p>
          <div className="mt-4">
            <p className="text-sm font-rubik font-semibold text-gray-800">Accepted Payment Methods:</p>
            <div className="flex gap-2 mt-2">
              <img className="w-26 h-26 object-contain bg-white px-4 rounded" src="/images/footer/visa.png" alt="visa" />
              <img className="w-26 h-26 object-contain bg-white px-4 rounded" src="/images/footer/payPal.png" alt="payPal" />
              <img className="w-26 h-26 object-contain bg-white px-4 rounded" src="/images/footer/applePay.png" alt="apple pay" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <hr className="my-8 border-gray-300" />
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center mt-4 py-4 text-gray-600">
          <p className="text-center lg:text-left mb-2 lg:mb-0">© Copyright {new Date().getFullYear()}, All Rights Reserved by Banana Studio</p>
          <div className="flex gap-4 text-2xl">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#749B3F] transition-colors duration-200"><AiFillTwitterCircle /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#749B3F] transition-colors duration-200"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#749B3F] transition-colors duration-200"><FaSquareInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;