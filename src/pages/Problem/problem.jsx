import React from 'react';
import QuestionList from '../../context/QuestionList/QuestionList';
import {Navbar} from '../../components/organisms';

function Problem() {
    return (
        <div className='bg-gray-900 min-h-screen'>
            <Navbar />
            <QuestionList />
        </div>
    )
}

export default Problem;
