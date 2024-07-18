import React, { useState } from 'react';
import { auth } from "../../../firebase"; 

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    async function handleLogout() {
        try {
          await auth.signOut();
          window.location.href = "/login";
          console.log("User logged out successfully!");
        } catch (error) {
          console.error("Error logging out:", error.message);
        }
    }
    
    return (
        <div className='text-white flex justify-between items-center w-5/6 mx-auto py-6'>
            <div className='text-2xl font-bold'>
                J<span className='text-lg text-yellow-400'>QUEST</span>
            </div>
            <div className='hidden md:flex items-center gap-6'>
                <a href="/About">About</a>
                <a href="/explore">Explore</a>
                <a href="problems">Problems</a>
            </div>
            <div className='flex items-center gap-4'>
                <button type='button' className='flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400 hover:bg-yellow-500 transition duration-300'>
                    <img src='/path/to/your/icon.png' alt='User Icon' className='w-6 h-6' />
                </button>
                <button onClick={handleLogout} className='hidden md:block'>Logout</button>
            </div>
            {/* Mobile menu button */}
            <button className='md:hidden' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
                </svg>
            </button>
            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className='md:hidden flex flex-col items-center gap-6 absolute top-16 left-0 right-0 bg-gray-900 text-white p-4'>
                    <a href="/About">About</a>
                    <a href="/explore">Explore</a>
                    <a href="problems">Problems</a>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}
        </div>
    );
}
