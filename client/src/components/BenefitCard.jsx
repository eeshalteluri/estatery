import React from 'react'

const BenefitCard = ({image, title, description}) => {
  return (
    <div className='flex flex-col items-start gap-4 max-w-[300px]'>
      <img 
        src={image} 
        alt={title}
        className='w-[48px] h-[48px]' />
      <h3 className='font-bold'>{title}</h3>
      <p className='text-[#4D5461]'>{description}</p>
    </div>
  )
}

export default BenefitCard