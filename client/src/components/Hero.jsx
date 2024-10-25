import React, { useState, useEffect, useRef } from 'react';
import HeroImage from '../assets/heroImage.png';
import { LuCalendarDays } from "react-icons/lu";
import { DayPicker } from "react-day-picker";
import 'react-day-picker/dist/style.css';

const Hero = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const datePickerRef = useRef(null); // Create a ref for the date picker and calendar icon

  // Format the selected date in MM/DD/YYYY format
  const formattedDate = selected ? selected.toLocaleDateString('en-US') : '';

  useEffect(() => {
    // Function to handle clicks outside the date picker
    const handleClickOutside = (event) => {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
        setOpen(false); // Close the date picker if clicked outside
      }
    };

    // Add event listener when the component is mounted
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='px-sectionPaddingX sm:pb-32 xl:pb-0 bg-background flex flex-col md:flex-row justify-between md:justify-around items-center gap-2'>
      
      <div className='w-fit lg:ml-12 my-12'>
        <h1 className='text-4xl lg:text-6xl font-bold'>Buy, rent or sell <br />your property easily</h1>
        <p className='font-semibold max-w-[350px] mt-6 md:mt-12'>A great platform to buy, sell and rent your properties without any commissions.</p>

        <div className='mt-6 md:mt-12 flex gap-4'>
          <div className='flex gap-4'>
            <div className='border-r-2 h-14'></div>
            <div>
              <p className='font-bold text-3xl text-primary'>50k+</p>
              <p className='text-gray-500'>renters</p>
            </div>
          </div>
          <div className='flex gap-4'>
            <div className='border-r-2 h-14'></div>
            <div>
              <p className='font-bold text-3xl text-primary'>10k+</p>
              <p className='text-gray-500'>properties</p>
            </div>
          </div>
        </div>

        <div className='z-10 mt-12 w-full'>
          <div className='w-fit border-b bg-white rounded flex'>
            <button className='px-6 py-2 focus:border-b-2 focus:border-primary'>Rent</button>
            <button className='px-6 py-2 focus:border-b-2 focus:border-primary'>Buy</button>
            <button className='px-6 py-2 focus:border-b-2 focus:border-primary'>Sell</button>
          </div >

          <div className='md:absolute bg-white rounded flex flex-wrap gap-4 p-6'>
            <div className='flex flex-col w-full sm:w-auto'>
              <label htmlFor="location" className='text-gray-500'>Location</label>
              <input id="location" type="text" placeholder='Barcelona, Spain' className="rounded p-1 placeholder:text-black placeholder:font-semibold" />
            </div>

            <div className='hidden md:block border-l-2 pl-6 h-14 text-primary' />

            {/* Relative container for date picker */}
            <div className='relative w-full sm:w-auto' ref={datePickerRef}>
              <div className='flex flex-col'>
                <label htmlFor="date" className='text-gray-500'>When</label>

                <div className='flex items-center'>
                  {/* Input for displaying the selected date */}
                  <input 
                    id="date" 
                    type="text" 
                    placeholder='Select Move-in Date' 
                    value={formattedDate} // Display formatted date
                    readOnly // Make the input read-only
                    className="w-full md:w-auto rounded p-1 placeholder:text-black placeholder:font-semibold" 
                  />
                  <LuCalendarDays 
                    onClick={() => setOpen(!open)} 
                    className='text-gray-500 cursor-pointer ml-2' 
                  />  
                </div>
              </div>

              {open && (
                <DayPicker
                  mode="single"
                  selected={selected}
                  onSelect={(date) => {setSelected(date); setOpen(false);}} // Set the selected date
                  classNames={{
                    root: 'absolute z-20 top-full left-0 mt-2 w-auto p-2 bg-white shadow-lg rounded-md',
                    month: 'w-full flex flex-col justify-center items-center py-2',
                    caption: 'text-lg font-bold text-center mb-4',
                    weekdays: 'w-full py-2 grid grid-cols-7 text-center text-gray-500 font-semibold',
                    week: 'w-full py-2 grid grid-cols-7',
                    day: 'w-2 h-2 p-3 flex items-center justify-center text-sm rounded-md hover:bg-gray-200 cursor-pointer',
                    selected: 'bg-blue-500 text-white',
                    today: 'bg-yellow-500 text-white',
                    nav: 'w-full flex justify-between px-4 mb-2',
                    nav_button_previous: 'text-gray-700 hover:text-gray-900',
                    nav_button_next: 'text-gray-700 hover:text-gray-900',
                  }}
                />
              )}
            </div>

            <div className='hidden md:block border-l-2 pl-6 h-14 text-primary' />
            <button className='bg-primary text-white rounded-md px-6 py-2'>Browse Properties</button>
          </div>
        </div>
      </div>

      <img 
        src={HeroImage} 
        alt="House" 
        className='hidden md:block max-w-[700px] w-1/2 h-auto' 
      />
    </div>
  );
}

export default Hero;
