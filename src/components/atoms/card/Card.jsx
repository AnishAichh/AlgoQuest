import React from 'react'

const Card = ({ title, img, link }) => {
  return (
    <div>
      <div className='max-w-sm rounded overflow-hidden hover:scale-110 duration-300'>
        <a href={link}>
          <img className='w-full h-48' src={img} alt={title} />
        </a>
        <div className='bg-lime-500 p-2 font-bold'>{title}</div>
      </div>
    </div>
  )
}

export default Card
