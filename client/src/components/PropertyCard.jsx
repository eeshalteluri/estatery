import React from 'react'

import Bath from "../assets/bath.png"
import Bed from "../assets/bed.png"
import SquareMeters from "../assets/squareMeters.png"

const PropertyCard = ({image, price, name, location, beds, bathrooms, length, breadth}) => {
  return (
    <div className='max-w-[300px] mb-4 bg-white rounded-lg'>
        <img src={image} alt={name} className='w-full h-[200px] object-cover rounded-lg'/>
        <div className='p-4'>
            <p className='text-[#4D5461]'><span className='text-2xl font-bold text-primary'>${price}</span>/month</p>
            <h2 className='text-2xl font-bold'>{name}</h2>
            <p className='text-[#4D5461]'>{location}</p>
        </div>
        <hr />
        <div className='p-4 flex justify-between items-center [&>div>p]:text-[12px]'>
            
            <div className='flex justify-center items-center gap-2'>
                <img src={Bed} alt="Bed" className='w-[20px] h-[20px]'/>
                <p className='overflow-hidden'>{beds} <span className='hidden sm:inline md:hidden lg:inline'>Beds</span></p>
            </div>

            <div className='flex justify-center items-center gap-2 '>
                <img src={Bath} alt="Bath" className='w-[20px] h-[20px]'/>
                <p>{bathrooms} <span className='hidden sm:inline md:hidden lg:inline'>Bathrooms</span></p>
            </div>

            <div className='flex justify-center items-center gap-2'>
                <img src={SquareMeters} alt="SquareMeters" className='w-[20px] h-[20px]'/>
                <p>{length} x {breadth} m<sup>2</sup></p>
            </div>
        </div>
       
    </div>
  )
}

export default PropertyCard