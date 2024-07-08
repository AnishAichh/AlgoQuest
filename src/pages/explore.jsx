import React from 'react'
import Navbar from '../components/Shared/Explore/navbar'
import Header from '../components/Shared/Explore/heading'
import Body from '../components/Shared/Explore/body'


function Explore() {
    return (
        <div className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>
            <Navbar />
            <Header />
            <Body />
        </div>
    )
}

export default Explore


