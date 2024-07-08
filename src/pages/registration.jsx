import React from 'react'
import RegisterBgImage from "../components/Shared/registration/registerBgImage";
import Form from "../components/Shared/registration/Form";

function Registration() {
    return (
        <div>
            <RegisterBgImage />
            <div className='text-white px-20'>
                <div className="w-5/6 mx-auto relative z-10">
                    <h2 className="py-8"><span className="font-bold text-2xl">J</span>QUEST</h2>
                    <h1 className="font-bold text-4xl">Welcome to JQUEST Community</h1>
                    <p className="pb-4 mt-1">Already have an account? <a className="underline" href="" target="_blank">Login</a></p>
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default Registration
