import React from 'react'
import {assets} from '../assets/assets'
const 
Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
       <div>
            <img src={assets.logo} className='mb-5 w-32 alt="" '/>
            <p className='w-full md:w-2/3 text-gray-600'>
                It has survived not only five centuries, but also the leap into
                 electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of 
                  Letraset sheets containing Lorem Ipsum passages, and more recently with 
                  desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum
            </p>
       </div>
       <div>
            <p className='text-xl mb-5 font-medium'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
       </div>
       <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>91+7126738739</li>
            <li>contactForever@gmail.com</li>
          </ul>
       </div>

      </div>
      <div>
        <hr/>
        <p className='py-5 text-sm text-center'>All copyrights reserved to Forver.com</p>
       </div>
  </div>
  )
}

export default 
Footer