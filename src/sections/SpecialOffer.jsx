import React from 'react'
import { offer } from '../assets/assets/images'
import Button from '../Components/Button'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} width={773} height={687} className='object-contain w-full'/>
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className= "text-md font-palanquin capitalize text-slate-400 mt-10 text-4xl max-sm:leading-[82] font-bold lg-max w-lg">
          <span className='max-sm:72px xl:bg-white xl:white-space-nowrap relative z-10 pr-10 inline-block mt-3'>We Provide You</span>
          <br />
          <span className="text-8xl text-coral-red font-montserrat ">Super Quality</span> Shoes 
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and 
          style, our meticulously crafted footwear is 
          designed to elevate your experience, providing with unmatched quality,
          innovation, and a touch of elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        </div>
        <div className='mt-11'>
          <Button label="View Details"/>
        </div>
    </section>
  )
}

export default SpecialOffer