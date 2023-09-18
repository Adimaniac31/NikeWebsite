import React from 'react'
import { products } from "../Constants"

const PopularProduct = () => {
  return (
    <section id="products" className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'><span className='text-coral-red'>Popular</span>Products</h2>
        <p>
          We have a wide range of quality and affordable products to suit your needs. We are committed towards providing you with the best possible service at an
        </p>
      </div>
    </section>
  )
}

export default PopularProduct