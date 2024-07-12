import React from 'react'
import img1 from '../../../assets/registerImage.jpg'



const RegisterBgImage = () => {
  return (
    < >
      <div className='bg-gradient-to-r from-cyan-500 to-blue-500 absolute -z-10 w-full h-full'>
        <img className='max-w-60 absolute right-0 top-20 md:top-0 md:max-w-md md:right-12 xl:top-0 xl:max-w-lg xl:right-56 2xl:top-0 2xl:right-64' src={img1} alt='background image' />
      </div>
    </>
  )
}

export default RegisterBgImage;
