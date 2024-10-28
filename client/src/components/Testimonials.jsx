import React from 'react'

const Testimonials = () => {
  return (
    <div className='mt-sectionTopMargin mx-sectionMarginX md:px-sectionPaddingX py-sectionPaddingY flex flex-col items-center gap-4'>
      <div className='flex flex-col items-center gap-2'>
        <h2 className='text-2xl font-bold'>Testimonials</h2>
        <p className='text-[#4D5461]'>See what our property managers, landlords, and tenants have to say</p>
      </div>

      <p className='text-semibold text-[#000929] text-center'>“Estatery is the platform I go to on almost a daily basis for 2nd home and vacation condo shopping, or to just look at dream homes in new areas. Thanks for fun home shopping and comparative analyzing, Estatery!”</p>
      <p><span className='font-bold'>Mira Culos</span>, Renter </p>

      <div className='flex gap-4'>
        <button className='w-10 h-10 md:w-14 md:h-14 bg-[#DBC0DD] rounded-full border-2 border-white focus:outline-2 focus:outline-primary'></button>
        <button className='w-10 h-10 md:w-14 md:h-14 bg-[#C3C7DF] rounded-full border-2 border-white focus:outline-2 focus:outline-primary'></button>
        <button className='w-10 h-10 md:w-14 md:h-14 bg-[#CFC3A7] rounded-full border-2 border-white focus:outline-2 focus:outline-primary'></button>
      </div>
    </div>
  )
}

export default Testimonials