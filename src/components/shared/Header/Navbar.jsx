import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className=' text-white flex justify-between items-center w-5/6 mx-auto py-6'>
            <div className='text-2xl font-bold'>
                J<span className='text-lg text-yellow-400'>QUEST</span>
            </div>
            <div className='flex items-center gap-6'>
                <Link to='./about' className='hover:text-yellow-400 transition duration-300'>About</Link>
                <Link to='./explore' className='hover:text-yellow-400 transition duration-300'>Explore</Link>
                <Link to='./problems' className='hover:text-yellow-400 transition duration-300'>Problems</Link>
            </div>
            <div>
                <button type='button' className='flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400 hover:bg-yellow-500 transition duration-300'>
                    <img src='/path/to/your/icon.png' alt='User Icon' className='w-6 h-6' />
                </button>
            </div>
        </div>
    );
}
