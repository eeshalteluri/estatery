import React from 'react'
import BenefitCard from './BenefitCard'

import House from '../assets/house.png'
import Icon1 from '../assets/icon1.png'
import Icon2 from '../assets/icon2.png'
import Icon3 from '../assets/icon3.png'
import Icon4 from '../assets/icon4.png'

const Benefits = () => {
  return (
    <div className='mx-sectionMarginX md:px-sectionPaddingX py-sectionPaddingY flex flex-col md:flex-row md:justify-center items-center gap-8'>
      <div className='max-w-[300px] bg-[#F7F7FD] p-6 flex flex-col items-start gap-4 rounded'>
        <h2 className='text-2xl font-bold'>The new way to find your new home.</h2>
        <p>Find your dream place to live in with more than 10k+ properties listed</p>
        <button className='bg-secondary text-white rounded px-4 py-2'>Browse Properties</button>

          <img 
          src={House} 
          alt="House Illustration" 
          className='-mr-6 -mb-6' 
          />
      </div>

      <div className='[&>*]:mt-8 md:grid md:grid-cols-2 gap-4'>
        <BenefitCard 
          image={Icon1} 
          title="Property Insurance"
          description={"We offer our customer property protection of liability coverage and insurance for their better life."} />
        <BenefitCard 
          image={Icon2} 
          title="Best Price"
          description={"Not sure what  you should be charging for your property? No need to worry, let us do the numbers for you."} />
          <BenefitCard 
          image={Icon3} 
          title="Lowest Commision"
          description={"You no longer have to negotiate commissions and haggle with other agents it only cost 2%!"} />
        <BenefitCard 
          image={Icon4} 
          title="Overall Control"
          description={"Get a virtual tour, and schedule visits before you rent or buy any properties. You get overall control."} />
      </div>
    </div>
  )
}

export default Benefits