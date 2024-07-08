import React from 'react'

const Card = ({ title, img, link }) => {
  return (
    <div>
      <div className='max-w-sm rounded overflow-hidden shadow-md hover:shadow-lg transition duration-300'>
        <a href={link}>
          <img className='w-full h-48 ' src={img} alt={title} />
        </a>
        <div className='bg-indigo-800 p-2'>{title}</div>
      </div>
    </div>
  )
}

export default Card
