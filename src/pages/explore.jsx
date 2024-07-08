import React from 'react'
import Navbar from '../components/shared/explore/navbar'
import Header from '../components/shared/explore/heading'
import Body from '../components/shared/explore/body'


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


