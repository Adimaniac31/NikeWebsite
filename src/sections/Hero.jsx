import React from 'react'
import Button from '../Components/Button'
import { arrowRight } from '../assets/assets/icons'
import { statistics } from '../Constants'
const Hero = () => {
  return (
    <section
    id="home"
    className='w-full flex xl:flex-row flex-col justify-center min-h-screen border-2 border-red-500 p-2'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <p className='text-xl font-palanquin text-blue-400' >Our Summer Collections</p>
        <h1 className= "text-md font-palanquin text-slate-400 mt-10 text-4xl max-sm:leading-[82] font-bold">
          <span className='max-sm:72px xl:bg-white xl:white-space-nowrap relative z-10 pr-10 inline-block mt-3'>The New Arrival</span>
          <br />
          <span className="text-8xl text-coral-red font-montserrat ">Nike</span> Shoes 
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mb-14'>
          Discover stylish Nike
          Arrivals, quality comfort, 
          and innovation for your 
          active life.
        </p>
        <Button label="Shop Now" iconURL={arrowRight}/>
        <div className='flex justify-starts items-start flex-wrap
                        w-full mt-20 gap-16'>
                          {statistics.map((stat,index)=>(
                            <div>
                              <p className='font-montserrat text-3xl text-zinc-300 font-bold'>{stat.value}</p>
                              <pc className='font-palanquin text-lg font-bold'>{stat.label}</pc>
                            </div>
                          ))}
          </div>
      </div>
    </section>
  )
}

export default Hero