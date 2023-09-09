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
        <p>Our Summer Collections</p>
        <h1>
          <span>The New Arrival</span>
          <br />
          <span>Nike</span>
          Shoes 
        </h1>
        <p>
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
                              <p className='font-montserrat text-2xl text-zinc-300'>{stat.value}</p>
                              <pc className='font-palanquin text-lg'>{stat.label}</pc>
                            </div>
                          ))}
                        </div>
      </div>
    </section>
  )
}

export default Hero