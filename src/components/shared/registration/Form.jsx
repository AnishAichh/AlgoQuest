import { Checkbox } from '@chakra-ui/react';
import React from 'react'

const Form = () => {
  return (
    <div>
      <form className='text-white'>
        <div>
          <h2 className='mt-8 p-1'>EMAIL</h2>
          <input className="rounded-lg w-full sm:max-w-md lg:max-w-2xl h-9 pb-1 pl-2 mb-10 bg-transparent border-2 border-white" type='text'/>
        </div>
        <div>
          <h2 className='p-1'>USERNAME</h2>
          <input className="rounded-lg w-full sm:max-w-md lg:max-w-2xl h-9 pb-1 pl-2 mb-10 bg-transparent border-2 border-white" type='text' />
        </div>
        <div>
          <h2 className='p-1'>PASSWORD</h2>
          <input className="rounded-lg w-full sm:max-w-md lg:max-w-2xl h-9 pb-1 pl-2 bg-transparent border-2 border-white" type='text'/>
          <ul className='m-1 pl-3 w-full sm:max-w-lg lg:max-w-3xl list-disc grid grid-cols-3 gap-x-5 text-sm'>
            <li> Use 8 or more characters</li>
            <li> One uppercase character</li>
            <li> One lowercase character</li>
            <li> One special character</li>
            <li> One number</li>
          </ul>
        </div>
        <Checkbox className='mt-8'><p className=''>I want to receive emails about the product, features updates, events, and marketing promotions.</p></Checkbox>
        <p className='my-6'> By creating an account, you agree to the <a className='underline' href='' target='_blank'>Terms of Use</a> and <a className='underline' href='' target='_blank'>Privacy Policy</a></p>
        <button className='bg-blue-900 hover:bg-indigo-950 text-white rounded-xl w-7/8 h-auto mb-24 p-2 font-bold text-xl hover:shadow-lg hover:transform transition-transform duration-300 hover:scale-110'>Create an Account</button>
      </form>
    </div>
  )
}

export default Form;
