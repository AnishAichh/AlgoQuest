import React from 'react'
import QuestionList from '../components/QuestionList'
import Navbar from '../components/shared/Header/Navbar'
function Problem() {
    return (
        <div className='bg-gray-900 min-h-screen'>
            <Navbar></Navbar>
            {/* <Navbar /> */}
            {/* Section 1  */}
            <QuestionList />
            {/* Section 3  */}
        </div>
    )
}
export default Problem;
