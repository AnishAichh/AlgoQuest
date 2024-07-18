import React from 'react'
import Form from "../components/organisms/registration/Form";
import RegisterBgImage from '../components/organisms/registration/registerBgImage';

function Registration() {
    return (
        <div>
            <RegisterBgImage />
            <div className='text-white mx-auto'>
                <h2 className="py-8 w-11/12 mx-auto"><span className="font-bold text-2xl">J</span>QUEST</h2>
                <div className="w-10/12 mx-auto relative z-10">
                    <h1 className="font-bold text-4xl">Welcome to JQUEST Community</h1>
                    <p className="pb-4 mt-1">Already have an account? <a className="underline" href="" target="_blank">Login</a></p>
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default Registration
