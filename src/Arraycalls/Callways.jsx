import React from 'react'
import shop from '../assets/icons/shop.svg'
import lorry from '../assets/icons/lorry.svg'
import laptop from '../assets/icons/laptop.svg'
import timelorry from '../assets/icons/timelorry.svg'

const Callways = () => {
    const ways = [
        {
            img: shop,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
            img: lorry,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
            img: laptop,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
            img: timelorry,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        }
    ]
  return (
    <div data-aos="fade-up" className='md:grid grid grid-cols-2 space-y-10 md:grid-cols-3 lg:grid md:ml-[40px] md:space-y-10 lg:ml-[60px] lg:grid-cols-4 pt-[65px]'>
      {ways.map((item, index) => {
        return(
            <div className='w-[170px] lg:w-[255px] md:w-[200px] h-[104px] bg-white rounded-[14px]'>
                <div className='flex justify-center'>
                <div className='w-[77px] h-[77px] bg-white rounded-[50%] flex justify-center items-center -mt-[34px]'>
                <img src={item.img} alt={item.img}/>
                </div>
                </div>
                <div className='flex justify-center'>
                <h5 className='w-[218px] font-semibold text-[10px] lg:text-[14px] pl-[20px] text-[#473E43]'>{item.desc}</h5>
                </div>
            </div>
        )
      })}
    </div>
  )
}

export default Callways
