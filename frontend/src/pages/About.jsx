import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'About '} text2={'Us'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=''/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Forever nascetur e-commerce platformum with a vision to simplify your lifestyle. From fashion to tech and everything in between, we curate products that blend quality with affordability.</p>
          <p>Lorem ipsum dolor sit amet, Forever was born from a simple idea — shopping should be intuitive, inspiring, and instantly accessible. Founded by a team of innovators and dreamers, our platform connects customers with products they love, all in one seamless digital experience.</p>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Our platform ensures a smooth and secure checkout, lightning-fast delivery, and a support team that’s always here for you.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At Forever, our mission is to make modern shopping seamless, personal, and inspiring. We strive to connect people with products they love — through trusted service, curated collections, and technology that feels effortless. We believe great style, quality, and convenience should be accessible to everyone, every day.</p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY '} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer tincidunt, velit a scelerisque efficitur, purus nisi gravida lorem, nec bibendum ligula lacus nec enim.

Suspendisse potenti. Curabitur euismod metus nec sem consequat, at lacinia sem lacinia. Ut feugiat, nibh vitae facilisis eleifend, turpis est elementum elit, ut dignissim quam purus vitae orci.

Donec dictum nisl non justo sollicitudin, nec eleifend mauris sagittis. Nunc blandit fringilla ex, nec rutrum risus suscipit nec. Sed ullamcorper risus vitae pulvinar dictum.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convinience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer tincidunt, velit a scelerisque efficitur, purus nisi gravida lorem, nec bibendum ligula lacus nec enim.

Suspendisse potenti. Curabitur euismod metus nec sem consequat, at lacinia sem lacinia. Ut feugiat, nibh vitae facilisis eleifend, turpis est elementum elit, ut dignissim quam purus vitae orci.

Donec dictum nisl non justo sollicitudin, nec eleifend mauris sagittis. Nunc blandit fringilla ex, nec rutrum risus suscipit nec. Sed ullamcorper risus vitae pulvinar dictum.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional customer service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer tincidunt, velit a scelerisque efficitur, purus nisi gravida lorem, nec bibendum ligula lacus nec enim.

Suspendisse potenti. Curabitur euismod metus nec sem consequat, at lacinia sem lacinia. Ut feugiat, nibh vitae facilisis eleifend, turpis est elementum elit, ut dignissim quam purus vitae orci.

Donec dictum nisl non justo sollicitudin, nec eleifend mauris sagittis. Nunc blandit fringilla ex, nec rutrum risus suscipit nec. Sed ullamcorper risus vitae pulvinar dictum.</p>
        </div>
      </div>

      <NewsletterBox/>

    </div>
  )
}

export default About