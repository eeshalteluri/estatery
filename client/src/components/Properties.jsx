import React from 'react'
import PropertyCard from './PropertyCard'

import Property1 from "../assets/property1.png"
import Property2 from "../assets/property2.png"
import Property3 from "../assets/property3.png"
import Property4 from "../assets/property4.png"
import Property5 from "../assets/property5.png"
import Property6 from "../assets/property6.png"



const Properties = () => {
  return (
    <div className='bg-[#F7F7FD] mx-sectionMarginX md:px-sectionPaddingX py-sectionPaddingY flex flex-col justify-center items-center gap-8'>
      
      <div className='w-full md-sectionMarginX flex justify-center md:justify-between items-center gap-4 text-center md:text-left'>
        <div className='flex flex-col justify-center items-center gap-2'>
        <h2 className='text-4xl font-bold'>Based on your location</h2>
        <p className='text-[#4D5461] '>Some of our picked properties near your location</p>
        </div>

        <button className='hidden sm:block bg-primary text-white rounded-md px-6 py-2'>Browse Properties</button>
      </div>

      <div className='w-full md:w-fit flex flex-col justify-center items-center sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 gap-4 lg:gap-8'>
      <PropertyCard
        image={Property1}
        name={"Palm Harbour"}
        price={2095}
        location={"2699 Green Valley, Highland Lake, FL"}
        beds={3}
        bathrooms={2}
        length={5}
        breadth={7} />

        <PropertyCard
        image={Property2}
        name={"Beverly Springfield"}
        price={2700}
        location={"2821 Lake Sevilla, Palm Harbor, TX"}
        beds={4}
        bathrooms={2}
        length={6}
        breadth={7.5} />

        <PropertyCard
        image={Property3}
        name={"Faulkner Ave"}
        price={4550}
        location={"909 Woodland St, Michigan, IN"}
        beds={4}
        bathrooms={3}
        length={8}
        breadth={10} />

        <PropertyCard
        image={Property4}
        name={"St. Crystal"}
        price={2400}
        location={"210 US Highway, Highland Lake, FL"}
        beds={4}
        bathrooms={2}
        length={6}
        breadth={8} />

        <PropertyCard
        image={Property5}
        name={"Cover Red"}
        price={1500}
        location={"243 Curlew Road, Palm Harbor, TX"}
        beds={2}
        bathrooms={1}
        length={5}
        breadth={7.5} />

        <PropertyCard
        image={Property6}
        name={"Tarpon Bay"}
        price={1600}
        location={"103 Lake Shores, Michigan, IN"}
        beds={3}
        bathrooms={1}
        length={5}
        breadth={7} />
      </div>

      <button className='block sm:hidden w-full bg-secondary text-white rounded-md px-6 py-2'>Browse Properties</button>
    </div>
  )
}

export default Properties