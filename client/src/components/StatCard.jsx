import React from 'react'

const StatCard = ({image, stat, title}) => {
  return (
    <div className='flex flex-col items-center gap-4'>
      <img 
      src={image} 
      alt={title}
      className='w-[72px] h-[72px]' />
      <h3 className='text-2xl font-bold'>{stat}</h3>
      <p className='text-[#4D5461] sm:max-w-[150px]'>{title}</p>
    </div>
  )
}

export default StatCard