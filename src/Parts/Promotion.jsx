import React from 'react'
import bigcake from '../assets/images/bigcake.png'
import smallcake from '../assets/images/smallcake.png'
import girl from '../assets/images/girl.png'

const Promotion = () => {
  return (
    <section className='container'>
        <div className='mt-[64px] relative'>
            <div className='flex justify-center'>
            <h2 className='font-bold text-[44px] text-lightblack'>Наши <span className='text-yellow'>акции</span></h2>
            </div>
            <div data-aos="fade-up" className='lg:flex space-y-6 lg:justify-around lg:mt-[47px]'>
                <div>
                <img src={bigcake} alt={bigcake}/>
                </div>
                <div className='grid grid-cols-2 space-y-8 space-x-8'>
                    <img src={smallcake} alt={smallcake}/>
                    <img src={smallcake} alt={smallcake}/>
                    <img src={smallcake} alt={smallcake}/>
                    <img src={smallcake} alt={smallcake}/>
                </div>
            </div>
            <div className='flex justify-center pt-[19px]'>
            <div className='w-[160px] h-[48px] flex justify-center items-center rounded-[23px] bg-yellow'>
                <button className='font-bold text-[14px] text-white'>Все вкции</button>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Promotion
