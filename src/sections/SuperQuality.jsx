import React from 'react'
import { arrowRight } from '../assets/assets/icons'
import Button from '../Components/Button'
const SuperQuality = () => {
  return (
    <section
      id = "about-us"
      className='flex justify-between
      items-center max-lg:flex-col gap-10
      w-ull max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className= "text-md font-palanquin capitalize text-slate-400 mt-10 text-4xl max-sm:leading-[82] font-bold lg-max w-lg">
          <span className='max-sm:72px xl:bg-white xl:white-space-nowrap relative z-10 pr-10 inline-block mt-3'>The New Arrival</span>
          <br />
          <span className="text-8xl text-coral-red font-montserrat ">Nike</span> Shoes 
        </h2>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mb-14'>
          Discover stylish Nike
          Arrivals, quality comfort, 
          and innovation for your 
          active life.
        </p>
        </div>
        <Button label="View Details" iconURL={arrowRight}/>
    </section>
  )
}

export default SuperQuality