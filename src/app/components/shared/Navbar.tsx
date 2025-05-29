'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { TfiClose } from "react-icons/tfi";
import { VscMenu } from "react-icons/vsc";

import { LuShoppingCart } from "react-icons/lu";
import Button from "./Button";
import AuthModals from "../ui/AuthModals";

interface User {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [navbar, setNavbar] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleLoginOpen = () => {
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
  };

  const handleRegisterOpen = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  const router = useRouter();
  const pathname = usePathname();

 
  const user: User | null = null;
  const displayName: string = "ALMAS HOSSAIN";
  const photoURL: string = "/images/about/photo02.png";

  const handleNavigate = (): void => {
    router.push('/');
  };

  const changeBackground = (): void => {
    if (window.scrollY >= 32) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  const handleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  const getNavLinkClass = (path: string): string => {
    return `block py-2 px-4 rounded-md font-semibold transition-colors duration-200 ${
      pathname === path ? 'text-white bg-[#749B3F]' : 'text-gray-800 hover:text-[#749B3F]'
    }`;
  };

  return (
    <>
      <header className={navbar ? 'bg-[#749B3F]/60 text-white sticky top-0 left-0 z-[99999] shadow-md w-full py-5 overflow-visible' : 'sticky top-0 left-0 z-[99999] shadow-md w-full py-5 overflow-visible '}>
        <div className="container mx-auto px-6 flex items-center">
          <nav className="relative container flex justify-between items-center">
            <div className="w-[50%] lg:w-[20%]">
              <div
                onClick={handleNavigate}
                className="flex items-center cursor-pointer">
                <img className="w-full" src="/logo.png" alt="navbar logo" />
              </div>
            </div>

            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className={`absolute right-[2px] top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-[#749B3F] focus:ring-2 lg:hidden ${isOpen ? 'navbarTogglerActive' : ''
                  }`}
              >
                {!isOpen ? (
                  <TfiClose className="text-2xl" />
                ) : (
                  <VscMenu className="text-2xl" />
                )}
              </button>
            </div>
            <div
              className={`${isOpen ? "-right-full" : "right-0"
                } w-2/3 h-screen p-4 fixed top-[70px] md:top-[100px] z-[999999] bg-gray-100 shadow-md flex flex-col space-y-4 my-transition`}
            >
              <div className="flex flex-col lg:hidden space-y-4">
                <Link href='/' className={getNavLinkClass('/')}>
                  <Button text={"Home"} />
                </Link>
                <Link href='/shop' className={getNavLinkClass('/shop')}>
                  <Button text={"Shop"} />
                </Link>
                <Link href='/aboutus' className={getNavLinkClass('/aboutus')}>
                  <Button text={"About Us"} />
                </Link>
                <Link href='/blogs' className={getNavLinkClass('/blogs')}>
                  <Button text={"Blogs"} />
                </Link>

                <div className="bg-[#176D38]/50 rounded-md py-3">
                  <div className="flex flex-col gap-4">
                    <div>
                      <Link href='/favorites' className="text-xl font-semibold font-lato">Favorites</Link>
                    </div>
                    {
                      user ? <div onClick={handleMenu} className="w-full flex justify-center focus:outline-none cursor-pointer relative group">
                        <div className="w-10 h-10 overflow-hidden border-2 border-gray-400 rounded-full">
                          <img
                            src={user?.photoURL || photoURL}
                            className="object-cover w-full h-full"
                            alt={user?.displayName || "User Profile"}
                          />
                        </div>
                        {
                          menuOpen && <div className="absolute flex flex-col justify-center bg-gray-100 rounded-md px-4 py-3 left-1 top-12 z-50 space-y-3">
                            <p className="uppercase">{user?.displayName || displayName}</p>
                            <p>{user?.email || "user@example.com"}</p>
                            <button
                              className="w-full bg-gray-200 rounded-md py-1">Logout</button>
                          </div>
                        }
                      </div>
                        :
                        <button
                    onClick={handleLoginOpen}
                        className="w-full px-1 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#749B3F] rounded-md hover:bg-[#176D38] focus:outline-none focus:bg-[#176D38]">Register</button>
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[50%] lg:flex lg:justify-center lg:items-center items-center hidden">
              <div className="flex items-center">
                <Link href='/' className={getNavLinkClass('/')}>
                  <Button text={"Home"} />
                </Link>
                <Link href='/shop' className={getNavLinkClass('/shop')}>
                  <Button text={"Shop"} />
                </Link>
                <Link href='/aboutus' className={getNavLinkClass('/aboutus')}>
                  <Button text={"About Us"} />
                </Link>
                <Link href='/blogs' className={getNavLinkClass('/blogs')}>
                  <Button text={"Blogs"} />
                </Link>
                {
                  user && <Link href='/dashboard' className={getNavLinkClass('/dashboard')}>
                    <Button text={"Dashboard"} />
                  </Link>
                }
              </div>
            </div>
            <div className="w-[30%] lg:flex lg:justify-end hidden">
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <img className="w-6" src="/love.png" alt="love" />
                  <Link href='/favorites' className="text-xl font-semibold font-lato pr-4">Favorites</Link>
                  <div className="relative">
                    <span><LuShoppingCart className="text-[#749B3F] text-2xl" /></span>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF6A1A] text-white rounded-full text-xs flex justify-center items-center">3</div>
                  </div>
                </div>

                <p className="font-rubik ml-4">Cart</p>
                {
                  user ? <div className="focus:outline-none cursor-pointer relative group">
                    <div className="w-10 h-10 overflow-hidden border-2 border-gray-400 rounded-full">
                      <img
                        src={user?.photoURL || photoURL}
                        className="object-cover w-full h-full"
                        alt={user?.displayName || "User Profile"}
                      />
                    </div>
                    <div className="absolute group-hover:flex flex-col transform scale-y-0 group-hover:scale-y-100 origin-top ease-in transition duration-150 bg-gray-50 rounded-md px-4 py-3 right-2 top-10 z-50 space-y-2">
                      <p className="uppercase">{user?.displayName || displayName}</p>
                      <p>{user?.email || "user@example.com"}</p>
                      <button
                        className="w-full bg-gray-200 rounded-md py-1">Logout</button>
                    </div>
                  </div>
                    :
                    // <Link href={'/register'}>
                    //   <button
                    //     className="w-full px-5 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#749B3F] rounded-md hover:bg-[#176D38] focus:outline-none focus:bg-[#176D38]">Register</button>
                    // </Link>
                    <button
                    onClick={handleLoginOpen}
                        className="w-full px-1 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#749B3F] rounded-md hover:bg-[#176D38] focus:outline-none focus:bg-[#176D38]">Register</button>
                }
              </div>
            </div>
          </nav>
        </div>
        <AuthModals 
        isLoginOpen={isLoginOpen}
        isRegisterOpen={isRegisterOpen}
        onLoginClose={() => setIsLoginOpen(false)}
        onRegisterClose={() => setIsRegisterOpen(false)}
        onSwitchToRegister={handleRegisterOpen}
        onSwitchToLogin={handleLoginOpen}
      />
      </header>
    </>
  );
};

export default Navbar;