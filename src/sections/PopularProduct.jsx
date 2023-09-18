import React from 'react'
import { products } from "../Constants"

const PopularProduct = () => {
  return (
    <section id="products" className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'><span className='text-coral-red'>Popular</span>Products</h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
          We have a wide range of quality and affordable products to suit your needs. We are committed towards providing you with the best possible service at an
        </p>
      </div>
      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>

      </div>
    </section>
  )
}

export default PopularProduct