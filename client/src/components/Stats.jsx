import React from 'react'
import StatCard from './StatCard'

import Stat1 from '../assets/stat1.png'
import Stat2 from '../assets/stat2.png'
import Stat3 from '../assets/stat3.png'
import House from '../assets/house.png'

const Stats = () => {
  return (
        <div className='mx-sectionMarginX md:px-sectionPaddingX py-sectionPaddingY flex flex-col md:flex-row md:justify-center items-center gap-8'>
          <div className='bg-[#F7F7FD] p-8 flex flex-col sm:flex-row justify-center items-center gap-8 rounded'>
            <StatCard 
            image={Stat1}
            stat="7.4%"
            title="Property Return Rate"/>
            <StatCard 
            image={Stat2}
            stat="3,856"
            title="Property in Sell & Rent"/>
            <StatCard 
            image={Stat3}
            stat="2,540"
            title="Daily Completed Transactions"/>

            <div className='max-w-[300px] bg-[#F7F7FD] p-6 flex flex-col items-start gap-4 rounded'>
              <h2 className='text-2xl font-bold'>The numbers don't lie, do they?</h2>
              <p>A total of 3,856 properties are listed for sale and rent.</p>
              <p> and adding more every day!</p>
              <button className='bg-secondary text-white rounded px-4 py-2'>Browse Properties</button>
            </div>
          </div>          
        </div>  

    )
}

export default Stats