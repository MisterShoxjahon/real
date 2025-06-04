import React from 'react'
import pizza from '../assets/images/pizza.png'

const Optionscall = () => {
    const options = [
        {
            img: pizza,
            title: 'Карбонара',
            span: 'от 120 ₽'
        },
        {
            img: pizza,
            title: 'Карбонара',
            span: 'от 120 ₽'
        },
        {
            img: pizza,
            title: 'Карбонара',
            span: 'от 120 ₽'
        },
        {
            img: pizza,
            title: 'Карбонара',
            span: 'от 120 ₽'
        }
    ]
  return (
    <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-[10px]'>
            {options.map((item, index) => {
                return(
                    <div className='flex items-center space-x-7 bg-white hover:shadow-2xl w-[255px] p-[20px] h-[99px]'>
                        <img src={item.img} alt={item.img}/>
                        <div>
                            <h4 className='font-bold text-[18px] text-lightblack'>{item.title}</h4>
                            <h4 className='font-bold text-[16px] text-yellow'>{item.span}</h4>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Optionscall
