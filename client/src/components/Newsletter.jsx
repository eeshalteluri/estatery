import React from 'react'

const Newsletter = () => {
  return (
    <div className='mt-sectionTopMargin md:px-sectionPaddingX py-sectionPaddingY flex flex-col items-center gap-4 text-white bg-secondary'>
      <p className='text-lg font-bold text-primary'>No Spam Promise</p>
      <h2 className='text-4xl text-center font-bold'>Are you a landlord?</h2>
      <p className='text-center'>Discover ways to increase your home's value and  get listed. No Spam.</p>

      <div className='w-full max-w-sm flex bg-white rounded'>
      <input 
          type="text"
          placeholder='Enter your email address'
          className='m-2 px-4 py-2 flex-1'
          />
        <button className='bg-primary text-white rounded-md px-4 py-2 m-2'>Submit</button>
      </div>

      <p className='text-sm text-center text-gray-400'>Join <span className='text-white'>10,000+</span> other landlords in our estatery community.</p>
    </div>
  )
}

export default Newsletter