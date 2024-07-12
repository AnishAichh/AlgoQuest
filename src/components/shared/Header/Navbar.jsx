import React from 'react';
import { auth } from "../../../firebase"; 


export default function Navbar() {
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
        <div className=' text-white flex justify-between items-center w-5/6 mx-auto py-6'>
            <div className='text-2xl font-bold'>
                J<span className='text-lg text-yellow-400'>QUEST</span>
            </div>
            <div className='flex items-center gap-6'>
                <a href="/explore">Explore</a>
                <a href="problems">Problems</a>
                
            </div>
            <div>
                <button type='button' className='flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400 hover:bg-yellow-500 transition duration-300'>
                    <img src='/path/to/your/icon.png' alt='User Icon' className='w-6 h-6' />
                </button>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
}
