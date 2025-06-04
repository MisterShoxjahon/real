import React from 'react'
import Callways from '../Arraycalls/Callways'

const Location = () => {
  return (
    <section className='container'>
        <div data-aos="fade-up" className='w-[22rem] md:w-[754px] -ml-[20px] lg:w-[1349px] mt-[40px] lg:mt-[62px] lg:-ml-[55px] h-[758px] bg-[#E3ECF5]'>
        <div className='lg:pt-[55px] pt-[25px] flex justify-center'>
            <h2 className='font-bold text-[30px] text-yellow'>Оплата и доставка</h2>
        </div>
        <Callways />
        <div className='flex justify-center pt-[1px] lg:pt-[52px]'>
        <iframe className='rounded-[14px]' width="94%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Dodo%20Pizza+(Shox_dev)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/collections/sports-gps/">Sport GPS</a></iframe>
        </div>
        </div>
    </section>
  )
}

export default Location
