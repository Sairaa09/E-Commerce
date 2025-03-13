import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t border-gray-300">
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={assets.contact_img} alt="" className="w-full md:max-w-[480px]" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className='font-semibold text-xl text-gray-700'>Our Store</p>
          <p className='text-gray-500'>54709 Willms Station
          Suite 350,<br /> Washington, USA</p>
          <p className='text-gray-500'>Tel: (415) 555-0132 <br /> Email: admin@forever.com</p>
          <p className='font-semibold text-xl text-gray-700'>Careers at Forever</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className="border px-8 py-4 hover:bg-black hover:text-white text-sm transition-all duration-500">Explor jobs</button>
        </div>
      </div>
      <div>
        <NewsLetterBox/>
      </div>
    </div>
  )
}

export default Contact