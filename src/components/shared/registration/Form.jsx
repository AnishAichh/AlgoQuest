import { Checkbox } from '@chakra-ui/react';
import React from 'react'

const Form = () => {
  return (
    <div>
      <form className='text-white'>
        <div>
          <h2 className='mt-8 p-1'>Email</h2>
          <input className="rounded-lg w-3/5 h-9 pb-1 pl-2 mb-10 bg-transparent border border-white" type='text' placeholder='Enter your email' />
        </div>
        <div>
          <h2 className='p-1'>Username</h2>
          <input className="rounded-lg w-3/5 h-9 pb-1 pl-2 mb-10 bg-transparent border border-white" type='text' placeholder='Enter your username' />
        </div>
        <div>
          <h2 className='p-1'>Password</h2>
          <input className="rounded-lg w-3/5 h-9 pb-1 pl-2 bg-transparent border border-white" type='text' placeholder='Enter your password' />
          <ul className='m-1 pl-6 w-3/5 list-disc grid grid-cols-3 gap-x-10 text-sm'>
            <li> Use 8 or more characters</li>
            <li> One uppercase character</li>
            <li> One lowercase character</li>
            <li> One special character</li>
            <li> One number</li>
          </ul>
        </div>
        <Checkbox className='my-6'><p className=''>I want to receive emails about the product, features updates, events, and marketing promotions.</p></Checkbox>
        <p className='my-6'> By creating an account, you agree to the <a className='underline' href='' target='_blank'>Terms of Use</a> and <a className='underline' href='' target='_blank'>Privacy Policy</a></p>
        <button className='bg-violet-700 text-white rounded-xl w-60 h-12 mb-32 font-bold text-xl'>Create an Account</button>
      </form>
    </div>
  )
}

export default Form;
