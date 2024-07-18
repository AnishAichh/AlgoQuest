import React from 'react'
import QuestionList from '../components/QuestionList'
import Navbar from '../components/shared/Header/Navbar';

function Problem() {
    return (
        <div className='bg-gray-900 min-h-screen'>
            <Navbar></Navbar>
            <QuestionList />
        </div>
    )
}

export default Problem;
