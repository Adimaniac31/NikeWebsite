import React from 'react';
import { services } from '../Constants';

const Services = () => {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9'>
       {services.map((service)=>{
        <ServiceCard key={service.label} {...service}></ServiceCard>
       }
       )} 
    </section>
  )
}

export default Services