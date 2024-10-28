import React from 'react'
import Logo from '../assets/estateryLogo.png'

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
    <div className='bg-[#F7F7FD]  md:px-sectionPaddingX py-sectionPaddingY flex flex-col md:flex-row justify-center items-center md:justify-around md:items-start gap-8'>
      <img src={Logo} alt="logo" />
      <div className='flex flex-col md:flex-row justify-start items-start gap-16'>
      <div>
      <div className='mb-6'>
        <h3 className='font-bold mb-2'>SELL A HOME</h3>
        <ul className='text-sm [&>li]:cursor-pointer [&>li]:text-[#4D5461] [&>li]:mb-2'>
          <li>Request an offer</li>
          <li>Pricing</li>
          <li>Reviews</li>
          <li>Stories</li>
        </ul>
      </div>

      <div>
        <h3 className='font-bold mb-2'>BUY A HOME</h3>
        <ul className='text-sm [&>li]:cursor-pointer [&>li]:text-[#4D5461] [&>li]:mb-2'>
          <li>Buy</li>
          <li>Finance</li>
        </ul>
      </div>
      </div>

      <div>
      <div className='mb-6'>
        <h3 className='font-bold mb-2'>BUY, RENT AND SELL</h3>
        <ul className='text-sm [&>li]:cursor-pointer [&>li]:text-[#4D5461] [&>li]:mb-2'>
          <li>Buy and sell properties</li>
          <li>Rent home</li>
          <li>Builder trade-up</li>
        </ul>
      </div>

      <div>
        <h3 className='font-bold mb-2'>TERMS & PRIVACY</h3>
        <ul className='text-sm [&>li]:cursor-pointer [&>li]:text-[#4D5461] [&>li]:mb-2'>
          <li>Trust & Safety</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      </div>

      <div>
      <div className='mb-6'>
        <h3  className='font-bold mb-2'>ABOUT</h3>
        <ul className='text-sm [&>li]:cursor-pointer [&>li]:text-[#4D5461] [&>li]:mb-2'>
          <li>Company</li>
          <li>How it works</li>
          <li>Contact</li>
          <li>Investors</li>
        </ul>
      </div>

      <div>
        <h3 className='font-bold mb-2'>RESOURCES</h3>
        <ul className='text-sm [&>li]:cursor-pointer [&>li]:text-[#4D5461] [&>li]:mb-2'>
          <li>Blog</li>
          <li>Guides</li>
          <li>FAQ</li>
          <li>Help Center</li>
        </ul>
      </div>
      </div>
      </div>
      
      <hr />
    </div>

    <div className='flex justify-between items-center px-6 py-4'>
      <p className='text-sm text-[#4D5461]'>© 2023 Estatery. All rights reserved.</p>
      <div className='flex gap-4'>
        <FaFacebookF className='text-[#4D5461] text-lg cursor-pointer'/>
        <FaInstagram className='text-[#4D5461] text-lg cursor-pointer'/>
        <FaTwitter className='text-[#4D5461] text-lg cursor-pointer'/>
        <FaLinkedin className='text-[#4D5461] text-lg cursor-pointer'/>
      </div>
    </div>
    </div>
  )
}

export default Footer