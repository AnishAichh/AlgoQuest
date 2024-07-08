import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='flex flex-cols justify-between w-5/6 mx-auto py-6'>
            <div className='text-xl font-semibold'>J<span className='text-lg'>
                QUEST</span>
            </div>
            <div className='flex flex-cols justify-between gap-6'>
                <Link to='./about'>About</Link>
                <Link to='./explore'>Explore</Link>
                <Link to='./problems'>Problem</Link>
            </div>
            <div>
                <button type='button' className=''>
                    <img src='' alt='' />
                </button>
            </div>
        </div>
    )
}
