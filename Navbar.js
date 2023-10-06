// components/NavBar.js
import { ConnectWallet } from '@thirdweb-dev/react';
import Link from 'next/link';
import { useState } from 'react';

export default function NavBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-500 via-blue-600 to-green-400 py-3 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <div className="text-3xl md:text-4xl font-extrabold text-white px-3">
            HomeDapp
          </div>
        </Link>

        <div className="hidden md:flex space-x-6 px-2 justify-center">
          <Link href="/">
            <div className="text-white hover:text-yellow-400 mt-2">Home</div>
          </Link>
          <Link href="/about">
            <div className="text-white hover:text-yellow-400 mt-2">About</div>
          </Link>
          <Link href="/signup">
            <div className="text-white hover:text-yellow-400 mt-2">Signup</div>
          </Link>
          <Link href="/login">
            <div className="text-white hover:text-yellow-400 mt-2">Login</div>
          </Link>
          <Link href="/map">
            <div className="text-white hover:text-yellow-400 mt-2">MapView</div>
          </Link>
          <Link href="/homes">
            <div className="text-white hover:text-yellow-400 mt-2">Homes</div>
          </Link>
          
            <div className="text-white hover:text-yellow-400 p-0 "><ConnectWallet/></div>
        
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex">
        <Link href="/login " className='mr-2'>
              <div className="block text-white py-2"><ConnectWallet/></div>
            </Link>
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-yellow-400 focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-purple-500 via-blue-600 to-green-400">
          <div className="container mx-auto py-2 px-2">
            <Link href="/">
              <div className="block text-white py-2">Home</div>
            </Link>
            <Link href="/about">
              <div className="block text-white py-2">About</div>
            </Link>
            <Link href="/signup">
              <div className="block text-white py-2">Signup</div>
            </Link>
            <Link href="/login">
              <div className="block text-white py-2">Login</div>
            </Link>
            <Link href="/login">
              <div className="block text-white py-2"><ConnectWallet/></div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
