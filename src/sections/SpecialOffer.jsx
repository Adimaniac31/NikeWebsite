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
          <br />
          <span className="text-8xl text-coral-red font-montserrat ">Special</span> Offer 
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Embark on a shopping journey that redefines your experience with unbeatable deals.From premier selections to incredible savings, we offer unparalleled value that sets us apart.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Navigate a realm of possibilities designed to fulfil your unique desires,surpassing the loftiest expectations.Your journey with us is nothing short of exceptional.
        </p>
        </div>
        <div className='mt-11'>
          <Button label="View Details"/>
        </div>
    </section>
  )
}

export default SpecialOffer