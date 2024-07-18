import React from 'react'

const Card = ({ title, img, link }) => {
  return (
    <div>
      <div className='max-w-sm rounded overflow-hidden hover:shadow-lg hover:transform transition-transform duration-300 hover:scale-105 m-2'>
        <a href={link}>
          <img className='w-full h-44' src={img} alt={title} />
        </a>
        <div className='bg-indigo-800 p-2'>{title}</div>
      </div>
    </div>
  )
}

export default Card
