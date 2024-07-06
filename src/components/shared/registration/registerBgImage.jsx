import React from 'react'
import img1 from '../../../assets/registerImage.jpg'



const RegisterBgImage = () => {
  return (
    < >
      <div className='bg-gradient-to-r from-cyan-500 to-blue-500 absolute -z-10 w-full h-full'>
        <img className='w-1/2 h-fit absolute right-24 top-0' src={img1} alt='background image' />
      </div>
    </>
  )
}

export default RegisterBgImage;
